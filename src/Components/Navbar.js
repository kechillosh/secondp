import React from "react";
import logo from "../assets/Project.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="RightSide">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/">
          Shop
        </Link>
        <Link className="navLink" to="/">
          Blog
        </Link>
        <Link className="navLink" to="/">
          About
        </Link>
        <Link className="navLink" to="/">
          Contact
        </Link>
        <Link className="navLink" to="/">
          <SlBag />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
