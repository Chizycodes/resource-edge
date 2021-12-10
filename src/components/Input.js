import React from "react";
import "../assets/styles/Input.css";

const Input = ({ type, placeholder, inputName, value, onChange, label, errorMessage }) => {
  return (
    <div>
      <div className="label">
        <label>{label}</label>
      </div>
      <div>
        <input
          className={errorMessage ? "input error" : "input"}
          type={type}
          placeholder={placeholder}
          name={inputName}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};


export default Input;
