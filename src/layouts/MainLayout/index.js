import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";

import { Box, Stack } from "@mui/material";

import "./MainLayout.scss";

function MainLayout() {
  const location = useLocation();

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <div
        className="layout_container"
        style={{ padding: location.pathname === "/" ? "" : "16px 150px" }}
      >
        <Outlet />
      </div>
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
