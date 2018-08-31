import React, { Component } from "react";

class Randomize extends Component {
  render() {
    return (
      <div>
        <div className="arrowsContainer">
          {this.props.keyPress.keysOnScreen.map((arrow, i) => {
            return (
              arrow && (
                <img src={arrow.imgSrc} alt="" className="arrow" key={i} />
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default Randomize;
