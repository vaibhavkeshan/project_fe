import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
const HomeHeader = () => {
  const { authenticate } = useContext(UserContext);
  const location = useLocation();
  const [isPath, setIsPath] = useState(true);
  useEffect(() => {
    if (location.pathname === "/pricing") {
      setIsPath(true);
    } else {
      setIsPath(false);
    }
  }, [location.pathname]);
  return (
    // <div>
    <nav
      className="navbar navbar-expand-lg    px-2"
      id={`${isPath ? "mainHeader2" : "mainHeader"}`}
    >
      <NavLink className="navbar-brand secondHeader_logo" to="/">
        Godspeed
      </NavLink>
      <button
        className="navbar-toggler  bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-light"></span>
      </button>

      <div
        className="collapse navbar-collapse mobileW100"
        id="navbarSupportedContent"
      >
        <ul
          className="navbar-nav   w-100 d-flex justify-content-end align-items-center"
          id="mobileHeader"
        >
          {/* <li className="nav-item">
            <NavLink className="nav-link secondHeader" to="/" exact>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link secondHeader" to="/pricing">
              Pricing
            </NavLink>
          </li> */}
          {!authenticate && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link secondHeader_btn" to="/signin">
                  <button className="button" id="header_btn">
                    Sign In
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link secondHeader_btn" to="/register">
                  <button className="button" id="header_btn">
                    {" "}
                    Register
                  </button>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
    // </div>
  );
};

export default HomeHeader;
