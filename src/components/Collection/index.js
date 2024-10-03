import React from "react";
import "./collectionList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CollectionCard from "./collectionCard";

import { Typography } from "@mui/material";
import { COLLECTION_LIST } from "../../constants/list.constants";

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
          textDecoration: "none",
        }}
      >
        Collection
      </Typography>
      <Swiper grabCursor={true} spaceBetween={24} slidesPerView={"auto"}>
        {COLLECTION_LIST.map((col) => (
          <SwiperSlide key={col.value}>
            <CollectionCard data={col} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default collectionList;
