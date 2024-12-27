import React, { useState } from 'react';
import { Link } from '../../renderer/Link'; // Use your custom Link component
import './code.css'; // Update the path to the correct CSS file

const Header = () => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleSubmenu = (event) => {
    event.preventDefault();
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  return (
    <header className="header">
      <h1>Topher's Maintenance and Repair</h1>
      <nav>
        <ul className="nav">
          <li><Link href="/">Welcome</Link></li>
          <li>
            <Link href="/services" onClick={toggleSubmenu}>Services</Link>
            {isSubmenuVisible && (
              <ul className="sub-menu">
                <li><Link href="/services/landscape-irrigation">Landscape & Irrigation</Link></li>
                <li><Link href="/services/concrete-asphalt">Concrete & Asphalt</Link></li>
                <li><Link href="/services/snow-ice">Snow & Ice Management</Link></li>
                <li><Link href="/services/construction">Construction Services</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/about-us">About</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/contact-us">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;