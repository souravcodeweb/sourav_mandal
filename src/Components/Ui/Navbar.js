import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
       <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          Sourav
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/videos"
                className="nav-links"
                onClick={handleClick}
              >
                Videos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/work"
                className="nav-links"
                onClick={handleClick}
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;