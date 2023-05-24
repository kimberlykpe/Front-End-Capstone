import * as React from "react";
import { Link } from "react-router-dom";
import footerlogo from '../images/lemon.png'

function Footer () {
    return (
        <div className="footer">
        <div className="one">
          <img src={footerlogo} alt="Footer logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/" className="a">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="a">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="a">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="a">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order" className="a">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="a">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Address</h5>
            <li>
              <a id="nav" href="#">
                384 Flatshine Pl
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Chicago, IL 93044
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social</h5>

            <li>
              <a id="nav" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Tik-Tok
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Footer;