import React from "react";
import "./alert.css";

const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
