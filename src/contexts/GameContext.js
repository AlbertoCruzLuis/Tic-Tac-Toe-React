import { createContext } from "react";

const GameContext = createContext({
  turn: 1,
  changeTurn: () => {}
});

GameContext.displayName = "GameContext";

export default GameContext;