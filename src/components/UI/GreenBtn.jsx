import React from "react";

import "./GreenBtn.css";

const Button = (props) => {
  return (
    <>
      <button type={props.type} onClick={props.onClick} className="greenBtn">
        {props.children}
      </button>
    </>
  );
};

export default Button;
