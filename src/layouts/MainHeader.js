import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Typography } from "@mui/material";

function MainHeader() {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundColor: "#3F5B5C",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: "space-between",
          gap: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: 500,
            width: "100%",
            gap: 24,
          }}
        >
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
                COLLECTION
              </Typography>
            </Link>
          </div>
        </div>

        <Link to="/login" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: "1.2rem",
              lineHeight: "32px",
              color: "#C5B38C",
              textDecoration: "none",
            }}
          >
            Sign in
          </Typography>
        </Link>
      </div>
    </AppBar>
  );
}

export default MainHeader;
