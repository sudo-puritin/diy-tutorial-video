import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import classes from "./heroSlice.module.scss";

function HeroSlice() {
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
          <Link to={""} className={classes["btnDetailWrapper"]}>
            <Button className={classes["btnDetail"]} variant="contained">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSlice;
