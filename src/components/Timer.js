import React from "react";

const Timer = props => {
  const timePercent = `${props.timeLeft / 100}%`;
  return (
    <div className="timer">
      <div className="timeLeft" style={{ width: timePercent }}>
        <h3>{props.timeLeft}</h3>
      </div>
    </div>
  );
};

export default Timer;
