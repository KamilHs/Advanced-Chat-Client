import React from "react";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import { themeService } from "./theming/";
import { Routes } from "./routes";


const theme = themeService.getTheme();

function App() {
  return (
    <React.Suspense fallback="loading">
      <StylesProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </StylesProvider>
    </React.Suspense>
  );
}

export default App;
