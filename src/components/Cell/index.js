import React from 'react';
import "./style.scss";
import cross from "assets/crossBoard.svg";
import circle from "assets/circleBoard.svg";

const Cell = ({type, selectCell}) => {
  return (
    <>
      { type === 0 && <button className="cell-empty" onClick={selectCell}></button> }
      { type === 1 && <div className="cell-cross">
        <img className="cross" src={cross} alt="cross"/>
      </div> }
      { type === -1 && <div className="cell-circle">
        <img className="circle" src={circle} alt="circle"/>
      </div> }
    </>
  )
}

export default React.memo(Cell, (prevProps, nextProps) => {
  return prevProps.type === nextProps.type
})
