import React from "react";

import "./ResultList.scss";

import Grid from "@mui/material/Grid2";

import FCard from "../Card";

function ResultList({ videos }) {
  return (
    <Grid className="list_container" container spacing={2} columns={12}>
      {videos?.map((video, index) => (
        <Grid size={"auto"} key={index}>
          <FCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ResultList;
