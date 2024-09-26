import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

import "./UserPage.scss";

import { Avatar, Button, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function UserPage() {
  const navigate = useNavigate();
  const handleAddPhoto = () => {
    console.log("click me");
  };
  return (
    <>
      <div className="userPage_container">
        <div className="leftSide_container">
          <div className="avatar_box" onClick={() => handleAddPhoto()}>
            <Avatar
              {...stringAvatar("Thinh Nguyen")}
              sx={{ width: "100px", height: "100px" }}
            />
            <div className="photoIcon_box">
              <PhotoCameraIcon />
            </div>
          </div>

          <Typography
            variant="h5"
            sx={{ p: "5px", fontWeight: 700, textAlign: "center" }}
          >
            Thinh Nguyen Duc
          </Typography>

          <div className="option_box">
            <Button className="option_btn" onClick={() => navigate("/user")}>
              Videos
            </Button>

            <Button
              className="option_btn"
              onClick={() => navigate("/user/setting")}
            >
              Setting
            </Button>
          </div>
        </div>
        <div className="rightSide_container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserPage;

//another MUI function

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
