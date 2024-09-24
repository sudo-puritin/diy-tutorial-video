import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#C5B38C",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            display: "flex",
          }}
        >
          <Link to="/">
            <img
              src="../images/logoDark.png"
              alt="Logo"
              width="70"
              height="61"
            />
          </Link>

          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "5px",
              left: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "393px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  lineHeight: "24px",
                  color: "#35494B",
                  cursor: "pointer",
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  lineHeight: "24px",
                  color: "#35494B",
                  cursor: "pointer",
                }}
              >
                CONTACT US
              </Typography>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  lineHeight: "24px",
                  color: "#35494B",
                  cursor: "pointer",
                }}
              >
                PRIVACY POLICY
              </Typography>
            </Box>
            <Box
              sx={{
                width: "144px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=435&format=png&color=35494B"
                alt="facebook"
                width="32px"
                height="32px"
              />
              <img
                src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=35494B"
                alt="twitterX"
                width="32px"
                height="32px"
              />
              <img
                src="https://img.icons8.com/?size=100&id=32292&format=png&color=35494B"
                alt="instagram"
                width="32px"
                height="32px"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default MainFooter;
