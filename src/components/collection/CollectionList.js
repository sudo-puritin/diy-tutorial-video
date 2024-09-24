import React from "react";
import "./collectionList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CollectionCard from "./CollectionCard";

import { Typography } from "@mui/material";

function collectionList() {
  return (
    <div className="collectionList">
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
        Collection
      </Typography>
      <Swiper grabCursor={true} spaceBetween={24} slidesPerView={5.5}>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default collectionList;
