import React from "react";

import SearchTable from "../../components/SearchTable";
import ResultList from "../../components/ResultList";

import { Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./SearchPage.scss";

function SearchPage() {
  return (
    <>
      <SearchTable />

      <Typography
        className="result_title"
        variant="h6"
        mb={2}
        style={{ fontWeight: 700 }}
      >
        Result
      </Typography>

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
    </>
  );
}

export default SearchPage;
