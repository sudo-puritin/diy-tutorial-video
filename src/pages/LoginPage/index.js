import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FCheckbox, FormProvider, FTextField } from "../../components/Form";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import LogoBasic from "../../components/LogoBasic";
import { PRIMARY } from "../../themes";

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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
  remember: false,
};

const LoginPage = () => {
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

  const auth = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const from = location.state?.from.pathname || "/user";
    let { email, password, remember } = data;

    try {
      await auth.login({ email, password, remember }, () => {
        navigate(from, { replace: true });
        toast.success("Login successfully");
      });
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
            <div>
              <Typography variant="h7" sx={{ fontWeight: 500 }}>
                Email address
              </Typography>
              <FTextField name="email" />
              <Typography variant="h7" sx={{ fontWeight: 500 }}>
                Password
              </Typography>
              <FTextField
                name="password"
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
            </div>
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
};

export default LoginPage;
