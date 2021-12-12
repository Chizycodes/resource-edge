import React from "react";
import illus1 from "../assets/images/login_left_illus.png";
import illus2 from "../assets/images/login_right_illus.png";
import "../assets/styles/Login.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import NavBar from "./NavBar";

const AuthBg = ({user, setUser}) => {
  return (
    <>
      <NavBar />
      <div className="login-bg">
        <div className="login-container">
          <Link to="/" className="logo-div">
            <img src={logo} alt="Logo" />
          </Link>
          {window.location.pathname === "/login" && <Login user={user} setUser={setUser} />}
          {window.location.pathname === "/reset" && <Reset />}
        </div>
        <div className="bottom">
          <img src={illus1} alt="Illustration" className="btm-img-1" />
          <img src={illus2} alt="Illustration" className="btm-img-2" />
        </div>
      </div>
    </>
  );
};

export default AuthBg;
