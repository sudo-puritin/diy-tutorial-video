import React from "react";
import { Outlet } from "react-router-dom";
import { WARNING } from "../../themes";

import "./BlankLayout.scss";

function BlankLayout() {
  return (
    <div
      style={{
        background: WARNING.light,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "10px",
      }}
    >
      <Outlet />
    </div>
  );
}

export default BlankLayout;
