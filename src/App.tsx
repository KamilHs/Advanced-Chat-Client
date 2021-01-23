import React from "react";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import { themeService } from "./theming/";
import Auth from "./pages/Auth";

const theme = themeService.getTheme();

function App() {
  return (
    <React.Suspense fallback="loading">
      <StylesProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Auth />
        </ThemeProvider>
      </StylesProvider>
    </React.Suspense>
  );
}

export default App;
