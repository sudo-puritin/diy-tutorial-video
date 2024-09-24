import React from "react";

import HeroSlice from "../components/heroSlice/HeroSlice";
import SearchTable from "../components/searchTable/SearchTable";
import CategoryList from "../components/category/CategoryList";
import CollectionList from "../components/collection/CollectionList";

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
