import React from 'react';
import "./style.scss";

const ScoreBoard = () => {
  return (
    <section className="scoreboard">
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
    </section>
  )
}

export default React.memo(ScoreBoard)
