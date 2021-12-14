import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../assets/styles/Login.css";
import editIcon from "../../assets/images/edit_icon.png";
import Input from "../Input";
import { Link } from "react-router-dom";
import check from "../../assets/images/green_check.png";
import eyeIcon from "../../assets/images/eye_icon.png";
import eyeIconFilled from "../../assets/images/eye_icon_filled.png";
import Button from "../Button";

const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordView, setPasswordView] = useState(false);
  const [form, setForm] = useState("email");

  const navigate = useNavigate();

  const emailValidate = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || emailRegex.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setForm("password");
  };

  const togglePassword = () => {
    setPasswordView(!passwordView);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setTimeout(() => {
        user = {
        email: password,
        password: email,
        isLogged: true,
      };
      localStorage.setItem("re-user", JSON.stringify(user));
      navigate("/dashboard");
        
      }, 2000);
      
    }
  };
  useEffect(() => {
    const getUser = localStorage.getItem("re-user");
    if (getUser) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="login-div">
      <div>
        <h1>Log in</h1>
        <p>Access your resource edge account</p>
      </div>

      <form className="login-form">
        {form === "email" && (
          <div className="email-div">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img
              src={check}
              alt="green_check_icon"
              className={
                emailValidate()
                  ? "green-check green-check-active"
                  : "green-check"
              }
            />
            <Button
              className={
                emailValidate()
                  ? "login-btn login-btn-active btn-lg"
                  : "login-btn btn-lg"
              }
              onClick={handleClick}
            />
          </div>
        )}
        {form === "password" && (
          <div>
            <div className="details">
              <div className="name-email">
                <h3 className="name">{email}</h3>
                <p className="email">{email}</p>
              </div>
              <div className="edit-icon">
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  onClick={() => setForm("email")}
                />
              </div>
            </div>

            <div className="password-div">
              <Input
                label="Password"
                type={passwordView ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <img
                src={passwordView ? eyeIconFilled : eyeIcon}
                alt="eye_icon"
                className="eye-icon"
                onClick={togglePassword}
              />
              <Button className="pw-btn btn-lg" onClick={handleSubmit} />
            </div>
          </div>
        )}
      </form>

      <div className="line"></div>
      <div className="f-pw">
        <Link to="/reset">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login;
