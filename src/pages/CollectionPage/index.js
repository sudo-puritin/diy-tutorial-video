import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import ResultList from "../../components/ResultList";
import { COLLECTION_LIST } from "../../constants/list.constants";
import { SUCCESS } from "../../themes";
import {
  searchVideo,
  setCollectionStore,
} from "../../features/Video/videoSlice";
import { NotFoundVideoScreen } from "../../components/NotFoundVideoScreen";

import { Chip, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./CollectionPage.scss";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const { videos, totalPage, collectionStore, page } = useSelector(
    (state) => state.video
  );
  const [collection, setCollection] = useState(collectionStore);

  useEffect(() => {
    if (collection) {
      dispatch(searchVideo({ collection }));
    } else {
      dispatch(searchVideo());
    }
    dispatch(setCollectionStore(""));
  }, [dispatch, collection]);

  const handleClick = (collection) => {
    setCollection(collection);
    dispatch(searchVideo({ collection }));
  };

  const onChangePage = (page) => {
    dispatch(searchVideo({ collection, page }));
  };

  return (
    <div className="collectionPage_container">
      <Swiper spaceBetween={5} slidesPerView={"auto"}>
        {COLLECTION_LIST.map((col, index) => (
          <SwiperSlide key={index} style={{ width: `max-content !important` }}>
            <Chip
              className="chip_box_collection"
              label={col.label}
              onClick={() => handleClick(col.value)}
              sx={{
                width: "100%",
                textTransform: `capitalize !important `,
                background: col.value === collection ? SUCCESS.light : "",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ display: "flex", justifyContent: "center" }}></div>

      <div style={{ marginTop: "20px" }}>
        {videos.length === 0 ? (
          <NotFoundVideoScreen />
        ) : (
          <ResultList videos={videos} />
        )}

        <Stack spacing={2} mt={2}>
          <Pagination
            count={totalPage}
            page={page}
            shape="rounded"
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            onChange={(e) => onChangePage(e.target.value)}
            renderItem={(item) => (
              <PaginationItem
                shape="rounded"
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default CollectionPage;
