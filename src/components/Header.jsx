import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ toggleSubmenu }) => {
  return (
    <header>
      <h1>Topher's Maintenance and Repair</h1>
      <nav>
        <ul className="nav">
          <li><Link to="/">Welcome</Link></li>
          <li>
            <Link to="/services" onClick={toggleSubmenu}>Services</Link>
            <ul className="sub-menu">
              <li><Link to="/services/landscape-irrigation">Landscape & Irrigation</Link></li>
              <li><Link to="/services/concrete-asphalt">Concrete & Asphalt</Link></li>
              <li><Link to="/services/snow-ice">Snow & Ice Management</Link></li>
              <li><Link to="/services/construction">Construction Services</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/about-us" onClick={toggleSubmenu}>About</Link>   
          </li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header