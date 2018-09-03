import React, { Component } from "react";

class StartScreen extends Component {
  constructor() {
    super();
    this.state = {
      visibility: "auto",
      hover: ""
    };
  }

  hideScreen = () => {
    this.setState({
      visibility: "hidden"
    });
  };

  handleHover = () => {
    this.setState({
      hover: `gradientChange 1s infinite ease`
    });
  };

  handleHoverOff = () => {
    this.setState({
      hover: ""
    });
  };

  render() {
    return (
      <div
        className="startScreen"
        style={{ visibility: this.props.startScreen }}
      >
        <h1 style={{ animation: this.state.hover }}>Arrows</h1>
        <button
          className="startButton"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHoverOff}
          onClick={() => {
            this.props.restartGame();
            this.props.hideStartScreen();
          }}
        >
          Start
        </button>
        <button onClick={this.props.showRankings}>Rankings</button>
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
