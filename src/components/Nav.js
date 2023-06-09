import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { Link, useMatch, useResolvedPath } from 'react-router-dom/cjs/react-router-dom.min';
export default function Nav() {
  return <nav className="navigation">
      <ul>
        <Link to="/home" className="a">Home</Link>
        <Link to="/about" className="a">About</Link>
        <Link to="/menu" className="a">Menu</Link>
        <Link to="/reservations" className="a">Reservations</Link>
        <Link to="/orden-online" className="a">Order</Link>
        <Link to="/login" className="a">Login</Link>
      </ul>
    </nav>
}
