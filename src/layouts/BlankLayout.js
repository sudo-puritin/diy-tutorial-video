import { Stack } from "@mui/material";
import React from "react";
import LogoBasic from "../components/LogoBasic";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <LogoBasic />
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
