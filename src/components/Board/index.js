import React, {useState, useEffect, useContext} from 'react';
import "./style.scss";
import Cell from "../Cell";
import {minimax, emptyCells} from "../../utils/minimax";
import BoardLogic from "../../utils/boardLogic"
import GameContext from "../../contexts/GameContext";

const Board = () => {
  const [matrix, setMatrix] = useState([]);
  const {
    turn,
    changeTurn
  } = useContext(GameContext);

  useEffect(() => {
    let newBoard = new BoardLogic(3);
    setMatrix(newBoard.matrix);
  }, []);

  useEffect(() => {
    if (turn === -1) {
      moveIA();
    }
  }, [turn]);

  const selectCell = (posX, posY) => {
    console.log("Select Cell");
    const newMatrix = [...matrix];
    newMatrix[posX][posY] = turn;
    setMatrix(newMatrix);
    changeTurn(-turn);
  }

  const moveIA = () => {
    const newMatrix = [...matrix];
    let bestMove = minimax(matrix,emptyCells(matrix).length,turn);
    console.log(bestMove);
    if (bestMove[0] === -1 && bestMove[1] === -1) {
      if(bestMove[2] === 0) {
        alert("None Wins");
      } else if(bestMove[2] === -1) {
        alert("Win IA");
      } else {
        alert("You are the Winner!");
      }
    } else {
      newMatrix[bestMove[0]][bestMove[1]] = turn;
      setMatrix(newMatrix);
    }
    changeTurn(-turn);
  }

  return (
    <div className="board">
      <div className="board-container">
        <div className="board-space">
        { matrix.map((rows, posX) =>
          <div key={posX} className="rows">
            { rows.map((cell, posY) => 
              <Cell key={posY} 
                    type={cell}
                    selectCell={() => selectCell(posX,posY)}/>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Board;
