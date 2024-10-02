import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UploadAvatar from "../../features/User/UploadAvatar";

import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import "./UserPage.scss";

function UserPage() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="userPage_container">
        <div className="leftSide_container">
          <UploadAvatar />
          <Typography
            variant="h5"
            sx={{ p: "5px", fontWeight: 700, textAlign: "center" }}
          >
            {user.firstName} {user.lastName}
          </Typography>

          <div className="option_box">
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  orientation="vertical"
                  scrollButtons="auto"
                >
                  <Tab
                    className="option_btn"
                    label="Video"
                    value="1"
                    onClick={() => navigate("/user")}
                  />
                  <Tab
                    className="option_btn"
                    label="Setting"
                    value="2"
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
