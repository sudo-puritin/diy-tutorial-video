import React from "react";
import { Link } from "react-router-dom";

import "./heroSlice.css";

import { Button } from "@mui/material";

function HeroSlice() {
  return (
    <>
      <img
        className="slideItemImg"
        src="images/heroImages/1.png"
        alt="heroImage"
      />
      <div className="slideItemContainer">
        <img src="images/heroImages/hero-text.png" alt="hero-text" />
        <Link to={""} className="btnDetailWrapper">
          <Button
            className="btnDetail"
            variant="contained"
            sx={{
              width: "324px",
              padding: "32px 64px",
              borderRadius: "8px",
              backgroundColor: "#984144",
              fontSize: "24px",
              color: "#FFFFFF",
            }}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </>
  );
}

export default HeroSlice;
