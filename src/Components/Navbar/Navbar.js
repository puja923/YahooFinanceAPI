
import React, { useState } from "react";
//  import "../Navbar/navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mysecond, setMySecond] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
         MyLogo
          </a>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news" className="nav-link" onClick={closeMenu}>
               News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tickets" className="nav-link" onClick={closeMenu}>
               Trending Tickets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/finacial" className="nav-link" onClick={closeMenu}>
               Finacial Data
              </NavLink>
            </li>
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

    </>
  );
};

export default Navbar;