import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    insights: false,
    solutions: false,
    sustainability: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbarTop">
        <div className="left">
          <div className="logo">
            <img
              src="https://www.se.com/ww/en/assets/v2/564/media/202250/SE_logo-LIO-white_header.svg"
              alt="Logo"
            />
          </div>
          <div className="searchBox">
            <input type="text" placeholder="Search" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                width="24"
                height="24"
              >
                <path
                  d="M831 801c8 8 8 22 0 30-4 4-10 6-15 6-6 0-11-2-15-6L645 675c-49 42-112 67-181 67-153 0-277-125-277-278s124-277 277-277 278 124 278 277c0 69-25 132-67 181zM230 464c0 130 105 235 234 235 64 0 121-25 164-66 0-1 1-2 2-3s2-2 3-2c41-43 66-100 66-164 0-129-105-234-235-234-129 0-234 105-234 234zm234-192c12 0 22 10 22 22 0 11-10 21-22 21-82 0-149 67-149 149 0 12-10 22-21 22-12 0-22-10-22-22 0-106 86-192 192-192z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
          <button className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="right">
          <img src="https://www.se.com/ww/en/assets/v2/564/media/305815/Impact%20Co%20logo%20English%20Black-01-177x54.svg" alt="" />
        </div>
      </div>
      <div className={`navbarBottom ${isMobileMenuOpen ? "show" : ""}`}>
        <ul className="dropdowns">
          {["insights", "solutions", "sustainability"].map((dropdown) => (
            <li key={dropdown} className={`dropdown1 ${isDropdownOpen[dropdown] ? "show" : ""}`}>
              <button
                className="dropdownButton1"
                onClick={() => toggleDropdown(dropdown)}
              >
                {dropdown.charAt(0).toUpperCase() + dropdown.slice(1)}
                <svg
                  fill="#000000"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 330 330"
                  className={`arrow ${isDropdownOpen[dropdown] ? "up" : "down"}`}
                >
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                      c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                      s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  />
                </svg>
              </button>
              <div className={`dropdownContent1 ${isDropdownOpen[dropdown] ? "show" : ""}`}>
                <a href="#">{dropdown}1</a>
                <a href="#">{dropdown}2</a>
                <a href="#">{dropdown}3</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
