import React from "react";

const Score = props => {
  return (
    <p className="score">
      Score:
      {props.score}
    </p>
  );
};

export default Score;
