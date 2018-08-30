import React, { Component } from "react";
import Randomize from "./Randomize";
import ControlKeys from "./ControlKeys";

import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";
import correct from "./../assets/check-circle-solid.svg";

const totalComponents = [
  <Randomize keyPress={this.state} />,
  <Randomize keyPress={this.state} />
];

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      ArrowUp: { pressed: false, imgSrc: upArrow },
      ArrowDown: { pressed: false, imgSrc: downArrow },
      ArrowRight: { pressed: false, imgSrc: rightArrow },
      ArrowLeft: { pressed: false, imgSrc: leftArrow },
      keyNumber: [0],
      keyPosition: 0
    };
  }

  validKeyCheck = keyToCheck => {
    const validKeys = Object.keys(this.state);
    let valid = false;

    validKeys.forEach(key => {
      if (keyToCheck === key) {
        valid = true;
      }
    });
    return valid;
  };

  keyDownChecker = e => {
    if (this.validKeyCheck(e.key)) {
      const keyDirection = this.state[e.key];
      keyDirection.pressed = true;
      keyDirection.imgSrc = correct;

      this.setState({ [e.key]: keyDirection });
    }
  };

  keyUpChecker = e => {
    if (this.validKeyCheck(e.key)) {
      const keyDirection = this.state[e.key];
      keyDirection.pressed = false;

      this.setState({ [e.key]: keyDirection });
    }
  };

  addComponent = () => {
    for (let i = 0; i < 3; i++) {
      return <Randomize keyPress={this.state} />;
    }
  };

  render() {
    return (
      <div className="gameScreen">
        <div className="eventScreen">
          {/* <Randomize keyPress={this.state} /> */}
          {this.state.keyNumber.map((key, i) => {
            return <Randomize keyPress={this.state} key={i} />;
          })}
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
