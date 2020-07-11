import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        {/* Brand */}
        <div className="brand">
          <div className="logo">
            <img src="/images/home.png" alt="..." />
          </div>
          <h4>HOSTEL BOOKING</h4>
        </div>
        {/* Navigation */}
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div className="socials-links">
          <div className="social-link">
            <img src="/images/whatsapp.png" alt="" />
          </div>

          <div className="social-link">
            <img src="/images/facebook.png" alt="" />
          </div>

          <div className="social-link">
            <img src="/images/twitter.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
