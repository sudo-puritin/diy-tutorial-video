import React from "react";
import DisplayVideo from "../DisplayVideo";
import { useNavigate } from "react-router-dom";
import PATH_NAME from "../../constants/pathName.constants";

import { Card, CardContent, Typography } from "@mui/material";

import "./MiniCard.scss";

export const MiniCard = ({ video, other }) => {
  const navigate = useNavigate();

  const handleClickVideo = () => {
    navigate(`${PATH_NAME.WATCH_VIDEO}/${video._id}`);
  };
  return (
    <div className="miniCard_box" onClick={handleClickVideo} {...other}>
      <Card
        sx={{
          width: "100%",
          maxheight: "120px",
          maxWidth: "386px",
          padding: "8px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <DisplayVideo
          videoSrc={video.videoUrl}
          width={"168px"}
          height={"94px"}
        />

        <CardContent
          sx={{
            width: "60%",
            // maxHeight: "100px",
            marginLeft: "8px",
            padding: `0 !important`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h7">
            {video.author.firstName} {video.author.lastName}
          </Typography>
          <Typography variant="h7" sx={{ fontWeight: 600 }}>
            {video.title.length > 20
              ? video.title.slice(0, 20) + "..."
              : video.title}
          </Typography>
          <Typography
            variant="h7"
            sx={{ fontStyle: "italic", textTransform: "capitalize" }}
          >
            {video.difficulty}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
