import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <div className="logo">
          <img src="../images/logo.png" alt="logo" />
        </div>

        <ul className="links">
          <li>
            <i className="fas fa-bars" />
          </li>
          <li>
            <i className="fab fa-facebook" />
          </li>
          <li>
            <i className="fab fa-twitter-square" />
          </li>
          <li>
            <i className="fab fa-instagram-square" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
