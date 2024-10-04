import React from "react";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import SearchTable from "../../components/SearchTable";
import HeroCard from "../../components/HeroCard";
import ResultList from "../../components/ResultList";

import { CATEGORY_LIST } from "../../constants/list.constants";

import { Chip, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function CategoryPage() {
  const handleClick = (data) => {
    console.log("Show Data", data);
  };

  return (
    <>
      <Swiper spaceBetween={5} slidesPerView={7.5}>
        {CATEGORY_LIST.map((cate) => (
          <SwiperSlide key={cate.value}>
            <Chip
              label={cate.label}
              onClick={() => handleClick(cate.value)}
              sx={{ width: "100%", textTransform: `capitalize !important ` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SearchTable />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <HeroCard /> */}
      </div>

      <div style={{ marginTop: "20px" }}>
        <ResultList />

        <Stack spacing={2} mt={2}>
          <Pagination
            count={10}
            shape="rounded"
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
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
