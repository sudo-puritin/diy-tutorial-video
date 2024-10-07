import React from "react";
import { NEUTRAL, PRIMARY } from "../../../themes";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./categoryCard.scss";

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
                color: PRIMARY.contrastTest,
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
