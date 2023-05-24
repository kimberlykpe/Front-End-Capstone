import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About Us</h1>
      </Link>
      <a
        className="hover-effect" to="/"
      >
        <h1>Menu</h1>
      </a>
      <Link className="hover-effect" to="/booking">
        <h1>Booking</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>Order</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>Login</h1>
      </Link>
    </>

  );
}

export default Nav;