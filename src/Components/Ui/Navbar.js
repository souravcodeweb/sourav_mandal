import React from "react";
import { Link } from "react-router-dom";
import "../Ui/Navbar.css";
import { useRef } from "react";
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }


  return (
    <div className="navbar">
      <div className="logo">
        <span>Sourav</span>
      </div>
      <div className="nav" ref={navRef}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="nav_btn nav_close_btn" onClick={showNavbar}> <FaTimes/> </button>
        </ul>
      </div>
      <button className="nav_btn" onClick={showNavbar}> <FaBars/> </button>
    </div>
  );
};

export default Navbar;
