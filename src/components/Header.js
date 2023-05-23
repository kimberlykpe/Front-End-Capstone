import logo from "../images/nav_logo.png";
import Nav from "./Nav";
import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="navigation">
          <Nav />
        </div>
        
      </div>
    </>
  );
}

export default Header;