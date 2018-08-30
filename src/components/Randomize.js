import React, { Component } from "react";
import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";

class Randomize extends Component {
  render() {
    return (
      <div>
        <div className="arrowsContainer">
          {this.props.keyPress.keysOnScreen.map(arrow => {
            return arrow && <img src={arrow.imgSrc} alt="" className="arrow" />;
          })}
        </div>
        <button
          onClick={() => {
            this.props.keyMultiplyer();
            this.props.startTime();
          }}
        >
          Start
        </button>
      </div>
    );
  }
}

export default Randomize;
