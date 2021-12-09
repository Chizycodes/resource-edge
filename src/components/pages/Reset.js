import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";

const Reset = ({ setPage }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="login-div">
      <div>
        <h1>Reset Password</h1>
        <p>To enable us reset your password, enter your email below</p>
      </div>

      <form className="login-form">
        <div className="email-div">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button className="login-btn-active btn-lg" />
        </div>
      </form>

      <div className="line"></div>
      <div className="f-pw">
        <Link to="/login" >Back to login</Link>
      </div>
    </div>
  );
};

export default Reset;
