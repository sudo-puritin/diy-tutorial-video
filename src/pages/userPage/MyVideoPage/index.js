import React from "react";

import "./MyVideoPage.scss";
import { Typography } from "@mui/material";
import MyVideoList from "../../../components/videoList";

function MyVideoPage() {
  return (
    <div className="myVideo_container">
      <Typography variant="h7" sx={{ fontWeight: 700 }}>
        My videos
      </Typography>

      <hr />

      <div className="myList_container">
        <MyVideoList />
      </div>
    </div>
  );
}

export default MyVideoPage;
