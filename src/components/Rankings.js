import React, { Component } from "react";

class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      highScores: []
    }
  }

  render() {
    return (
      <div className="rankingsPage">
        <h2 
          className="rankingsTitle" 
          style={{ visibility: this.props.rankingsScreen }}
        >Rankings</h2>
        
        <div
          className="rankings"
          style={{ visibility: this.props.rankingsScreen }}
        >
          <input type="radio" name="leaderBoard"id="allTime" defaultChecked/>
          <input type="radio" name="leaderBoard"id="demo"/>
          <label htmlFor="allTime" className="leaderboard allTime" onClick={this.props.showAllTime}>All Time</label>
          <label htmlFor="demo" className="leaderboard demo" onClick={this.props.showDemoNight}>Demo Night</label>
          <span className="close" onClick={this.props.close}>
            <p>x</p>
          </span>
          
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
      </div>
    );
  }
}

export default Rankings;
