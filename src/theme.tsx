import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // typography
  typography: {
    h1: {
      fontSize: "3.123rem",
      fontWeight: "bold",
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "1.625rem",
      fontWeight: 400,
    },
  },
});

const CustomThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default CustomThemeProvider;
