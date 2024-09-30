import React, { useState } from "react";
import "./MyVideoPage.scss";
import { useNavigate } from "react-router-dom";

import MyVideoList from "./VideoList";

import { Button, Typography } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PATH_NAME from "../../../constants/pathName.constants";

function MyVideoPage() {
  const navigate = useNavigate();

  return (
    <div className="myVideo_container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          My videos
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate(PATH_NAME.CREATE_VIDEO)}
        >
          <AddBoxOutlinedIcon fontSize="small" />{" "}
          <span style={{ marginLeft: "5px" }}>Create</span>
        </Button>
      </div>

      <hr />

      <div className="myList_container">
        <MyVideoList />
      </div>
    </div>
  );
}

export default MyVideoPage;
