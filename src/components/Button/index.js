import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './style.scss'

const Button = ({ srcIcon, alt, typeStyle = "primary", path, onClick }) => {
  return (
      <Link className={typeStyle} to={path} onClick={onClick}>
          <img src={srcIcon} alt={alt} />
      </Link>
  )
}

Button.propTypes = {
  typeStyle: PropTypes.oneOf(["primary", "secondary"])
}

export default React.memo(Button)