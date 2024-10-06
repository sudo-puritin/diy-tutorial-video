import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import classes from "./heroSlice.module.scss";

function HeroSlice() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={classes["slideItemImg"]}
        style={{ backgroundImage: "url(/images/heroImages/1.png)" }}
      >
        <div className={classes["slideItemContainer"]}>
          <div>
            <img
              src="images/heroImages/hero-text.png"
              alt="hero-text"
              className={classes["image_text"]}
            />
          </div>
          <Button
            className={classes["btnDetail"]}
            variant="contained"
            onClick={() => navigate("/search")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSlice;
