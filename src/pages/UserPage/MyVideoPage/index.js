import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MyVideoList from "../../../features/Video/MyVideoList";
import PATH_NAME from "../../../constants/pathName.constants";

import { Button, Typography } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import "./MyVideoPage.scss";

const MyVideoPage = () => {
  const { user } = useAuth();

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
        <MyVideoList userId={user._id} />
      </div>
    </div>
  );
};

export default MyVideoPage;
