import { Box, Stack } from "@mui/material";
import React from "react";
import LogoBasic from "../../components/LogoBasic";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <div className="layout_container">
      <Stack minHeight="100vh" justifyContent="center" alignItems="center">
        <LogoBasic />
        <Box mb={2} />
        <Outlet />
      </Stack>
    </div>
  );
}

export default BlankLayout;
