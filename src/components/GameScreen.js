import React, { Component } from "react";
import Randomize from "./Randomize";
import ControlKeys from "./ControlKeys";

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowRight: false,
      ArrowLeft: false
    };
  }

  keyDownChecker = e => {
    this.setState({
      [e.key]: true
    });
  };

  keyUpChecker = e => {
    this.setState({
      [e.key]: false
    });
  };

  render() {
    return (
      <div className="gameScreen">
        <div className="eventScreen">
          <Randomize keyPress={this.state} />
        </div>
        <ControlKeys
          keyDownHandler={this.keyDownChecker}
          keyUpHandler={this.keyUpChecker}
        />
      </div>
    );
  }
}

export default GameScreen;
