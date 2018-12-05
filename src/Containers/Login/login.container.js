import React, { Component } from "react";
import { Background } from "./login.style";
import { Login } from "../../Components/Login";

export default class LoginContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex ",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        >
          <Login />
        </div>
        <Background />
      </React.Fragment>
    );
  }
}
