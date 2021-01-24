import React, { Fragment, useContext } from 'react';
import "./style.scss";
import cross from "../../assets/crossBoard.svg";
import circle from "../../assets/circleBoard.svg";
import GameContext from "../../contexts/GameContext"

const Cell = ({type, selectCell, moveIA}) => {
  const {
    turn,
    changeTurn
  } = useContext(GameContext);
  
  return (
    <Fragment>
      { type === 0 && <button className="cell-empty" onClick={selectCell}></button> }
      { type === 1 && <div className="cell-cross">
        <img className="cross" src={cross} alt="cross"/>
      </div> }
      { type === -1 && <div className="cell-circle">
        <img className="circle" src={circle} alt="circle"/>
      </div> }
    </Fragment>
  )
}

export default Cell;
