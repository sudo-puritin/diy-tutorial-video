import React, { useState } from "react";

import apiService from "../../app/apiService";

import { FCheckbox, FormProvider, FTextField } from "../../components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

import "./LoginPage.scss";
import LogoBasic from "../../components/LogoBasic";
import { PRIMARY } from "../../themes";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
  remember: false,
};

function LoginPage() {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    let { email, password } = data;

    try {
      const response = await apiService.post("/users", {
        email,
        password,
      });
      console.log("🚀 Puritin ~ onSubmit ~ response:", response);
    } catch (error) {
      reset();
      setError("responseError", error);
    }
  };

  return (
    <div className="login_container">
      <div className="title">
        <LogoBasic />
        <Typography variant="h4" sx={{ mt: "24px", fontSize: "36px" }}>
          Sign in
        </Typography>
        <Typography variant="h5" sx={{ mt: "10px", fontSize: "1rem" }}>
          to continue to DIY
        </Typography>
      </div>
      <div className="form">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.responseError && (
              <Alert severity="error">{errors.responseError.message}</Alert>
            )}
            <Alert severity="info">
              Don't have an account?{" "}
              <Link
                className="getStarted_text"
                variant="subtitle2"
                style={{ color: PRIMARY }}
                component={RouterLink}
                to="/register"
              >
                Get started
              </Link>
            </Alert>
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
          </Stack>

          <Stack
            direction="row"
            sx={{ my: 2 }}
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <FCheckbox name="remember" label="Remember me" />

            <Link
              className="forgot_text"
              component={RouterLink}
              variant="subtitle2"
              style={{ color: PRIMARY }}
              to="/"
            >
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton
            className="login_btn"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{ fontWeight: 700 }}
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </FormProvider>
      </div>
    </div>
  );
}

export default LoginPage;
