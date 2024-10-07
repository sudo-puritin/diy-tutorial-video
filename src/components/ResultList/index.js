import React from "react";
import FCard from "../Card";
import { useSelector } from "react-redux";
import LoadingScreen from "../LoadingScreen";

import Grid from "@mui/material/Grid2";

import "./ResultList.scss";

const ResultList = ({ videos }) => {
  const { isLoading } = useSelector((state) => state.video);

  if (isLoading) return <LoadingScreen />;

  return (
    <Grid className="list_container" container spacing={2} columns={12}>
      {videos?.map((video, index) => (
        <Grid size={"auto"} key={index}>
          <FCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultList;
