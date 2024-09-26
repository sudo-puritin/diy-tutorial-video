import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./Card.scss";

function FCard({ other }) {
  return (
    <div className="card_container" {...other}>
      <Card sx={{ borderRadius: "0px !important" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/images/art3.png"
            alt="green iguana"
            sx={{
              borderRadius: "0px",
            }}
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
              Thinh Nguyen
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: "8px",
                fontWeight: 700,
                fontSize: "1.2rem",
                lineHeight: "20px",
              }}
            >
              Art of landscape
            </Typography>{" "}
            <Typography
              variant="h7"
              sx={{
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "1rem",
                lineHeight: "14px",
              }}
            >
              Medium
            </Typography>
            <div className="card_info">
              <img
                src="images/icons/favourite.png"
                alt="favorite"
                width="24px"
                height="24px"
              />
              <Typography
                variant="h7"
                sx={{ fontWeight: 700, fontSize: "1rem", lineHeight: "20px" }}
              >
                1 view
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default FCard;
