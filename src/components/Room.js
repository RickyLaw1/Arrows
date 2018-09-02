import React, { Component } from "react";

class Room extends Component {
  render() {
    return (
      <div
        className="currentRoom"
        style={{ visibility: this.props.currentRoom }}
      >
        <div className="player">
          <h2>A</h2>
        </div>
        <div className="player">
          <h2>B</h2>
        </div>
        <div className="player">
          <h2>C</h2>
        </div>
        <div className="player">
          <h2>D</h2>
        </div>
      </div>
    );
  }
}

export default Room;
