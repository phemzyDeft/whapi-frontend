import React, { useState } from "react";
import { MdOutlineWhatshot } from "react-icons/md";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Header(props) {
  const [toggle, settoggle] = useState(false);

  const toggleClick = () => {
    settoggle(!toggle);
  };

  return (
    <nav
      class="navbar navbar-expand-lg fixed-top py-2"
      style={{ background: "var(--primary-color)" }}
    >
      <div class="container nav-section">
        <div className="logo col-lg-2">
          <MdOutlineWhatshot className="icon" />
          <h2 className="pt-2">SotaBot</h2>
        </div>
        <div className="offset-lg-7"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleClick}
        >
          {toggle ? (
            <MdOutlineRestaurantMenu className="text-white fs-1" />
          ) : (
            <BiMenuAltRight className="text-white fs-1" />
          )}
        </button>
        <div
          class="collapse navbar-collapse col-lg-4"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav" style={{ fontSize: ".8rem" }}>
            <li class="nav-item">
              <NavLink
                class="nav-link"
                to={"/"}
                style={{ color: "var(--text-color)", textDecoration: "none" }}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link"
                style={{ color: "var(--text-color)", textDecoration: "none" }}
                to={"/"}
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link"
                style={{ color: "var(--text-color)", textDecoration: "none" }}
                to={"/home"}
              >
                API
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link"
                style={{ color: "var(--text-color)", textDecoration: "none" }}
                to={"/usecases"}
              >
                Usecases
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                style={{ color: "var(--text-color)", textDecoration: "none" }}
                to={"/usecases"}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
