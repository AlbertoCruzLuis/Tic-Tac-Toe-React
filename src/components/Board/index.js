import React, { useCallback, useEffect, useContext} from 'react';
import { moveIA } from 'utils/moveIA'
import GameContext from "contexts/GameContext";
import Cell from "components/Cell";
import styled from 'styled-components';
import './style.scss'

const Board = ({size = 3, matrix, setMatrix}) => {
  const {
    turn,
    changeTurn
  } = useContext(GameContext);

  const secondaryColor = "#470147"
  const BoardSpace = styled.div`
  display: grid;
  grid-template-columns: repeat(${size}, auto);
  background-color: ${secondaryColor};
  border-radius: 10px;
  padding: calc(2px + 0.3vw);
  `

  useEffect(() => {
    if (turn === -1) {
      moveIA(matrix, setMatrix, turn, changeTurn);
    }
  }, [matrix, turn, changeTurn, setMatrix]);

  const selectCell = useCallback((posX, posY, matrix) => {
    const newMatrix = [...matrix];
    newMatrix[posX][posY] = turn;
    setMatrix(newMatrix);
    changeTurn(-turn);
  }, [])

  return (
    <section className="board">
      <div className="board-container">
        <BoardSpace size={size}>
          { matrix.map((rows, posX) =>
            rows.map((cell, posY) => 
                <Cell key={posY} 
                      type={cell}
                      selectCell={() => selectCell(posX,posY, matrix)}/>
              )
          )}
        </BoardSpace>
      </div>
    </section>
  )
}

export default Board;
