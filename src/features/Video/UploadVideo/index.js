import React, { useRef, useState } from "react";
import "./UploadVideo..scss";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  CATEGORY_OPTION,
  COLLECTION_OPTION,
  DIFFICULTY_OPTION,
  DURATION_OPTION,
  MATERIAL_OPTION,
  TOOLS_OPTION,
} from "../../../constants/hompage.constants";

import { FormProvider, FSelect, FTextField } from "../../../components/Form";
import { LoadingButton } from "@mui/lab";
import { cloudinaryVideoUpload } from "../../../ultis/cloudinary";
import { useDispatch, useSelector } from "react-redux";
import { createVideo } from "../videoSlice";
import useAuth from "../../../hooks/useAuth";
import { ListItemText, MenuItem, OutlinedInput } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import ToolsMultipleSelect from "../../../components/ToolsMulticheck";

const creatingVideoSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  collection: Yup.string().required("Collection is required"),
  difficulty: Yup.string().required("Difficulty is required"),
  duration: Yup.string().required("Duration is required"),
  material: Yup.string().required("Material is required"),
  tool: Yup.string().required("Tools is required"),
  videoUrl: Yup.string().required("Video is required"),
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  width: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const UploadVideo = () => {
  const fileInput = useRef();

  const { isLoading } = useSelector((state) => state.video);

  const [fileLocalUrl, setFileLocalUrl] = useState("");

  const defaultValues = {
    title: "",
    category: "",
    collection: "",
    description: "",
    difficulty: "",
    duration: "",
    material: "",
    tool: "",
    videoUrl: "",
  };

  const methods = useForm({
    resolver: yupResolver(creatingVideoSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
  } = methods;

  console.log("🚀 Puritin ~ UploadVideo ~ errors:", errors);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("🚀 Puritin ~ onSubmit ~ data:", data);
    // const url = handleUploadVideo(fileLocalUrl);
    // data.videoUrl = url;
    // dispatch(createVideo({ data }));
  };

  const handleUploadVideo = async ({ localUrl }) => {
    const response = await cloudinaryVideoUpload(localUrl);

    if (response.success) {
      return response.videoUrl;
    }
  };

  const handleFile = (e) => {
    const file = fileInput.current.files[0];
    console.log("🚀 Puritin ~ handleFile ~ file:", file);
    if (file) {
      setFileLocalUrl(file);
    }
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex" }}
    >
      <div className="uploadVideo_container">
        <div className="uploadField_container">
          <label htmlFor="fileInput" className="uploadField_box">
            <CloudUploadIcon width="100px" />
            <input
              type="file"
              name="fileInput"
              id="fileInput"
              ref={fileInput}
              onChange={handleFile}
            />

            <VisuallyHiddenInput type="file" multiple ref={fileInput} />
            <h4>Drag and drop video files to upload</h4>
            <h5 style={{ marginTop: "-16px" }}>
              Your videos will be private until you publish them.
            </h5>
          </label>
        </div>

        <h4>Title</h4>
        <FTextField
          name="title"
          placeholder={"Enter your title video"}
          sx={{ maxWidth: "876px" }}
        />
        <h4>Description</h4>
        <FTextField
          sx={{ maxWidth: "876px" }}
          name="description"
          multiline
          rows={4}
          placeholder={"Tell your viewers about your video..."}
        />

        <div
          className="option_list"
          style={{ margin: "50px 0", maxWidth: "876px", width: "100%" }}
        >
          <h4>Duration</h4>
          <FSelect name="duration" sx={{ maxWidth: "876px" }}>
            {DURATION_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Difficulty</h4>
          <FSelect name="difficulty" sx={{ maxWidth: "876px" }}>
            {DIFFICULTY_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Material</h4>
          <FSelect name="material" sx={{ maxWidth: "876px" }}>
            {MATERIAL_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Tools</h4>
          <ToolsMultipleSelect name="tool" sx={{ maxWidth: "876px" }} />

          <h4>Category</h4>
          <FSelect name="category" sx={{ maxWidth: "876px" }}>
            {CATEGORY_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Collection</h4>
          <FSelect name="collection" sx={{ maxWidth: "876px" }}>
            {COLLECTION_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>
        </div>

        <div
          width="100%"
          style={{
            maxWidth: "876px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting || isLoading}
            sx={{
              maxWidth: "200px",
              fontWeight: 700,
            }}
          >
            Upload video
          </LoadingButton>
        </div>
      </div>
    </FormProvider>
  );
};

export default UploadVideo;
