import React, { useEffect } from "react";
import SearchTable from "../../components/SearchTable";
import ResultList from "../../components/ResultList";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchVideo } from "../../features/Video/videoSlice";
import { formatQuery } from "../../ultis/formatQuery";

import { Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./SearchPage.scss";

const SearchPage = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  const { videos, totalPage } = useSelector((state) => state.video);

  let [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    ...query,
  });

  const page = searchParams.get("page");
  const title = searchParams.get("title");
  const category = searchParams.get("category");
  const collection = searchParams.get("collection");
  const duration = searchParams.get("duration");
  const difficulty = searchParams.get("difficulty");
  const material = searchParams.get("material");
  const tool = searchParams.get("tool");

  useEffect(() => {
    const queryParams = {
      page,
      title,
      category,
      collection,
      duration,
      difficulty,
      material,
      tool,
    };

    dispatch(searchVideo({ ...formatQuery(queryParams) }));
  }, [
    page,
    title,
    category,
    collection,
    duration,
    difficulty,
    material,
    tool,
    dispatch,
  ]);

  const handleSearchVideo = (data) => {
    setSearchParams(formatQuery(data));
  };

  const onChangePage = (page) => {
    const query = {
      page,
      title,
      category,
      collection,
      duration,
      difficulty,
      material,
      tool,
    };
    setSearchParams({ ...query, page });
  };

  return (
    <>
      <SearchTable
        title={title}
        category={category}
        duration={duration}
        difficulty={difficulty}
        material={material ? material?.split(",") : []}
        tool={tool ? tool?.split(",") : []}
        handleSearchVideo={handleSearchVideo}
      />

      <Typography
        className="result_title"
        variant="h6"
        mb={2}
        style={{ fontWeight: 700 }}
      >
        Result
      </Typography>

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
    </>
  );
};

export default SearchPage;
