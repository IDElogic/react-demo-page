import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="#home"><img src={images.sticky} alt="..." style={{ marginTop: '1rem  0'}} /></a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#cards">Cards</a></li>
        <li><a href="/weatherApp">Weather Forecast</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/landingPage">Landing Page</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#footer">Contact</a></li>  
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <GiHamburgerMenu fontSize={24} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
              <li><a href="#" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#cards" onClick={() => setToggleMenu(false)}>Cards</a></li>
              <li><a href="/weatherApp" onClick={() => setToggleMenu(false)}>Weather Forecast</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="/calculator" onClick={() => setToggleMenu(false)}>Calculator</a></li>
              <li><a href="/portfolio" onClick={() => setToggleMenu(false)}>Portfolio</a></li>
              <li><a href="/landingPage" onClick={() => setToggleMenu(false)}>Landing Page</a></li>
              <li><a href="/about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#footer" onClick={() => setToggleMenu(false)}>Contact</a></li>   
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;