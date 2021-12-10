import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import redIcon from "../../assets/images/red_icon.png";
import checkLg from "../../assets/images/green_large_check.png";


const Reset = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const emailValidate = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
      setErrorMessage("Enter email address");
      return false;
    } else if (emailRegex.test(email) === false) {
      setErrorMessage("Enter a valid email");
      return false;
    }
    setErrorMessage();
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailValidate();
  };

  const passwordReset = (e) => {
    e.preventDefault();
  }

  return (
    <>
      {errorMessage !== undefined && (
        <div className="login-div">
          <div>
            <h1>Reset Password</h1>
            <p>To enable us reset your password, enter your email below</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="email-div">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={errorMessage}
              />
              {errorMessage && (
                <div className="error-msg">
                  <img src={redIcon} alt="Red Icon" />
                  <span className="error-text">{errorMessage}</span>
                </div>
              )}

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
            <p>A recovery email has been sent to your email address.</p>
          </div>

          <div className="line"></div>
          <div className="f-pw">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      )}

      {/*SET NEW PASSWORD */}
      { (
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
    </>
  );
};

export default Reset;
