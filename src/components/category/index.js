import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography } from "@mui/material";

import "./categoryList.scss";
import CategoryCard from "./categoryCard";

function CategoryList() {
  return (
    <div className="categoryList">
      <Typography
        variant="h3"
        noWrap
        sx={{
          mr: 2,
          mb: 2,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: "1.4rem",
          color: "#3B3B3B",
          textDecoration: "none",
        }}
      >
        Category
      </Typography>
      <Swiper grabCursor={true} spaceBetween={24} slidesPerView={"auto"}>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategoryList;
