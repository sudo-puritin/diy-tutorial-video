import React from "react";
import "./MiniCard.scss";

import { Box, Card, CardContent, Typography } from "@mui/material";
import DisplayVideo from "../DisplayVideo";

export const MiniCard = ({ userId, videoId }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxheight: "92px",
        maxWidth: "386px",
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <DisplayVideo
        videoSrc={
          "https://res.cloudinary.com/dguiswfoo/video/upload/v1728054375/slcxk93kckppeqyvizxa.webm"
        }
        width={"168px"}
        height={"94px"}
      />

      <CardContent
        sx={{
          width: "60%",
          maxHeight: "94px",
          marginLeft: "8px",
          padding: `0 !important`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h7">Thinh Nguyen</Typography>
        <Typography variant="h7" sx={{ fontWeight: 600 }}>
          Tittle Video
        </Typography>
        <Typography variant="h7" sx={{ fontStyle: "italic" }}>
          Easy
        </Typography>
      </CardContent>
    </Card>
  );
};
