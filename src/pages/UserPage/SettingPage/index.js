import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FormProvider, FTextField } from "../../../components/Form";
import { updateUserInfo } from "../../../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import "./SettingPage.scss";

const SettingPage = () => {
  const { user } = useAuth();

  const isLoading = useSelector((state) => state.user.isLoading);
  console.log("🚀 Puritin ~ SettingPage ~ isLoading:", isLoading);

  const dispatch = useDispatch();

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    ...user,
  };

  const methods = useForm({ defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data) => {
    dispatch(updateUserInfo({ userId: user._id, data: { ...data } }));
  };

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
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
            <FTextField name="firstName" label="First Name" required />
            <FTextField name="lastName" label="Last Name" required />
          </div>

          <div className="settingEmail_box">
            <Typography variant="h7" sx={{ fontWeight: 700 }}>
              Email
            </Typography>
            <FTextField
              name="email"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div>

          <div className="settingDescription_box">
            <Typography variant="h7" sx={{ fontWeight: 700 }}>
              Bio
            </Typography>

            <FTextField
              name="description"
              placeholder={"Tell viewers about yourself"}
              multiline
              rows={4}
            />
          </div>
          <div
            width="100%"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <LoadingButton
              className="publish_btn"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ fontWeight: 700, maxWidth: "150px" }}
              loading={isSubmitting || isLoading}
              disabled={!isDirty}
            >
              Update
            </LoadingButton>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default SettingPage;
