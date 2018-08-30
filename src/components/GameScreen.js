import React, { Component } from "react";
import Randomize from "./Randomize";
import ControlKeys from "./ControlKeys";

import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";
import correct from "./../assets/check-circle-solid.svg";
import Score from "./Score";
import Timer from "./Timer";

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      keysOnScreen: [],
      keyNumber: [0],
      keyPosition: 0,
      score: 0,
      time: 10000
    };
  }

  random = number => Math.floor(Math.random() * number);

  screenKeySetter = () => {
    const arrows = [
      { keyName: "ArrowUp", pressed: false, imgSrc: upArrow },
      { keyName: "ArrowDown", pressed: false, imgSrc: downArrow },
      { keyName: "ArrowRight", pressed: false, imgSrc: rightArrow },
      { keyName: "ArrowLeft", pressed: false, imgSrc: leftArrow }
    ];

    const allKeys = this.state.keysOnScreen;

    allKeys.push(arrows[this.random(4)]);

    this.setState({
      keysOnScreen: allKeys
    });
  };

  keyMultiplyer = () => {
    for (let i = 0; i < 4; i++) {
      this.screenKeySetter();
    }
  };

  validKeyCheck = keyToCheck => {
    const validKeys = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
    const currentArrow = this.state.keysOnScreen[this.state.keyPosition]
      .keyName;
    let valid = false;

    if (keyToCheck === currentArrow) {
      valid = true;
    } else {
      console.log("Wrong");
      this.setState({
        keysOnScreen: this.state.keysOnScreen.splice(
          0,
          this.state.keysOnScreen.length
        ),
        keyPosition: this.state.keyPosition * 0
      });
      this.keyMultiplyer();
    }

    return valid;
  };

  // Runs when a keydown event occurs
  keyDownChecker = e => {
    e.preventDefault();
    // Will run if the keydown is one of the arrow keeys
    if (this.validKeyCheck(e.key)) {
      const keyDirection = this.state.keysOnScreen[this.state.keyPosition]; // Cloning state

      // Changing the states of the clone
      keyDirection.pressed = true;
      keyDirection.imgSrc = correct;

      // Setting the state to be equal to our clone
      this.setState(
        (this.state.keysOnScreen[this.state.keyPosition] = keyDirection)
      );

      // Generate a new set of arrows when the end of keys reached
      if (this.state.keyPosition === this.state.keysOnScreen.length - 1) {
        this.setState({
          keysOnScreen: this.state.keysOnScreen.splice(
            0,
            this.state.keyPosition + 1
          ),
          keyPosition: this.state.keyPosition * 0,
          score: this.state.score + 1000
        });
        this.keyMultiplyer();
      }

      // Dont add to key positon if we reached the end
      if (this.state.keyPosition != this.state.keysOnScreen.length - 1) {
        this.setState({
          keyPosition: this.state.keyPosition + 1
        });
      }
    }
  };

  keyUpChecker = e => {
    if (true) {
      const keyDirection = this.state.keysOnScreen[this.state.keyPosition];
      keyDirection.pressed = false;

      this.setState(
        (this.state.keysOnScreen[this.state.keyPosition] = keyDirection)
      );
    }
  };

  startTime = () => {
    const timer = setInterval(() => {
      this.setState({ time: this.state.time - 100 });
      if (this.state.time === 0) {
        clearInterval(timer);
        console.log(this.state.time);
      }
    }, 100);
  };

  render() {
    return (
      <div
        className="gameScreen"
        onKeyDown={this.keyDownChecker}
        onKeyUp={this.keyUpChecker}
        tabIndex="0"
      >
        <Timer timeLeft={this.state.time} />
        <Score score={this.state.score} />
        <div className="eventScreen">
          <Randomize
            keyPress={this.state}
            keyMultiplyer={this.keyMultiplyer}
            startTime={this.startTime}
          />
          {this.state.keyNumber.map((key, i) => {
            // return <Randomize keyPress={this.state} key={i} />;
          })}
        </div>
        {/* <ControlKeys keyDownHandler={this.keyDownChecker} keyUpHandler={this.keyUpChecker} /> */}
      </div>
    );
  }
}

export default GameScreen;
