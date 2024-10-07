import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./collectionCard.css";

const CollectionCard = ({ data, handleNavigateCollection }) => {
  return (
    <div onClick={() => handleNavigateCollection(data.value)}>
      <Card sx={{ borderRadius: 0, boxShadow: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={data.image_link}
            alt={data.value}
            sx={{ borderRadius: "50%", height: "225px" }}
          />
          <CardContent sx={{ p: "5px" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {data.label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CollectionCard;
