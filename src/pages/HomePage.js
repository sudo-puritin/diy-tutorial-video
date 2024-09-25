import React from "react";

import HeroSlice from "../components/heroSlice/HeroSlice";
import SearchTable from "../components/searchTable";
import CollectionList from "../components/collection";
import CategoryList from "../components/category";

function HomePage() {
  return (
    <>
      <HeroSlice />

      <SearchTable />

      <CategoryList />

      <CollectionList />
    </>
  );
}

export default HomePage;
