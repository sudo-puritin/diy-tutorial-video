import React from "react";
import useAuth from "../../hooks/useAuth";
import DisplayVideo from "../DisplayVideo";
import AlertDelete from "../../features/Video/AlertDelete";
import PATH_NAME from "../../constants/pathName.constants";
import { MATERIAL_OPTION, TOOLS_OPTION } from "../../constants/list.constants";
import { formatArrayToStringLabel } from "../../ultis/formatArrayDataToLabel";
import { useNavigate } from "react-router-dom";

import { Button, Card, Typography } from "@mui/material";

import "./HeroCard.scss";

const HeroCard = ({ video }) => {
  const { isAuthenticated, user } = useAuth();

  const navigate = useNavigate();

  const handleEditVideo = (e) => {
    e.stopPropagation();

    navigate(`${PATH_NAME.EDIT_VIDEO}/${video._id}`);
  };

  const handleWatchVideo = (e) => {
    navigate(`../video/${video._id}`);
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        maxheight: "270px",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <DisplayVideo
        videoSrc={video?.videoUrl}
        width={"444px"}
        height={"250px"}
      />

      <div className="displayHeroCard_info" onClick={handleWatchVideo}>
        <div className="displayMainHeroCard_detail">
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {video?.title}
          </Typography>
          <Typography variant="h6">
            {video?.author.firstName} {video?.author.lastName}
          </Typography>
        </div>
        <div className="displayHeroCard_detail">
          <div className="heroCard_detail">
            <Typography sx={{ fontWeight: 600 }}>Material</Typography>
            <Typography>
              {" "}
              {formatArrayToStringLabel(
                video?.material.split(","),
                MATERIAL_OPTION
              )}
            </Typography>
          </div>
          <div className="heroCard_detail">
            <Typography sx={{ fontWeight: 600 }}>Tool</Typography>
            <Typography>
              {formatArrayToStringLabel(video?.tool.split(","), TOOLS_OPTION)}
            </Typography>
          </div>
          <div className="heroCard_detail">
            <Typography sx={{ fontWeight: 600 }}>Difficulty</Typography>
            <Typography>{video?.difficulty}</Typography>
          </div>
          <div className="heroCard_detail">
            <Typography sx={{ fontWeight: 600 }}>Duration</Typography>
            <Typography>~{video?.duration}</Typography>
          </div>
        </div>

        {isAuthenticated && user._id === video.author._id && (
          <div className="displayHeroCard_option">
            <Button size="small" color="warning" onClick={handleEditVideo}>
              Edit
            </Button>
            <AlertDelete videoId={video._id} userId={video.user_id} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default HeroCard;
