import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { FormProvider, FTextField } from "../../components/Form";

import LogoBasic from "../../components/LogoBasic";

import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

import "./RegisterPage.scss";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain at least 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Password must match"),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const navigate = useNavigate();

  const auth = useAuth();

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;

    try {
      await auth.register({ firstName, lastName, email, password }, () => {
        toast.success("Register successfully");
        navigate("/login", { replace: true });
      });
    } catch (error) {
      reset();
      setError("responseError", error);
      toast.error(error.message);
    }
    //trim data first name, lastname and email
  };

  return (
    <div className="register_container">
      <div className="title">
        <LogoBasic />
        <Typography variant="h4" sx={{ mt: "24px", fontSize: "36px" }}>
          Register
        </Typography>
        <Typography variant="h5" sx={{ mt: "10px", fontSize: "1rem" }}>
          to become a member of DIY
        </Typography>
      </div>
      <div className="form">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.responseError && (
              <Alert severity="error">{errors.responseError.message}</Alert>
            )}
            <Alert severity="info">
              Already have an account?{" "}
              <Link variant="subtitle2" component={RouterLink} to="/login">
                Sign in
              </Link>
            </Alert>

            <FTextField name="firstName" label="First name" />
            <FTextField name="lastName" label="Last name" />
            <FTextField name="email" label="Email address" />
            <FTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FTextField
              name="passwordConfirmation"
              label="Password Confirmation"
              type={showPasswordConfirmation ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPasswordConfirmation(!showPasswordConfirmation)
                      }
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPasswordConfirmation ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton
              className="register_btn"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ fontWeight: 700 }}
            >
              Register
            </LoadingButton>
          </Stack>
        </FormProvider>
      </div>
    </div>
  );
}

export default RegisterPage;
