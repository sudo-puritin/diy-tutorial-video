import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PATH_NAME from "../../constants/pathName.constants";
import DisplayVideo from "../DisplayVideo";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./Card.scss";

const FCard = ({ video, other }) => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickVideo = () => {
    navigate(`${PATH_NAME.WATCH_VIDEO}/${video._id}`);
  };

  return (
    <div className="card_container" {...other} onClick={handleClickVideo}>
      <Card sx={{ borderRadius: "0px !important", height: "324px" }}>
        <CardActionArea>
          <DisplayVideo
            videoSrc={video.videoUrl}
            width={"330px"}
            height={"186px"}
          />
          <CardContent sx={{ padding: "8px 16px" }}>
            <Typography
              variant="h6"
              sx={{
                mb: "8px",
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: "20px",
              }}
            >
              {video?.author?.firstName} {video?.author?.lastName}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: "8px",
                fontWeight: 700,
                fontSize: "1.2rem",
                lineHeight: "24px",
              }}
            >
              {video?.title}
            </Typography>{" "}
            <Typography
              variant="h7"
              sx={{
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "1rem",
                lineHeight: "14px",
                textTransform: "capitalize",
              }}
            >
              {video?.difficulty}
            </Typography>
            <div className="card_info">
              <div>
                <FavoriteIcon
                  color={isFavorite ? "error" : "disabled"}
                  className="like_icon_fCard"
                  fontSize="large"
                />
              </div>
              <Typography
                variant="h7"
                sx={{ fontWeight: 500, fontSize: "0.8rem" }}
              >
                {video.view} view
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default FCard;
