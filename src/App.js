import React, { Component } from "react";
import "./styles/style.css";
// import ControlKeys from "./components/ControlKeys";
import GameScreen from "./components/GameScreen";
import firebase from "./firebase";

const dbRef = firebase.database().ref();

class App extends Component {
  componentDidMount() {
    dbRef.on("value", snapshot => {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <div className="App">
        <GameScreen />
      </div>
    );
  }
}

export default App;
