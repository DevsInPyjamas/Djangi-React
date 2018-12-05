import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { GlobalStyle } from "./App.style";
import theme from "./App.theme";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
