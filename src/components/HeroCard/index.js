import React, { useState } from "react";
import "./HeroCard.scss";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PATH_NAME from "../../constants/pathName.constants";
import useAuth from "../../hooks/useAuth";
import DisplayVideo from "../DisplayVideo";

function HeroCard({ video }) {
  const [showActionButton, setShowActionButton] = useState(false);

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        maxheight: "380px",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        boxShadow: "none",
      }}
    >
      <div style={{ width: "100%", marginTop: "20px" }}>
        <DisplayVideo videoSrc={video.videoUrl} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent height={"100%"} sx={{ p: 0 }}>
          <Box mb={2}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {video.title}
            </Typography>
            <Typography variant="h6">
              {video.userName.firstName} {video.userName.lastName}
            </Typography>
          </Box>
          <Box>
            <Box className="myVideoInfo_box">
              <h4>Material</h4>
              {video.material.map((mat) => (
                <p>{mat}</p>
              ))}
            </Box>
            <Box className="myVideoInfo_box">
              <h4>Tool</h4>
              {video.tool.map((tol) => (
                <p>{tol}</p>
              ))}
            </Box>
            <Box className="myVideoInfo_box">
              <h4>Difficulty</h4>
              <p>{video.difficulty}</p>
            </Box>
            <Box className="myVideoInfo_box">
              <h4>Duration</h4>
              <p>{video.duration}</p>
            </Box>
          </Box>
        </CardContent>

        {showActionButton && (
          <div className="actionVideo_btn">
            <Button
              size="small"
              color="warning"
              onClick={() => navigate(PATH_NAME.EDIT_VIDEO)}
            >
              Edit
            </Button>
            <Button size="small" color="error">
              Delete
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default HeroCard;
