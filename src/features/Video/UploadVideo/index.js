import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CATEGORY_OPTION,
  COLLECTION_OPTION,
  DIFFICULTY_OPTION,
  DURATION_OPTION,
} from "../../../constants/list.constants";
import { FormProvider, FSelect, FTextField } from "../../../components/Form";
import { cloudinaryVideoUpload } from "../../../ultis/cloudinary";
import { useDispatch, useSelector } from "react-redux";
import ToolsMultipleSelect from "../../../components/ToolsMulticheck";
import MaterialMultipleSelect from "../../../components/MaterialMulticheck";
import UploadNewVideo from "./UploadNewVideo";
import { createVideo, updateVideoInfo } from "../videoSlice";
import { useNavigate } from "react-router-dom";
import PATH_NAME from "../../../constants/pathName.constants";

import { LoadingButton } from "@mui/lab";

import "./UploadVideo..scss";

const creatingVideoSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  collection: Yup.string().required("Collection is required"),
  difficulty: Yup.string().required("Difficulty is required"),
  duration: Yup.string().required("Duration is required"),
  material: Yup.array().min(1, "Material is required"),
  tool: Yup.array().min(1, "Material is required"),
  videoUrl: Yup.string().required("Video is required"),
});

const UploadVideo = ({ initialData, isEdit = false }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.video);

  const [videoSrc, setVideoSrc] = useState(initialData?.videoUrl || "");

  const defaultValues = {
    title: "",
    category: "",
    collection: "",
    description: "",
    difficulty: "",
    duration: "",
    material: [],
    tool: [],
    videoUrl: "",
    videoFile: null,
    ...initialData,
  };

  const methods = useForm({
    resolver: yupResolver(creatingVideoSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    let urlVideoFromCloudy = "";
    if (data.videoFile) {
      urlVideoFromCloudy = await handleUploadVideo(data.videoFile);
    }
    const formDataSubmit = {
      ...data,
      material: data.material.join(","),
      tool: data.tool.join(","),
      videoUrl: urlVideoFromCloudy ? urlVideoFromCloudy : data.videoUrl,
    };
    delete formDataSubmit.videoFile;

    if (isEdit) {
      dispatch(
        updateVideoInfo({ data: formDataSubmit, videoId: formDataSubmit._id })
      ).then((response) => {
        if (response.success) {
          navigate("/user");
        }
      });
    } else {
      dispatch(createVideo({ ...formDataSubmit, user_id: user._id })).then(
        (response) => {
          if (response.success) {
            navigate(PATH_NAME.PROFILE);
          }
        }
      );
    }
  };

  const handleUploadVideo = async (fileVideo) => {
    const response = await cloudinaryVideoUpload(fileVideo);

    if (response.success) {
      return response.videoUrl;
    }
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex" }}
    >
      <div className="uploadVideo_container">
        <UploadNewVideo videoSrc={videoSrc} setVideoSrc={setVideoSrc} />
        <p
          style={{
            color: "#d32f2f",
            fontSize: "0.75rem",
            fontWeight: 400,
            margin: "4px 14px 0 14px",
          }}
        >
          {errors?.videoUrl?.message}
        </p>

        <div className="draftDisplay_info">
          <div style={{ width: "100%", maxWidth: "876px", marginTop: "24px" }}>
            <h4>Title</h4>
            <FTextField
              name="title"
              placeholder={"Enter your title video"}
              sx={{ maxWidth: "876px" }}
              disabled={isSubmitting}
            />
          </div>
          <div style={{ width: "100%", maxWidth: "876px" }}>
            <h4>Description</h4>
            <FTextField
              sx={{ maxWidth: "876px" }}
              disabled={isSubmitting}
              name="description"
              multiline
              rows={4}
              placeholder={"Tell your viewers about your video..."}
            />
          </div>
        </div>

        <div
          className="option_list"
          style={{ maxWidth: "876px", width: "100%" }}
        >
          <h4>Duration</h4>

          <FSelect
            name="duration"
            sx={{ maxWidth: "876px" }}
            disabled={isSubmitting}
          >
            {DURATION_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Difficulty</h4>
          <FSelect
            name="difficulty"
            sx={{ maxWidth: "876px" }}
            disabled={isSubmitting}
          >
            {DIFFICULTY_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Material</h4>
          <MaterialMultipleSelect
            name="material"
            sx={{ maxWidth: "876px" }}
            disabled={isSubmitting}
          />

          <h4>Tools</h4>
          <ToolsMultipleSelect
            name="tool"
            sx={{ maxWidth: "876px" }}
            disabled={isSubmitting}
          />

          <h4>Category</h4>
          <FSelect
            name="category"
            sx={{ maxWidth: "876px" }}
            disabled={isSubmitting}
          >
            {CATEGORY_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <h4>Collection</h4>
          <FSelect
            name="collection"
            sx={{ maxWidth: "876px" }}
            disabled={isSubmitting}
          >
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
            marginTop: "30px",
            maxWidth: "876px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {isEdit ? (
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
              Update
            </LoadingButton>
          ) : (
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
              Publish
            </LoadingButton>
          )}
        </div>
      </div>
    </FormProvider>
  );
};

export default UploadVideo;
