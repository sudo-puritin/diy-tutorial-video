import React from "react";
import "./categoryList.css";
import { SwiperSlide, Swiper } from "swiper/react";
import CategoryCard from "./CategoryList";

function CategoryList() {
  return (
    <div className="movieList">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        <SwiperSlide key={1}>
          <CategoryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategoryList;
