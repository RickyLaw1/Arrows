import React, { Component } from "react";

class GameOver extends Component {
  constructor() {
    super();
    this.state = {
      nameSubmission: ""
    };
  }

  handleChange = e => {
    this.setState({
      nameSubmission: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.nameSubmission) {
      if (this.props.level === 0) {
        console.log("Level too low");
      } else {
        this.props.postScore(this.state.nameSubmission);
        this.props.hideSubmission();
      }
    } else {
      console.log("Invalid Name");
    }

    this.setState({
      nameSubmission: ""
    });
  };

  render() {
    return (
      <div
        className="gameOverScreen"
        style={{ visibility: this.props.visibility }}
      >
        <h2>Game Over</h2>
        <div className="results">
          <p>Score: {this.props.score}</p>
          <p>Level {this.props.level}</p>
        </div>
        <form
          action=""
          onSubmit={this.handleSubmit}
          style={{ visibility: this.props.submitRankings }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.nameSubmission}
            onChange={this.handleChange}
          />
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
