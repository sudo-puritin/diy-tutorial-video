import React from "react";

import "./ResultList.scss";

import Grid from "@mui/material/Grid2";

import FCard from "../Card";

function ResultList() {
  return (
    <Grid className="list_container" container spacing={2} columns={12}>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
      <Grid size={"auto"}>
        <FCard />
      </Grid>
    </Grid>
  );
}

export default ResultList;
