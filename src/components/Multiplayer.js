import React, { Component } from "react";
import GameScreen from "./GameScreen";

class Multiplayer extends Component {
  render() {
    return (
      <div className="roomGameScreen">
        <GameScreen />
      </div>
    );
  }
}

export default Multiplayer;
