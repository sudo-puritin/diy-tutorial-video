import React from "react";

import "./SettingPage.scss";

import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormProvider, FTextField } from "../../../components/form";
import { LoadingButton } from "@mui/lab";

const initialValue = {
  firstName: "",
  lastName: "",
  description: "",
};

function SettingPage() {
  const methods = useForm({ initialValue });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    let { firstName, lastName, description } = data;
    console.log("submit", data);
  };
  return (
    <>
      <Typography variant="h7" sx={{ fontWeight: 700 }}>
        Profile customization
      </Typography>
      <hr />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="setting_container">
          <div className="settingName_box">
            <Typography variant="h7" sx={{ fontWeight: 700 }}>
              Name
            </Typography>
            <Typography variant="h7">
              Choose a profile name that represents you and your content.
            </Typography>
            <FTextField name="firstName" label="First Name" />
            <FTextField name="lastName" label="Last Name" />
          </div>

          <div className="settingDescription_box">
            <Typography variant="h7" sx={{ fontWeight: 700 }}>
              Overview
            </Typography>
            <Typography variant="h7">Tell viewers about yourself.</Typography>
            <FTextField
              name="description"
              label="Description"
              multiline
              rows={4}
            />
          </div>

          <LoadingButton
            className="publish_btn"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{ fontWeight: 700 }}
            loading={isSubmitting}
          >
            Publish
          </LoadingButton>
        </div>
      </FormProvider>
    </>
  );
}

export default SettingPage;
