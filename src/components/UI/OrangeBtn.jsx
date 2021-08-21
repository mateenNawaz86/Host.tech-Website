import React from "react";

import "./OrangeBtn.css";

const OrangeBtn = (props) => {
  return (
    <button className="orangeBtn" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default OrangeBtn;
