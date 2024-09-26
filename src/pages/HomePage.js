import React from "react";

import HeroSlice from "../components/heroSlice/HeroSlice";
import SearchTable from "../components/searchTable";
import CollectionList from "../components/collection";
import CategoryList from "../components/category";
import { NEUTRAL } from "../themes";

function HomePage() {
  return (
    <>
      <HeroSlice />

      <div style={{ padding: "16px 150px" }}>
        <SearchTable />

        <CategoryList />

        <hr
          style={{
            height: "1px",
            border: 0,
            color: NEUTRAL[700],
            backgroundColor: NEUTRAL[700],
          }}
        />

        <CollectionList />
      </div>
    </>
  );
}

export default HomePage;
