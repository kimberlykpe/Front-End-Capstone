import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { Link, useMatch, useResolvedPath } from 'react-router-dom/cjs/react-router-dom.min';
export default function Nav() {
  return <nav className="nav">
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/orden-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
}
/*
function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active": ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}*/
