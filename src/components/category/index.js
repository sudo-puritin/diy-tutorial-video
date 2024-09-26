import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography } from "@mui/material";

import "./categoryList.scss";
import CategoryCard from "./categoryCard";
import { CATEGORY_LIST } from "../../constants/hompage.constants";

function CategoryList() {
  return (
    <div className="categoryList">
      <Typography
        variant="h3"
        noWrap
        sx={{
          mr: 2,
          mb: 2,
          fontWeight: 700,
          fontSize: "1.4rem",
          textDecoration: "none",
        }}
      >
        Category
      </Typography>
      <Swiper grabCursor={true} spaceBetween={24} slidesPerView={"auto"}>
        {CATEGORY_LIST.map((cate) => (
          <SwiperSlide key={cate.value}>
            <CategoryCard data={cate} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryList;
