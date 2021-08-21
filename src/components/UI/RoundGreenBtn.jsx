import React from "react";

import "./RoundGreenBtn.css";

const RoundGreenBtn = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className="roundGrenBtn">
      {props.children}
    </button>
  );
};

export default RoundGreenBtn;
