import React, { Component } from "react";

class Rankings extends Component {
  render() {
    return (
      <div
        className="rankings"
        style={{ visibility: this.props.rankingsScreen }}
      >
        <span className="close" onClick={this.props.close}>
          <p>x</p>
        </span>
        <h2>Rankings</h2>
        {this.props.hiScores.map((hiScore, i) => {
          return (
            <div className="entry" key={hiScore.key}>
              <h3>
                #{i + 1} {hiScore.name}
              </h3>
              <p>
                Level: {hiScore.level} Score: {hiScore.score}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Rankings;
