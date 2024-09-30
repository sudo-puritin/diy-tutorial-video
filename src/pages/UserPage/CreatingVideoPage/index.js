import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  CATEGORY_OPTION,
  DIFFICULTY_OPTION,
  DURATION_OPTION,
  MATERIAL_OPTION,
  TOOLS_OPTION,
} from "../../../constants/hompage.constants";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { FormProvider, FSelect, FTextField } from "../../../components/Form";
import { LoadingButton } from "@mui/lab";

import "./CreatingVideoPage.scss";

const creatingVideoSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  collection: Yup.string().required("Collection is required"),
  difficulty: Yup.string().required("Difficulty is required"),
  duration: Yup.string().required("Duration is required"),
  material: Yup.string().required("Material is required"),
  tools: Yup.string().required("Tools is required"),
  videoURL: Yup.string().required("Video is required"),
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function CreatingVideoPage() {
  const defaultValues = {
    title: "",
    category: "",
    collection: "",
    description: "",
    difficulty: "",
    duration: "",
    material: "",
    tools: "",
    videoURL: "",
  };

  const methods = useForm({
    resolver: yupResolver(creatingVideoSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    let {
      title,
      category,
      collection,
      description,
      difficulty,
      duration,
      material,
      tools,
      videoURL,
    } = data;
    console.log("submit", data);
  };

  return (
    <div>
      <h3>Upload videos</h3>
      <hr />
      <div className="uploadVideo_container">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="uploadField_box">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) =>
                  console.log("file upload", event.target.files)
                }
                multiple
              />
            </Button>

            <h4>Drag and drop video files to upload</h4>
            <h5 style={{ marginTop: "-16px" }}>
              Your videos will be private until you publish them.
            </h5>
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
          <div className="option_list" style={{ margin: "50px 0" }}>
            <h4>Duration</h4>
            <FSelect name="duration" sx={{ maxWidth: "876px" }}>
              {DURATION_OPTION.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </FSelect>

            <h4>Difficulty</h4>
            <FSelect name="difficulty" sx={{ maxWidth: "876px" }}>
              {DIFFICULTY_OPTION.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </FSelect>

            <h4>Category</h4>
            <FSelect name="category" sx={{ maxWidth: "876px" }}>
              {CATEGORY_OPTION.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </FSelect>

            <h4>Material</h4>
            <FSelect name="material" sx={{ maxWidth: "876px" }}>
              {MATERIAL_OPTION.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </FSelect>

            <h4>Tools</h4>
            <FSelect name="tools" sx={{ maxWidth: "876px" }}>
              {TOOLS_OPTION.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </FSelect>
          </div>

          <div
            width="100%"
            style={{
              maxWidth: "876px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{
                maxWidth: "200px",
                fontWeight: 700,
              }}
            >
              Upload video
            </LoadingButton>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default CreatingVideoPage;
