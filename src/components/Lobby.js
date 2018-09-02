import React, { Component } from "react";

class Lobby extends Component {
  render() {
    return (
      <div className="lobby" style={{ visibility: this.props.showRooms }}>
        <div className="room">
          <div className="top">
            <h2>Room Name</h2>
            <h4>Players 0/3 </h4>
          </div>
          <div className="bottom">
            <h3>Status</h3>
            <button
              onClick={() => {
                this.props.joinRoom();
                this.props.hideRooms();
                this.props.showCurrentRoom();
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Lobby;
