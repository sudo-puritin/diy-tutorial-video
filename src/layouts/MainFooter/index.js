import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainFooter.module.scss";

function MainFooter() {
  return (
    <div className={classes["footer_container"]}>
      <div className={classes["logo"]}>
        <Link to="/">
          <img src="../images/logoDark.png" alt="Logo" width="70" height="61" />
        </Link>
      </div>

      <div className={classes["info_container"]}>
        <div className={classes["info_about_our"]}>
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
        </div>

        <div className={classes["info_contact"]}>
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
        </div>
      </div>
      <div className={classes["div_right"]}></div>
    </div>
  );
}

export default MainFooter;
