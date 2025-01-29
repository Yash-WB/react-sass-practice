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
            {isMobileMenuOpen ? (
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 5L19 19M5 19L19 5"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                viewBox="0 -0.5 25 25"
                fill="none"
              >
                <path
                  d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
                  fill="#000000"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="right">
          <img
            src="https://www.se.com/ww/en/assets/v2/564/media/305815/Impact%20Co%20logo%20English%20Black-01-177x54.svg"
            alt=""
          />
        </div>
      </div>
      <div className={`navbarBottom ${isMobileMenuOpen ? "show" : ""}`}>
        <ul className="dropdowns">
          {["insights", "solutions", "sustainability"].map((dropdown) => (
            <li
              key={dropdown}
              className={`dropdown1 ${isDropdownOpen[dropdown] ? "show" : ""}`}
            >
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
                  className={`arrow ${
                    isDropdownOpen[dropdown] ? "up" : "down"
                  }`}
                >
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                      c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                      s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  />
                </svg>
              </button>
              <div
                className={`dropdownContent1 ${
                  isDropdownOpen[dropdown] ? "show" : ""
                }`}
              >
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
