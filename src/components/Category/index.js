import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography } from "@mui/material";

import "./categoryList.scss";
import CategoryCard from "./categoryCard";
import { CATEGORY_LIST } from "../../constants/list.constants";
import { useDispatch } from "react-redux";
import { searchVideo, setCategoryStore } from "../../features/Video/videoSlice";
import { useNavigate } from "react-router-dom";
import PATH_NAME from "../../constants/pathName.constants";

function CategoryList() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigateCategory = (category) => {
    dispatch(setCategoryStore(category));
    dispatch(searchVideo({ category })).then(() =>
      navigate(PATH_NAME.CATEGORY)
    );
  };

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
        {CATEGORY_LIST.map((category) => (
          <SwiperSlide key={category.value}>
            <CategoryCard
              data={category}
              handleNavigateCategory={handleNavigateCategory}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryList;
