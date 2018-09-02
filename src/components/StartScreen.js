import React, { Component } from "react";

class StartScreen extends Component {
  constructor() {
    super();
    this.state = {
      visibility: "auto"
    };
  }

  hideScreen = () => {
    this.setState({
      visibility: "hidden"
    });
  };

  render() {
    return (
      <div
        className="startScreen"
        style={{ visibility: this.state.visibility }}
      >
        <h1>Arrows</h1>
        <button
          className="startButton"
          onClick={() => {
            this.props.keyMultiplyer();
            this.props.startTime();
            this.hideScreen();
          }}
        >
          Start
        </button>
        {/* <button
          onClick={() => {
            this.props.showRooms();
            this.hideScreen();
          }}
        >
          MultiPlayer
        </button> */}
      </div>
    );
  }
}

export default StartScreen;
