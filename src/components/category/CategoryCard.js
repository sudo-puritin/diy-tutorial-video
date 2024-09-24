import React from "react";
import "./categoryCard.css";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

function CategoryCard() {
  return (
    <Link to={""} className="categoryCardWrapper">
      <div
        className="categoryCard"
        width="105%"
        height="335px"
        style={{ backgroundImage: `url(images/art1.png)` }}
      >
        <Button className="btnCategoryCard">
          <i></i>
        </Button>
      </div>
      <h3 className="categoryCardTitle">CategoryCard1</h3>
    </Link>
  );
}

export default CategoryCard;
