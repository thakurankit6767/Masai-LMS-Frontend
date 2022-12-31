import React, { useState } from "react";
import "./style/Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style/Navbar.css";

const Navbar = ({ user }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  return (
    <div className="nav_container">
      <div>
        <Link to="/">
          <img
            style={{ width: "90px", marginLeft: "25%" }}
            src="masai_logo.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <a href="#">
              {" "}
              <Link
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                to="lectures"
              >
                <span>Lectures</span>
              </Link>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <Link
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                to="assignments"
              >
                Assignments{" "}
              </Link>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <Link
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                to="admin"
              >
                Admin{" "}
              </Link>{" "}
            </a>
          </li>
          {user ? (
            <li>
              <a href="#">
                {" "}
                <Link
                  onClick={() => setShowMediaIcons(!showMediaIcons)}
                  to="login"
                >
                  Logout{" "}
                </Link>{" "}
              </a>
            </li>
          ) : (
            <li>
              <a href="#">
                {" "}
                <Link
                  onClick={() => setShowMediaIcons(!showMediaIcons)}
                  to="login"
                >
                  Login{" "}
                </Link>{" "}
              </a>
            </li>
          )}
          <p className="userName">{user?.email}</p>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
