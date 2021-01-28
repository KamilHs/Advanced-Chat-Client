import React from "react";
import { Provider } from "react-redux"
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";

import { themeService } from "./theming/";
import { Routes } from "./routes";
import store from "./redux/store";

const theme = themeService.getTheme();

function App() {
  return (
    <React.Suspense fallback="loading">
      <Provider store={store}>
        <StylesProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </StylesProvider>
      </Provider>
    </React.Suspense>
  );
}

export default App;
