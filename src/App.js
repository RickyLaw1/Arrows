import React, { Component } from "react";
import "./styles/style.css";
import GameScreen from "./components/GameScreen";

const pressed = [];
const code = "demonight"

  
class App extends Component {

  constructor() {
    super();
    this.state = {
      demoNight: false,
    }
  }

  componentDidMount() {
    window.addEventListener("keyup", (e) => {
      pressed.push(e.key);
      pressed.splice(-code.length - 1, pressed.length - code.length);
   
      if (pressed.join("").includes(code)) {
        this.setState({
          demoNight: true,
        })
        console.log('Demo Night Enabled!');
      }
   });
  
  }

  render() {
    return (
      <div className="App">
        <GameScreen demoNight={this.state.demoNight}/>
        {this.state.demoNight ? <h5>WELCOME TO DEMO NIGHT! Try to get a highscore!</h5> : null  }
      </div>
    );
  }
}

export default App;
