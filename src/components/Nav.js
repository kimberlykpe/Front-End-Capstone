import * as React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Nav = () => {
  return (
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

    

  );
}

export default Nav;