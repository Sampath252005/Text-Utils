import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ title, mode, changeTheme, aboutText }) {
  return (
    <nav className={`navbar navbar-expand-lg ${mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>
          <button onClick={() => changeTheme("dark")} className="btn btn-dark mx-1">Dark</button>
          <button onClick={() => changeTheme("light")} className="btn btn-light mx-1" style={{border:'1px solid black'}}>Light</button>
          <button onClick={() => changeTheme("blue")} className="btn btn-primary mx-1">Blue</button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};
