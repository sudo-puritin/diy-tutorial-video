import React from "react";

import HeroSlice from "../components/heroSlice/HeroSlice";
import SearchTable from "../components/searchTable/SearchTable";
import CategoryList from "../components/category/CategoryList";
import CollectionList from "../components/collection/collectionList";

import { Typography } from "@mui/material";

function HomePage() {
  return (
    <>
      <HeroSlice />

      <SearchTable />

      <Typography
        variant="h3"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: "32px",
          color: "#3B3B3B",
          textDecoration: "none",
        }}
      >
        Category
      </Typography>

      {/* <CategoryList /> */}

      <Typography
        variant="h3"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: "32px",
          color: "#3B3B3B",
          textDecoration: "none",
        }}
      >
        Collection
      </Typography>

      <CollectionList />
    </>
  );
}

export default HomePage;
