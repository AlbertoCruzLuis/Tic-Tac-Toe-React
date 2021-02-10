import React, {useState, useEffect, useCallback, useContext} from 'react';
import "./style.scss"
import Board from "components/Board";
import ScoreBoard from "components/ScoreBoard";
import backicon from "assets/backicon.svg";
import reloadicon from "assets/reloadicon.svg";
import {randomTurnSelection} from "utils/turn";
import GameContext from "contexts/GameContext";
import Button from 'components/Button';
import Blobs from "components/Blobs"
import styled from 'styled-components';
import { STATE_WINNER, winPlayer, fullCells } from 'utils/minimax'
import WinnerScreen from 'components/WinnerScreen';
import BoardLogic from "utils/boardLogic"

const GameLayout = () => {
  const [matrix, setMatrix] = useState([])
  const [winner, setWinner] = useState(2)
  const {
    turn,
    changeTurn
  } = useContext(GameContext)

  useEffect(() => {
    changeTurn(randomTurnSelection())
    let newBoard = new BoardLogic(3);
    setMatrix(newBoard.matrix);
  },[])

  useEffect(() => {
    // Check someone win
    if (winPlayer(matrix, STATE_WINNER.HUMAN)) {
      console.log("Winner Humman");
      setWinner(STATE_WINNER.HUMAN)
    }
    if (winPlayer(matrix, STATE_WINNER.IA)) {
      console.log("Winner IA");
      setWinner(STATE_WINNER.IA)
    }
    if (fullCells(matrix)) {
      console.log("Not Winner");
      setWinner(STATE_WINNER.NONE)
    }
  }, [turn])

  const blackColor = "rgb(27, 27, 27)"
  const colorTurn = () => {
    let blue = "#206357";
    let red = "#792929";
    return turn === 1 ? blue : red;
  }

  const DegradedReactangle = styled.div`
    background-image: linear-gradient( ${colorTurn()} , ${blackColor});
    padding: 25px;
    margin-bottom: 2vh;
  `

  const refreshPage = useCallback(() => {
      window.location.reload()
    }, [])

  return (
    <div className="gamelayout">
      <DegradedReactangle />
      <ScoreBoard></ScoreBoard>
      <Board matrix={matrix} setMatrix={setMatrix}></Board>
      <section className="actions">
        <Button srcIcon={backicon}
          alt="backicon"
          typeStyle="primary" 
          path="/" />
        <Button srcIcon={reloadicon}
          alt="backicon" 
          typeStyle="secondary" 
          path="/game" onClick={refreshPage} />
      </section>
      <Blobs />
      { winner === STATE_WINNER.HUMAN && <WinnerScreen winner={STATE_WINNER.HUMAN} />}
      { winner === STATE_WINNER.IA && <WinnerScreen winner={STATE_WINNER.IA} />}
      { winner === STATE_WINNER.NONE && <WinnerScreen winner={STATE_WINNER.NONE} />}
    </div>
  );
}

export default GameLayout;