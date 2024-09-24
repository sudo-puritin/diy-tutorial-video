import React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

function MainHeader() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#3F5B5C",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              left: "80px",
              display: "flex",
              alignItems: "center",
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

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Link to="/category" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    pl: "100px",
                    mr: 4,
                    fontFamily: "sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
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
                    fontSize: "1rem",
                    lineHeight: "32px",
                    letterSpacing: -1,
                    color: "#C5B38C",
                    textDecoration: "none",
                  }}
                >
                  COLLECTION
                </Typography>
              </Link>
            </Box>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  position: "absolute",
                  top: "25%",
                  right: "140px",
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "32px",
                  color: "#C5B38C",
                  textDecoration: "none",
                }}
              >
                Sign in
              </Typography>
            </Link>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
