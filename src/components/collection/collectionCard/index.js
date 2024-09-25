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

function CollectionCard() {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            width="240px"
            image="/images/art2.png"
            alt="green iguana"
            style={{ borderRadius: "50%" }}
          />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{ height: "35px", textAlign: "center", fontWeight: 700 }}
            >
              ART
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CollectionCard;
