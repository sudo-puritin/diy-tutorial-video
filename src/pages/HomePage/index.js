import React from "react";
import "./HomePage.scss";

import SearchTable from "../../components/SearchTable";
import CollectionList from "../../components/Collection";
import CategoryList from "../../components/Category";
import { NEUTRAL } from "../../themes";
import HeroSlice from "../../components/HeroSlice";

function HomePage() {
  return (
    <>
      <HeroSlice />

      <div className="homePage_container">
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
