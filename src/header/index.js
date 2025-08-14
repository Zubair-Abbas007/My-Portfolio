import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between w-100">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          
          <div className="d-flex align-items-center">
            {/* Horizontal navigation bar on the right */}
            <nav className="horizontal__nav">
              <ul className="the_menu horizontal__menu">
                <li className="menu_item">
                  <Link to="/" className="nav_link">Home</Link>
                </li>
                <li className="menu_item">
                  <Link to="/about" className="nav_link">About</Link>
                </li>

                <li className="menu_item">
                  <Link to="/contact" className="nav_link">Contact</Link>
                </li>
              </ul>
            </nav>
            
            {/* The theme toggle button is also on the right */}
            <Themetoggle />
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;