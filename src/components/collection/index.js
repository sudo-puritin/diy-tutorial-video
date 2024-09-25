import React from "react";
import "./collectionList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CollectionCard from "./collectionCard";

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
      <Swiper grabCursor={true} spaceBetween={24} slidesPerView={"auto"}>
        <SwiperSlide style={{ width: 240 }}>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: 240 }}>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: 240 }}>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: 240 }}>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: 240 }}>
          <CollectionCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: 240 }}>
          <CollectionCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default collectionList;
