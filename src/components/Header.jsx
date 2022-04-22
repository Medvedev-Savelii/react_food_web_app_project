import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="blue lighten-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Movies
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
