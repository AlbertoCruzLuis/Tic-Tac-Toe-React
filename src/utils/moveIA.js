import { minimax, emptyCells } from "utils/minimax";

export const moveIA = (matrix, setMatrix, turn, changeTurn) => {
  const newMatrix = [...matrix];
  let bestMove = minimax(matrix,emptyCells(matrix).length,turn);

  if (bestMove[0] !== -1 || bestMove[1] !== -1) {
    newMatrix[bestMove[0]][bestMove[1]] = turn;
    setMatrix(newMatrix);
  }
  changeTurn(-turn);
}

