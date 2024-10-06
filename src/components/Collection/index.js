import React from "react";
import "./collectionList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CollectionCard from "./collectionCard";

import { Typography } from "@mui/material";
import { COLLECTION_LIST } from "../../constants/list.constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  searchVideo,
  setCollectionStore,
} from "../../features/Video/videoSlice";
import PATH_NAME from "../../constants/pathName.constants";

function CollectionList() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigateCollection = (collection) => {
    dispatch(setCollectionStore(collection));
    dispatch(searchVideo({ collection })).then(() =>
      navigate(PATH_NAME.COLLECTION)
    );
  };

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
        {COLLECTION_LIST.map((collection) => (
          <SwiperSlide key={collection.value}>
            <CollectionCard
              data={collection}
              handleNavigateCollection={handleNavigateCollection}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CollectionList;
