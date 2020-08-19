import React from "react";
import { Link, withRouter } from "react-router-dom";

export const Tabs = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#" data-toggle="tab" className="nav-link">
          <Link to="/home">HOME</Link>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <Link to="/characters">CHARACTERS</Link>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <Link to="/planets">PLANETS</Link>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          SERIES
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          FILMS
        </a>
      </li>
    </ul>
  );
};
