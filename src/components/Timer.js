import React from "react";

const Timer = props => {
  const timePercent = `${props.timeLeft / 100}%`;
  let colour = "rgb(7, 114, 202)";

  if (props.timeLeft / 100 <= 30) {
    colour = "red";
  } else if (props.timeLeft / 100 <= 50) {
    colour = "yellow";
  }

  return (
    <div className="timer">
      <div
        className="timeLeft"
        style={{ width: timePercent, background: colour }}
      >
        {/* <h3>{props.timeLeft / 1000}</h3> */}
      </div>
    </div>
  );
};

export default Timer;
