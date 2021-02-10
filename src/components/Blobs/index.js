import React from 'react'
import blobbottomleft from "../../assets/blobbottomleft.svg";
import blobbottomleftshadow from "../../assets/blobbottomleftshadow.svg";
import blobbottomright from "../../assets/blobbottomright.svg";
import blobbottomrightshadow from "../../assets/blobbottomrightshadow.svg";
import './style.scss'

const Blobs = () => {
  return (
    <div className="blobs">
      <img className="blob-bottom-left" src={blobbottomleft} alt="blob-bottom-left"/>
      <img className="blob-bottom-left-shadow" src={blobbottomleftshadow} alt="blob-bottom-left-shadow"/>
      <img className="blob-bottom-right" src={blobbottomright} alt="blob-bottom-right"/>
      <img className="blob-bottom-right-shadow" src={blobbottomrightshadow} alt="blob-bottom-right-shadow"/>
    </div>
  )
}

export default React.memo(Blobs)