import React, { Component } from "react";
import ControlKeys from "./ControlKeys";

import upArrow from "./../assets/arrow-alt-circle-up-regular.svg";
import downArrow from "./../assets/arrow-alt-circle-down-regular.svg";
import leftArrow from "./../assets/arrow-alt-circle-left-regular.svg";
import rightArrow from "./../assets/arrow-alt-circle-right-regular.svg";
import correct from "./../assets/check-circle-solid.svg";

import Randomize from "./Randomize";
// import Score from "./Score";
import Timer from "./Timer";
import StartScreen from "./StartScreen";
import GameOver from "./GameOver";
import firebase from "./../firebase";
import Rankings from "./Rankings";
// import Lobby from "./Lobby";
import Room from "./Room";

const dbRef = firebase.database().ref();

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      keysOnScreen: [],
      hiScores: [],
      keyNumber: [0],
      keyPosition: 0,
      score: 0,
      time: 10000,
      level: 0,
      startGame: false,
      multiplayer: false,
      startScreen: "visible",
      gameOverScreen: "hidden",
      rankingsScreen: "hidden",
      submitRankings: "hidden",
      showRooms: "hidden",
      currentRoom: "hidden",
      demoNight: false,
    };
  }

  componentDidMount() {
    dbRef.on("value", snapshot => {
      const dbScores = snapshot.val().hiScores;

      const hiScores = Object.keys(snapshot.val().hiScores).map(hiScoreKey => {
        return {
          name: dbScores[hiScoreKey].name,
          level: dbScores[hiScoreKey].level,
          score: dbScores[hiScoreKey].score,
          key: hiScoreKey
        };
      });

      hiScores.sort((a, b) => {
        return b.score - a.score;
      });

      this.setState({
        hiScores
      });
    });
  }

  random = number => Math.floor(Math.random() * number);

  screenKeySetter = () => {
    const arrows = [
      { keyName: "ArrowUp", pressed: false, imgSrc: upArrow },
      { keyName: "ArrowDown", pressed: false, imgSrc: downArrow },
      { keyName: "ArrowRight", pressed: false, imgSrc: rightArrow },
      { keyName: "ArrowLeft", pressed: false, imgSrc: leftArrow }
    ];

    const allKeys = this.state.keysOnScreen;

    allKeys.push(arrows[this.random(4)]);

    this.setState({
      keysOnScreen: allKeys
    });
  };

  keyMultiplyer = () => {
    for (let i = 0; i < this.state.level + 1; i++) {
      this.screenKeySetter();
    }
  };

  validKeyCheck = keyToCheck => {
    const currentArrow = this.state.keysOnScreen[this.state.keyPosition]
      .keyName;
    let valid = false;

    if (keyToCheck === currentArrow) {
      valid = true;
    } else {
      this.setState(
        {
          keysOnScreen: [],
          keyPosition: 0
        },
        () => this.keyMultiplyer()
      );
    }
    return valid;
  };

  // Runs when a keydown event occurs
  keyDownChecker = input => {
    let keyInput;
    if (input.key) {
      keyInput = input.key;
      // input.preventDefault();
    } else {
      keyInput = input;
    }
    if (this.state.startGame && this.validKeyCheck(keyInput)) {
      // Will run if the keydown is one of the arrow keeys
      const newArray = Array.from(this.state.keysOnScreen);
      const keyDirection = newArray[this.state.keyPosition]; // Cloning state

      // Changing the states of the clone
      keyDirection.pressed = true;
      keyDirection.imgSrc = correct;

      // Setting the state to be equal to our clone
      this.setState(
        // (this.state.keysOnScreen[this.state.keyPosition] = keyDirection)
        { keysOnScreen: newArray }
      );

      // Generate a new set of arrows when the end of keys reached
      if (this.state.keyPosition === this.state.keysOnScreen.length - 1) {
        this.levelUp();
      } else {
        this.setState({ keyPosition: this.state.keyPosition + 1 });
      }
    }
  };

  levelUp = () => {
    let newKeysOnScreen = Array.from(this.state.keysOnScreen);
    newKeysOnScreen = newKeysOnScreen.splice(this.state.keysOnScreen.length);

    const resetTime = 10000;
    const score =
      this.state.score + this.state.level * 400 + this.state.time / 100;

    this.setState(
      {
        keysOnScreen: newKeysOnScreen,
        keyPosition: 0,
        score,
        level: this.state.level + 1,
        time: resetTime
      },
      () => this.keyMultiplyer()
    );
  };

  startTime = () => {
    window.addEventListener("keydown", this.keyDownChecker);
    this.setState({
      startGame: true,
      demoNight: this.props.demoNight,
    });

    const timer = setInterval(() => {
      this.setState({ time: this.state.time - 100 });
      if (this.state.time === 0) {
        this.setState({
          gameOverScreen: "visible",
          startGame: false,
          submitRankings: "visible"
        });
        clearInterval(timer);
      }
    }, 100);
  };

  restartGame = () => {
    const restartTime = 10000;
    this.setState(
      {
        keysOnScreen: [],
        keyPosition: this.state.keyPosition * 0,
        score: this.state.score * 0,
        time: restartTime,
        level: this.state.level * 0,
        gameOverScreen: "hidden",
        submitRankings: "hidden"
      },
      () => {
        this.startTime();
        this.keyMultiplyer();
      }
    );
  };

  postScore = name => {
    const scoreDbRef = firebase.database().ref("/hiScores");
    const demoNightDbRef = firebase.database().ref("/demoNight");

    scoreDbRef.push({
      name,
      level: this.state.level,
      score: this.state.score
    });

    if (this.state.demoNight) {
      console.log('demodemodemo');
      
      demoNightDbRef.push({
        name,
        level: this.state.level,
        score: this.state.score
      })
    }

    this.setState({
      rankingsScreen: "visible"
    });
  };

  showStartScreen = () => {
    this.setState({
      startScreen: "visible"
    });
  };

  hideStartScreen = () => {
    this.setState({
      startScreen: "hidden"
    });
  };

  hideGameOver = () => {
    this.setState({ gameOverScreen: "hidden" });
  };

  showRankings = () => {
    this.setState({ rankingsScreen: "visible" });
  };

  closeRankings = () => {
    this.setState({
      rankingsScreen: "hidden"
    });
  };

  hideSubmission = () => {
    this.setState({
      submitRankings: "hidden"
    });
  };

  showRooms = () => {
    this.setState({
      showRooms: "visible"
    });
  };

  hideRooms = () => {
    this.setState({
      showRooms: "hidden"
    });
  };

  joinRoom = () => {
    const roomDbRef = firebase.database().ref("/rooms/room");
    roomDbRef.push({
      joined: true
    });
  };

  showCurrentRoom = () => {
    this.setState({
      currentRoom: "visible"
    });
  };

  clickHandler = arrow => {
    this.keyDownChecker(arrow);
  };

  render() {
    return (
      <div className="gameScreen">
        <Timer timeLeft={this.state.time} />
        {/* <Score score={this.state.score} /> */}
        <div className="eventScreen">
          <Randomize
            keyPress={this.state}
            keyMultiplyer={this.keyMultiplyer}
            startTime={this.startTime}
          />
          <h2>
            Level:
            {this.state.level}
          </h2>
        </div>
        <StartScreen
          startScreen={this.state.startScreen}
          hideStartScreen={this.hideStartScreen}
          showRooms={this.showRooms}
          showRankings={this.showRankings}
          restartGame={this.restartGame}
        />
        <GameOver
          visibility={this.state.gameOverScreen}
          score={this.state.score}
          level={this.state.level}
          restart={this.restartGame}
          postScore={this.postScore}
          closeRankings={this.state.rankingsScreen}
          submitRankings={this.state.submitRankings}
          hideSubmission={this.hideSubmission}
          showStartScreen={this.showStartScreen}
          hideGameOver={this.hideGameOver}
        />
        <Rankings
          hiScores={this.state.hiScores}
          rankingsScreen={this.state.rankingsScreen}
          close={this.closeRankings}
        />
        {/* <Lobby
          showRooms={this.state.showRooms}
          joinRoom={this.joinRoom}
          hideRooms={this.hideRooms}
          restartGame={this.restartGame}
          showCurrentRoom={this.showCurrentRoom}
        /> */}
        <Room currentRoom={this.state.currentRoom} />
        <ControlKeys
          keyDownHandler={this.keyDownChecker}
          keyUpHandler={this.keyUpChecker}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default GameScreen;
