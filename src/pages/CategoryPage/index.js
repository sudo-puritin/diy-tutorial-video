import React, { useEffect, useState } from "react";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import ResultList from "../../components/ResultList";

import { CATEGORY_LIST } from "../../constants/list.constants";

import { Chip, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { searchVideo, setCategoryStore } from "../../features/Video/videoSlice";
import { SUCCESS } from "../../themes";

import "./CategoryPage.scss";

function CategoryPage() {
  const dispatch = useDispatch();

  const { videos, totalPage, categoryStore, page } = useSelector(
    (state) => state.video
  );
  const [category, setCategory] = useState(categoryStore);

  useEffect(() => {
    if (!category && !videos.length) {
      dispatch(searchVideo());
    }
    dispatch(setCategoryStore(""));
  }, [dispatch, videos, category]);

  const handleClick = (category) => {
    setCategory(category);
    dispatch(searchVideo({ category }));
  };

  const onChangePage = (page) => {
    dispatch(searchVideo({ category, page }));
  };

  return (
    <>
      <Swiper spaceBetween={5} slidesPerView={7.5}>
        {CATEGORY_LIST.map((cate, index) => (
          <SwiperSlide key={index} style={{ width: "max-content" }}>
            <Chip
              className="chip_box"
              value={cate.value}
              label={cate.label}
              onClick={() => handleClick(cate.value)}
              sx={{
                width: "max-content",
                textTransform: `capitalize !important `,
                background: cate.value === category ? SUCCESS.light : "",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ display: "flex", justifyContent: "center" }}></div>

      <div style={{ marginTop: "20px" }}>
        <ResultList videos={videos} />

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
    </>
  );
}

export default CategoryPage;
