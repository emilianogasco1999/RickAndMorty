import React from 'react'
import { Link } from 'react-router-dom'
const ButtonNav = ({ texto, style }) => {
  return (
    <li className="nav-item">

      <Link to={texto} className={`nav-link ${style}`} aria-current="page" href="#"> {texto} </Link>
    </li>
  )
}

export default ButtonNav