import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
