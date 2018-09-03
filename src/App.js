import React, { Component } from "react";
import "./styles/style.css";
import GameScreen from "./components/GameScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameScreen />
      </div>
    );
  }
}

export default App;
