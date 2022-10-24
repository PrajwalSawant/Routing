import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/contactUs">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/help">
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
