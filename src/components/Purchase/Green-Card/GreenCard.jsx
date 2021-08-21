import React from "react";

import "./GreenCard.css";

const CardPurchase = (props) => {
  return <div className="green_card">{props.children}</div>;
};

export default CardPurchase;
