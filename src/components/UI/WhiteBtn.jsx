import React from "react";

import "./WhiteBtn.css";

const WhiteBtn = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className="whiteBtn">
      {props.children}
    </button>
  );
};

export default WhiteBtn;
