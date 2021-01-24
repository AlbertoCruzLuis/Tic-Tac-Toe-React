import React from 'react';
import { Link } from 'react-router-dom';
import blobtopleft from "../../assets/blobtopleft.svg";
import blobtopleftshadow from "../../assets/blobtopleftshadow.svg";
import blobtopright from "../../assets/blobtopright.svg";
import blobtoprightshadow from "../../assets/blobtoprightshadow.svg";
import cross from "../../assets/cross.svg";
import circle from "../../assets/circle.svg";
import './style.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="blobs">
        <img className="blob-top-left" src={blobtopleft} alt="blob-top-left"/>
        <img className="blob-top-left-shadow" src={blobtopleftshadow} alt="blob-top-left-shadow"/>
        <img className="blob-top-right" src={blobtopright} alt="blob-top-right"/>
        <img className="blob-top-right-shadow" src={blobtoprightshadow} alt="blob-top-right-shadow"/>
      </div>
      <div className="cross">
        <img className="cross-center" src={cross} alt="cross-center"/>
        <img className="cross-left" src={cross} alt="cross-left"/>
        <img className="cross-right" src={cross} alt="cross-right"/>
      </div>
      <div className="circles">
        <img className="circle-left" src={circle} alt="circle-left"/>
        <img className="circle-right" src={circle} alt="circle-right"/>
      </div>
      <div className="container">
        <div className="title">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="btn-container">
          <div className="btn-play">
            <Link to="/game">
              <span>Play</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="degraded-rectangle-bottom">
      </div>
    </div>
  )
}

export default HomePage;
