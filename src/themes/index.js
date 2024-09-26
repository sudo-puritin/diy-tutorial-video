import React from "react";

import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { CssBaseline } from "@mui/material";

export const PRIMARY = {
  lighter: "#D4EBEC",
  light: "#7CB0B1",
  main: "#568284",
  dark: "#3F5B5C",
  darker: "#35494B",
  constrastTest: "#FFFFFF",
};

export const SECONDARY = {
  lighter: "#F3EEE6",
  light: "#EDE2D1",
  main: "#DFD2BF",
  dark: "#DAC7AB",
  darker: "#C5B38C",
  constrastTest: "#FFFFFF",
};

export const SUCCESS = {
  lighter: "#D8F2CE",
  light: "#9AC28A",
  main: "#7DA36D",
  dark: "#5A8549",
  darker: "#3D692B",
  constrastTest: "#FFFFFF",
};

export const WARNING = {
  lighter: "#FDF7DA",
  light: "#F8EAAD",
  main: "#F6E388",
  dark: "#F1D348",
  darker: "#D9850F",
  constrastTest: "#FFFFFF",
};

export const ERROR = {
  lighter: "#FFDFE5",
  light: "#F594A5",
  main: "#F46A82",
  dark: "#E23E5A",
  darker: "#CD1735",
  constrastTest: "#FFFFFF",
};

export const NEUTRAL = {
  50: "#F0F3F4",
  100: "#E0E4E7",
  200: "#C0C4C7",
  300: "#8E9AA3",
  500: "##74818A",
  700: "#607276",
  900: "#515C64",
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
        primary: NEUTRAL[700],
        secondary: NEUTRAL[300],
        disabled: NEUTRAL[500],
      },
      background: {
        paper: "#FFFFFF",
        default: "#FFFFFF",
        neutral: NEUTRAL[200],
      },
      action: {
        active: NEUTRAL[300],
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
