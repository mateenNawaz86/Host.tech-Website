import React from "react";

import "./SimpleBtn.css";

const SimpleBtn = (props) => {
  return (
    <button className="simpleBtn" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default SimpleBtn;
