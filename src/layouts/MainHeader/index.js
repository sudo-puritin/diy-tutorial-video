import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Typography } from "@mui/material";

import "./MainHeader.scss";

import AvatarBox from "./AvatarBox";

function MainHeader() {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundColor: "#3F5B5C",
      }}
    >
      <div className="appBar_box">
        <div className="appBar_info">
          <Link to="/">
            <img
              src="../images/logoLight.png"
              alt="Logo"
              width="70"
              height="61"
            />
          </Link>

          <div
            style={{
              paddingLeft: "170px",
              display: "flex",
              gap: "40px",
            }}
          >
            <Link to="/category" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: "32px",
                  letterSpacing: -1,
                  color: "#C5B38C",
                  textDecoration: "none",
                }}
              >
                CATEGORY
              </Typography>
            </Link>
            <Link to="/collection" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  lineHeight: "32px",
                  letterSpacing: -1,
                  color: "#C5B38C",
                  textDecoration: "none",
                }}
              >
                COLLECTION
              </Typography>
            </Link>
          </div>
        </div>
        <AvatarBox />
      </div>
    </AppBar>
  );
}

export default MainHeader;
