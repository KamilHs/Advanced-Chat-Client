import React from "react";
import { BrowserRouter } from "react-router-dom";
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
          <BrowserRouter>
            <Auth />
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </React.Suspense>
  );
}

export default App;
