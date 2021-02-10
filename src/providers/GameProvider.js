import React, { useState } from "react";
import GameContext from "contexts/GameContext"

const GameProvider = ({ children }) => {
  const [turn, setTurn] = useState(1);

  const changeTurn = (turn) => {
    setTurn(turn);
  }

  return (
    <GameContext.Provider
      value={{
        turn,
        changeTurn,      
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;