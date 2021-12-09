import React from "react";
import "../assets/styles/Input.css";

const Input = ({ type, placeholder, inputName, value, onChange, label }) => {
  return (
    <div>
      <div>
        <label className="label">{label}</label>
      </div>
      <div>
        <input
          className="input"
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
