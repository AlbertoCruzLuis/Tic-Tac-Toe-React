import React from 'react';
import GameLayout from "../../components/GameLayout"
import GameProvider from "../../providers/GameProvider";

const GamePage = () => {
  return (
      <GameProvider>
        <GameLayout />
      </GameProvider>
  )
}

export default GamePage;

