import React, {useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import "./style.scss"
import Board from "../Board";
import ScoreBoard from "../ScoreBoard";
import blobbottomleft from "../../assets/blobbottomleft.svg";
import blobbottomleftshadow from "../../assets/blobbottomleftshadow.svg";
import blobbottomright from "../../assets/blobbottomright.svg";
import blobbottomrightshadow from "../../assets/blobbottomrightshadow.svg";
import backicon from "../../assets/backicon.svg";
import reloadicon from "../../assets/reloadicon.svg";
import {randomTurnSelection} from "../../utils/turn";
import GameContext from "../../contexts/GameContext";

const GameLayout = () => {
  const {
    turn,
    changeTurn
  } = useContext(GameContext);

  useEffect(() => {
    changeTurn(randomTurnSelection());
  },[]);

  const colorTurn = () => {
    let blue = "#206357";
    let red = "#792929";
    return turn === 1 ? blue : red;
  }

  return (
    <div className="gamelayout">
      <div className="degraded-rectangle-top" style={{ backgroundImage: 'linear-gradient(' + colorTurn() + ', rgb(27, 27, 27))' }}>
      </div>
      <ScoreBoard></ScoreBoard>
      <Board></Board>
      <div className="actions">
        <Link className="back-btn" to="/">
          <img className="back-icon" src={backicon} alt="backicon"/>
        </Link>
        <Link className="restart-btn" to="/game" onClick={() => window.location.reload()}>
          <img className="restart-icon" src={reloadicon} alt="reloadicon"/>
        </Link>
      </div>
      <div className="blobs">
        <img className="blob-bottom-left" src={blobbottomleft} alt="blob-bottom-left"/>
        <img className="blob-bottom-left-shadow" src={blobbottomleftshadow} alt="blob-bottom-left-shadow"/>
        <img className="blob-bottom-right" src={blobbottomright} alt="blob-bottom-right"/>
        <img className="blob-bottom-right-shadow" src={blobbottomrightshadow} alt="blob-bottom-right-shadow"/>
      </div>
    </div>
  );
}

export default GameLayout;