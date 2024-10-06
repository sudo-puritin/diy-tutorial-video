import React from "react";
import "./categoryCard.scss";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NEUTRAL, PRIMARY } from "../../../themes";

function CategoryCard({ data, handleNavigateCategory }) {
  return (
    <div width={"240px"} onClick={() => handleNavigateCategory(data.value)}>
      <Card sx={{ borderRadius: 0 }}>
        <CardActionArea sx={{ background: NEUTRAL[300] }}>
          <CardMedia
            component="img"
            image={data.image_link}
            alt={data.value}
            sx={{ height: "225px" }}
          />
          <CardContent sx={{ p: "5px" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: 700,
                color: PRIMARY.constrastTest,
              }}
            >
              {data.label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CategoryCard;
