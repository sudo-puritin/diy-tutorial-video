import React from "react";
import "./MiniCard.scss";

import { Card, CardContent, Typography } from "@mui/material";
import DisplayVideo from "../DisplayVideo";

export const MiniCard = ({ userId, videoId }) => {
  const stringTitle = `Tittle Video will be a long title, include 56 characters and you won't
          believe`;
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
          {stringTitle.length > 20
            ? stringTitle.slice(0, 20) + "..."
            : stringTitle}
        </Typography>
        <Typography variant="h7" sx={{ fontStyle: "italic" }}>
          Easy
        </Typography>
      </CardContent>
    </Card>
  );
};
