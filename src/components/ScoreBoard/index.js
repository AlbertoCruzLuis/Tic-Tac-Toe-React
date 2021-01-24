import React from 'react';
import "./style.scss";

const ScoreBoard = () => {
  return (
    <div className="scoreboard">
      <div className="scoreboard-container">
        <div className="player1">
          <span>P1</span>
        </div>
        <div className="versus">
          <span>VS</span>
        </div>
        <div className="player2">
          <span>IA</span>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard;
