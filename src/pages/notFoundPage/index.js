import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography, Container } from "@mui/material";
import "./index.scss";

function NotFoundPage() {
  return (
    <Container sx={{ display: "flex", height: "100%", alignItems: "center" }}>
      <Box
        sx={{ maxWidth: 720, margin: "auto", textAlign: "center" }}
        className="notFoundBox"
      >
        <Typography variant="h2" mb={2}>
          Page not found!
        </Typography>
        <Typography variant="h4" mb={3}>
          Oops, we couldn't find the page you requested.
        </Typography>
        <Link to="/">
          <Button
            className="goHome_btn"
            variant="contained"
            sx={{ fontWeight: 700 }}
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
