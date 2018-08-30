import React, { Component } from "react";
import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";

class Randomize extends Component {
  random = number => Math.floor(Math.random() * number);

  randomizer = () => {
    const arrows = [
      this.props.keyPress.ArrowUp.imgSrc,
      this.props.keyPress.ArrowDown.imgSrc,
      this.props.keyPress.ArrowLeft.imgSrc,
      this.props.keyPress.ArrowRight.imgSrc
    ];

    // // Making an array of arrows with randomized directions
    // for (let i = 0; i < 4; i++) {
    //   randomArrows.push(arrows[this.random(4)]);
    // }

    return arrows[this.random(4)];

    // console.log(this.props.keyPress.ArrowUp);

    // const randomArrows = [];

    // this.setState({ randomArrows: randomArrows });
  };

  inputChecker = () => {};

  render() {
    return (
      <div>
        <div className="arrowsContainer">
          <img
            src={this.props.keyPress.ArrowUp.imgSrc}
            alt=""
            className="arrow"
          />
          <img
            src={this.props.keyPress.ArrowUp.imgSrc}
            alt=""
            className="arrow"
          />
          {/* {this.state.randomArrows.map((arrow, i) => {
            return <img src={arrow} alt="" className="arrow" key={i} />;
          })} */}
        </div>
        {/* <button onClick={this.randomizer}>Randomize!</button> */}
      </div>
    );
  }
}

export default Randomize;
