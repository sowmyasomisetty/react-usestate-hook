import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-darkposition-fixed width-100vw">
      <div className="container-fluid">
        <h2 className="navbar-brand text-light" to="/">UI Playground</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/count">Count</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/theme">Theme</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/bgcolor">Background-Color</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/onlinestatus">Online-Status</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/textresizer">Text-Resizer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/battery">Battery-Counter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar