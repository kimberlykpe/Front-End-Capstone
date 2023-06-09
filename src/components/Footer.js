import * as React from "react";
import footerlogo from '../images/lemon.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer () {
    return (
        <div className="footer">
        <div className="footer-logo">
          <img src={footerlogo} alt="Footer logo" />
        </div>
        <div className="address">
          <ul>
            <h5>Address</h5>
            <li>
                384 Flatshine Pl
            </li>
            <li>
                Chicago, IL 93044
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <h5>Social</h5>

            <Link to="/home" className="a">Instagram</Link>
            <Link to="/home" className="a">Tik-Tok</Link>
            
          </ul>
        </div>
      </div>
    );
}

export default Footer;