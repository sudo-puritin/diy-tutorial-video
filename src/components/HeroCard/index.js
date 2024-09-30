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

function HeroCard() {
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
      <div>
        <CardMedia
          height={"100%"}
          component="img"
          alt="tester"
          image="/images/art1.png"
          sx={{ maxWidth: "826px" }}
        />
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
              Two doors from heaven
            </Typography>
            <Typography variant="h6">Thinh Nguyen Duc</Typography>
          </Box>

          <Box>
            <Box className="myVideoInfo_box">
              <h4>Material</h4>
              <p>Wood</p>
            </Box>
            <Box className="myVideoInfo_box">
              <h4>Tool</h4>
              <p>Hammer</p>
            </Box>
            <Box className="myVideoInfo_box">
              <h4>Difficulty</h4>
              <p>Medium</p>
            </Box>
            <Box className="myVideoInfo_box">
              <h4>Duration</h4>
              <p>2 - 4 hours</p>
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
