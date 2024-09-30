import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import "./UserPage.scss";

import { Avatar, Box, Button, Tab, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { TabContext, TabList } from "@mui/lab";
import { styled } from "@mui/material/styles";

import useAuth from "../../hooks/useAuth";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UserPage() {
  const [value, setValue] = useState("1");

  const { user } = useAuth();
  console.log("🚀 Puritin ~ UserPage ~ user:", user);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="userPage_container">
        <div className="leftSide_container">
          <div className="avatar_box">
            <Button component="label" role={undefined} tabIndex={-1}>
              <Avatar
                {...stringAvatar(`${user.lastName}${" "}${user.firstName}`)}
                sx={{ width: "100px", height: "100px" }}
              />
              <div className="photoIcon_box">
                <PhotoCameraIcon />
              </div>
              <VisuallyHiddenInput
                type="file"
                onChange={(event) =>
                  console.log("file upload", event.target.files)
                }
                multiple
              />
            </Button>
          </div>

          <Typography
            variant="h5"
            sx={{ p: "5px", fontWeight: 700, textAlign: "center" }}
          >
            {user.lastName} {user.firstName}
          </Typography>

          <div className="option_box">
            <TabContext value={value}>
              <Box>
                <TabList onChange={handleChange} orientation="vertical">
                  <Tab
                    label="Video"
                    value="1"
                    className="option_btn"
                    onClick={() => navigate("/user")}
                  />
                  <Tab
                    label="Setting"
                    value="2"
                    className="option_btn"
                    onClick={() => navigate("/user/setting")}
                  />
                </TabList>
              </Box>
            </TabContext>
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

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

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
