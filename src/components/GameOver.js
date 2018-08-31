import React, { Component } from "react";

class GameOver extends Component {
  // constructor () {
  //     super();

  // }

  render() {
    return (
      <div
        className="gameOverScreen"
        style={{ visibility: this.props.visibility }}
      >
        <h2>Game Over</h2>
        <p>Score is {this.props.score}</p>
        <p>Level {this.props.level}</p>
        <form action="">
          <input type="text" placeholder="Enter your name" />
          <input type="submit" value="Rank me!" />
        </form>
        <button className="playAgain" onClick={this.props.restart}>
          Play Again
        </button>
      </div>
    );
  }
}

export default GameOver;
