import React from "react";
import "./HeroCard.scss";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import PATH_NAME from "../../constants/pathName.constants";
import useAuth from "../../hooks/useAuth";
import DisplayVideo from "../DisplayVideo";
import AlertDelete from "../../features/Video/AlertDelete";

function HeroCard({ video }) {
  const { isAuthenticated, user } = useAuth();

  const navigate = useNavigate();

  const handleEditVideo = ({ videoId }) => {
    navigate(`${PATH_NAME.EDIT_VIDEO}/${videoId}`);
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
        gap: "28px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <DisplayVideo
        videoSrc={video?.videoUrl}
        width={"440px"}
        height={"270px"}
      />

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 20px 10px 0",
        }}
      >
        <CardContent height={"100%"} sx={{ p: 0 }}>
          <Box mb={2}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {video?.title}
            </Typography>
            <Typography variant="h6">
              {video?.userName.firstName} {video?.userName.lastName}
            </Typography>
          </Box>
          <div>
            <div className="myVideoInfo_box">
              <h4>Material</h4>
              <div>
                <p>{video?.material.join(", ")}</p>
              </div>
            </div>
            <div className="myVideoInfo_box">
              <h4>Tool</h4>
              <div>
                <p>{video?.tool.join(", ")}</p>
              </div>
            </div>
            <div className="myVideoInfo_box">
              <h4>Difficulty</h4>
              <p>{video?.difficulty}</p>
            </div>
            <div className="myVideoInfo_box">
              <h4>Duration</h4>
              <p>{video?.duration}</p>
            </div>
          </div>
        </CardContent>

        {isAuthenticated && user._id === video.user_id && (
          <div className="actionVideo_btn">
            <Button
              size="small"
              color="warning"
              onClick={() => handleEditVideo({ videoId: video._id })}
            >
              Edit
            </Button>
            <AlertDelete videoId={video._id} userId={video.user_id} />
          </div>
        )}
      </div>
    </Card>
  );
}

export default HeroCard;
