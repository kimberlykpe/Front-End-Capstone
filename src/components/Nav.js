import * as React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom/cjs/react-router-dom.min";
=======
import { Link } from "react-router-dom";
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482


const Nav = () => {
  return (
<<<<<<< HEAD
  <>
      <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/BookingForm" className="a">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Login
          </Link>
        </li>
      </ul>
      </nav>
      </>

    
=======
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
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482

  );
}

export default Nav;