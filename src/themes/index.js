import React from "react";

import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { CssBaseline } from "@mui/material";

const PRIMARY = {
  lighter: "#",
  light: "#F6EDFF",
  main: "#CBAAF0",
  dark: "#653699",
  darker: "#421F69",
  constrastTest: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#FFF2FB",
  light: "#FFDEF4",
  main: "#F6C3E5",
  dark: "#FAA0D7",
  darker: "#DB6EB1",
  constrastTest: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D8F2CE",
  light: "#9AC28A",
  main: "#7DA36D",
  dark: "#5A8549",
  darker: "#3D692B",
  constrastTest: "#FFFFFF",
};

const WARNING = {
  lighter: "#FDF7DA",
  light: "#F8EAAD",
  main: "#F6E388",
  dark: "#F1D348",
  darker: "#D9850F",
  constrastTest: "#FFFFFF",
};

const ERROR = {
  lighter: "#FFDFE5",
  light: "#F594A5",
  main: "#F46A82",
  dark: "#E23E5A",
  darker: "#CD1735",
  constrastTest: "#FFFFFF",
};

const NEUTRAL = {
  0: "#FFFFFF",
  50: "#FAFAFA",
  100: "#F5F5F5",
  200: "#ECECEC",
  300: "#C5C5C5",
  400: "#AEAEAE",
  500: "#979797",
  600: "#808080",
  700: "#696969",
  800: "#525252",
  900: "#3B3B3B",
  500_8: alpha("#979797", 0.08),
  500_12: alpha("#979797", 0.12),
  500_16: alpha("#979797", 0.16),
  500_24: alpha("#979797", 0.24),
  500_32: alpha("#979797", 0.32),
  500_48: alpha("#979797", 0.48),
  500_56: alpha("#979797", 0.56),
  500_80: alpha("#979797", 0.8),
};

function ThemeProvider({ children }) {
  const themeOption = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
      text: {
        primary: NEUTRAL[800],
        secondary: NEUTRAL[600],
        disabled: NEUTRAL[500],
      },
      background: {
        paper: "#FFFFFF",
        default: "#FFFFFF",
        neutral: NEUTRAL[200],
      },
      action: {
        active: NEUTRAL[600],
        hover: NEUTRAL[500_8],
        selected: NEUTRAL[500_16],
        disabled: NEUTRAL[500_80],
        disabledBackground: NEUTRAL[500_24],
        focus: NEUTRAL[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
      },
    },
    shape: { borderRadius: 8 },
  };
  const theme = createTheme(themeOption);
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
