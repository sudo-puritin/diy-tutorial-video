import React from "react";
import "./collectionCard.css";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function CollectionCard({ data }) {
  return (
    <Box>
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
    </Box>
  );
}

export default CollectionCard;
