import React from "react";
import "./categoryCard.css";

import { Link } from "react-router-dom";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function CategoryCard() {
  return (
    <Box width={"240px"}>
      <Card>
        <CardActionArea style={{ background: "#8E9AA3" }}>
          <CardMedia
            component="img"
            image="/images/art1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{
                lineHeight: "24px",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              ART
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CategoryCard;
