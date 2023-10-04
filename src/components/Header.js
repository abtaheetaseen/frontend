import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header-header">
      <NavLink to="/">
        <img src="./images/sandlogo.png" alt="my logo img" className="sand-logo"/>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;

