import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import redIcon from "../assets/images/red_icon.png";
import checkLg from "../assets/images/green_large_check.png";
import { Link } from "react-router-dom";

const NewPassword = ({ errorMessage, setErrorMessage }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordValidate = () => {
    if (!password) {
      setErrorMessage("Enter password");
      return false;
    } else if (!confirmPassword) {
      setErrorMessage("Enter password");
      return false;
    }
    setErrorMessage();
    return true;
  };

  const passwordReset = (e) => {
    e.preventDefault();
    passwordValidate();
  };

  return (
    <>
      {errorMessage !== undefined && (
        <div className="login-div">
          <div>
            <h1>Reset Password</h1>
            <p>The password should have atleast 6 characters</p>
          </div>

          <form className="login-form" onSubmit={passwordReset}>
            <div className="email-div">
              <div className="password">
                <Input
                  label="New Password"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage={errorMessage}
                />
                {errorMessage && (
                  <div className="error-msg">
                    <img src={redIcon} alt="Red Icon" />
                    <span className="error-text">{errorMessage}</span>
                  </div>
                )}
              </div>
              <div>
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  name="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  errorMessage={errorMessage}
                />
                {errorMessage && (
                  <div className="error-msg">
                    <img src={redIcon} alt="Red Icon" />
                    <span className="error-text">{errorMessage}</span>
                  </div>
                )}
              </div>

              <Button className="login-btn login-btn-active btn-lg" />
            </div>
          </form>

          <div className="line"></div>
          <div className="f-pw">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      )}

      {/*SUCCESS PAGE*/}
      {errorMessage === undefined && (
        <div className="login-div">
          <div>
            <h1>Reset Password</h1>
          </div>
          <div className="check-lg">
            <img src={checkLg} alt="Green Large Check" />
          </div>
          <div className="reset-msg">
            <p>Your password has been changed successfully</p>
          </div>

          <div className="line"></div>
          <div className="f-pw">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPassword;
