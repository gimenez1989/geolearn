import React from 'react'
import { Link } from "react-router-dom";
import './menu.css'


const Menu = () => {
  return (
    <div className='menu'>
        <h1>Welcome to GeoLearn!</h1>
        <Link className='link' to="/study">Study the Map</Link>
        <Link className='link' to="/practice">Practice the Map</Link>
    </div>
  )
}

export default Menu