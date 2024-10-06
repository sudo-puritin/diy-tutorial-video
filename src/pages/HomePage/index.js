import React from "react";
import "./HomePage.scss";

import SearchTable from "../../components/SearchTable";
import CollectionList from "../../components/Collection";
import CategoryList from "../../components/Category";
import { NEUTRAL } from "../../themes";
import HeroSlice from "../../components/HeroSlice";
import { useNavigate } from "react-router-dom";
import PATH_NAME from "../../constants/pathName.constants";

function HomePage() {
  const navigate = useNavigate();

  const handleSearchVideo = (data) => {
    const queryString = Object.keys(data)
      .map((key) => key + "=" + data[key])
      .join("&");
    navigate(`${PATH_NAME.SEARCH}?${queryString}`);
  };

  return (
    <>
      <HeroSlice />

      <div className="homePage_container">
        <SearchTable handleSearchVideo={handleSearchVideo} />

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
