import React from "react";

import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { CssBaseline } from "@mui/material";

function ThemeProvider({ children }) {
  const themeOption = {};
  const theme = createTheme(themeOption);
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
