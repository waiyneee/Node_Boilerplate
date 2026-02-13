import React from "react";

import {Link} from "react-router-dom"

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
