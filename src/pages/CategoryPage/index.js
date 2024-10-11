import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import ResultList from "../../components/ResultList";
import { CATEGORY_LIST } from "../../constants/list.constants";
import { searchVideo, setCategoryStore } from "../../features/Video/videoSlice";
import { SUCCESS } from "../../themes";
import { NotFoundVideoScreen } from "../../components/NotFoundVideoScreen";

import { Chip, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./CategoryPage.scss";

const CategoryPage = () => {
  const dispatch = useDispatch();

  const { videos, totalPage, categoryStore, page } = useSelector(
    (state) => state.video
  );
  const [category, setCategory] = useState(categoryStore);

  useEffect(() => {
    if (category) {
      dispatch(searchVideo({ category }));
    } else {
      dispatch(searchVideo());
    }
    dispatch(setCategoryStore(""));
  }, [dispatch, category]);

  const handleClick = (category) => {
    setCategory(category);
  };

  const onChangePage = (page) => {
    dispatch(searchVideo({ category, page }));
  };

  return (
    <div className="categoryPage_container">
      <Swiper spaceBetween={5} slidesPerView={"auto"}>
        {CATEGORY_LIST.map((cate, index) => (
          <SwiperSlide key={index} style={{ width: `max-content !important` }}>
            <Chip
              className="chip_box_category"
              label={cate.label}
              onClick={() => handleClick(cate.value)}
              sx={{
                width: "100%",
                textTransform: `capitalize !important `,
                background: cate.value === category ? SUCCESS.light : "",
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

export default CategoryPage;
