import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
     
        <div className="nav-container">
        
          <NavLink exact to="/" >
            <div>
                <div>
                    <span className="mad troff">Madelyn Torff</span>
                </div>
                
            </div>
           
            {/* <i className="fas fa-code"></i> */}

          </NavLink>
         

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-itemone">
              <NavLink
                exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick} 
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? " " : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;