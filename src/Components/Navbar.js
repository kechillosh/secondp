import React from "react";
import logo from "../assets/Project.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";
import DropdownMenu from "./DropdownMenu";
import { TfiDribbble } from "react-icons/tfi";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="mainDrop">
        <DropdownMenu />
      </div>
      <div className="RightSide">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/Shop">
          Shop
        </Link>
        <Link className="navLink" to="/Blog">
          Blog
        </Link>
        <Link className="navLink" to="/About">
          About
        </Link>
        <Link className="navLink" to="/Contact">
          Contact
        </Link>
        <Link className="navLink" to="/Cart">
          <SlBag />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
