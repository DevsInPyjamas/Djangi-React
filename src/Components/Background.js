import React, { Component } from "react";
import Particles from "react-particles-js";

export default class BackgroundComponent extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 100
            },
            width: "100%",
            height: "100%",
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        {...this.props}
      />
    );
  }
}
