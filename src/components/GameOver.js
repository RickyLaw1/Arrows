import React, { Component } from "react";
import exit from "./../assets/sign-out-alt-solid.svg";

class GameOver extends Component {
  constructor() {
    super();
    this.state = {
      nameSubmission: "",
      showAlert: "hidden",
      alertMsg: ""
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
        this.setState({
          showAlert: "visible",
          alertMsg: "Please score higher..."
        });
      } else {
        this.props.postScore(this.state.nameSubmission);
        this.props.hideSubmission();
      }
    } else {
      this.setState({ showAlert: "visible", alertMsg: "Invalid Name" });
    }

    this.setState({
      nameSubmission: ""
    });
  };

  removeAlert = () => {
    this.setState({
      showAlert: "",
      alertMsg: ""
    });
  };

  render() {
    return (
      <div
        className="gameOverScreen"
        style={{ visibility: this.props.visibility }}
      >
        <img
          src={exit}
          alt=""
          className="exit"
          onClick={() => {
            this.props.showStartScreen();
            this.props.hideGameOver();
            this.props.hideSubmission();
          }}
        />
        <h2>Game Over</h2>
        <div className="results">
          <p>Score: {this.props.score}</p>
          <p>Level {this.props.level}</p>
        </div>
        <p style={{ visibility: this.state.showAlert }}>
          {this.state.alertMsg}
        </p>
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
        <button
          className="playAgain"
          onClick={() => {
            this.props.restart();
            this.removeAlert();
          }}
        >
          Play Again
        </button>
      </div>
    );
  }
}

export default GameOver;
