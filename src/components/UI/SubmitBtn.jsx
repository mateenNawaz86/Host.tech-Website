import React from "react";

import "./SubmitBtn.css";

const SubmitBtn = (props) => {
  return (
    <button className="submitBtn" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default SubmitBtn;
