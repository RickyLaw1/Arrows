import React, { Component } from "react";
import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";

class Randomize extends Component {
  constructor() {
    super();
    this.state = {
      randomArrows: []
    };
  }

  random = number => Math.floor(Math.random() * number);

  randomizer = () => {
    // console.log(this.props.keyPress.ArrowUp);

    const arrows = [
      { src: upArrow, pressed: this.props.keyPress.ArrowUp },
      { src: downArrow, pressed: this.props.keyPress.ArrowDown },
      { src: leftArrow, pressed: this.props.keyPress.ArrowLeft },
      { src: rightArrow, pressed: this.props.keyPress.ArrowRight }
    ];
    const randomArrows = [];

    // Making an array of arrows with randomized directions
    for (let i = 0; i < 4; i++) {
      randomArrows.push(arrows[this.random(4)]);
    }

    this.setState({ randomArrows: randomArrows });
  };

  inputChecker = () => {};

  render() {
    return (
      <div>
        <div className="arrowsContainer">
          {this.state.randomArrows.map((arrow, i) => {
            return arrow.pressed ? (
              <p>YES</p>
            ) : (
              <img src={arrow.src} alt="" className="arrow" key={i} />
            );

            // return <img src={arrow.src} alt="" className="arrow" key={i} />;
          })}
        </div>
        <button onClick={this.randomizer}>Randomize!</button>
      </div>
    );
  }
}

export default Randomize;
