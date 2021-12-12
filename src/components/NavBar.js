import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_name.png";
import mobileLogo from "../assets/images/logo_mobile.png";
import menuIcon from "../assets/images/mobile_menu.png";
import crossIcon from "../assets/images/cross.png";
import Button from "./Button";
import "../assets/styles/NavBar.css";

const NavBar = ({ setUser }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const clossMobileMenu = () => {
    setToggle(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("re-user");
    setUser({
      email: "",
      password: "",
      isLogged: false,
    });
    clossMobileMenu();
  };

  const getUser = localStorage.getItem("re-user");

  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="nav-left">
          <Link to="/">
            <img src={mobileLogo} alt="Logo" className="mobile-logo" />
            <img src={logo} alt="Logo" className="desktop-logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleToggle}>
          <img src={toggle ? crossIcon : menuIcon} alt="menu_icon" />
        </div>

        <ul className={toggle ? "nav-bar nav-bar-active" : "nav-bar"}>
          <div>
            <div className="nav-menu-left">
              <li className="features">
                <Link to="/" onClick={clossMobileMenu}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" onClick={clossMobileMenu}>
                  About
                </Link>
              </li>
            </div>

            <div className="nav-menu-right">
              <li>
                <Link to="/" className="btn-li">
                  <Button text="Sign up" className="signup-btn" />
                </Link>
              </li>
              <li className="btn-li">
                {!getUser ? (
                  <Link to="/login">
                    <Button
                      text="Sign in"
                      className="signin-btn"
                      onClick={clossMobileMenu}
                    />
                  </Link>
                ) : (
                  <Button
                    text="Sign out"
                    className="signin-btn"
                    onClick={handleLogout}
                  />
                )}
              </li>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
