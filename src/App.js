import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./layouts/HomePage";

import DetailPage from "./layouts/DetailPage";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const boldFont = createMuiTheme({
  typography: {
    fontFamily: ["Oskari G2 Bold", "sans-serif"].join(","),
  },
});
const mediumFont = createMuiTheme({
  typography: {
    fontFamily: ["Oskari G2 Medium", "sans-serif"].join(","),
  },
});
const regularFont = createMuiTheme({
  typography: {
    fontFamily: ["Oskari G2 Regular", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={(boldFont, mediumFont, regularFont)}>
          <Router basename={process.env.PUBLIC_URL}>
            <CssBaseline />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/details/id=:id" component={DetailPage} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
