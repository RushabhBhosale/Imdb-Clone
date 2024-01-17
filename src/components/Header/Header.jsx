import React from 'react'
import logo from '../../assets/IMDB_Logo_svg.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
         <Link to='/'><img src={logo} className="header-icon" /></Link>
         <Link to='/movies/popular'><span>Popular</span></Link>
         <Link to='/movies/top_rated'><span>Top</span></Link>
         <Link to='/movies/upcoming'><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header