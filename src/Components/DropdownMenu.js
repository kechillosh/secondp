import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import { TfiAlignJustify } from "react-icons/tfi";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Home = (
    <Link className="navLink" to="/" onClick={handleDropdownItemClick}>
      Home
    </Link>
  );
  const Shop = (
    <Link className="navLink" to="/Shop" onClick={handleDropdownItemClick}>
      Shop
    </Link>
  );
  const Blog = (
    <Link className="navLink" to="/Blog" onClick={handleDropdownItemClick}>
      Blog
    </Link>
  );
  const About = (
    <Link className="navLink" to="/About" onClick={handleDropdownItemClick}>
      About
    </Link>
  );
  const Contact = (
    <Link className="navLink" to="/Contact" onClick={handleDropdownItemClick}>
      Contact
    </Link>
  );
  const Cart = (
    <Link className="navLink" to="/Cart" onClick={handleDropdownItemClick}>
      Cart
    </Link>
  );
  function handleDropdownItemClick() {
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        <TfiAlignJustify />
      </button>
      {isOpen && (
        <ul>
          <li>{Home}</li>
          <li>{Shop}</li>
          <li>{Blog}</li>
          <li>{About}</li>
          <li>{Contact}</li>
          <li>{Cart}</li>
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;
