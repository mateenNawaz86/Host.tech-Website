import React from "react";
import GreenCard from "../Green-Card/GreenCard";
import WhiteBtn from "../../UI/WhiteBtn";

import "./PurchaseCard1.css";

const PurchaseCard1 = () => {
  const cardsData = [
    {
      cardPlan: "starter plan",
      cardTitle: "free",
      cardBtn: "Upload For Free",
      cardStatus: "Free static.app domain included. No credit card",
    },
  ];

  return (
    <>
      <div className="green-card__container">
        <GreenCard>
          {cardsData.map((items, index) => {
            return (
              <div className="inner-green__card" key={index}>
                <p className="plan_status">{items.cardPlan}</p>
                <h1>{items.cardTitle}</h1>
                <WhiteBtn type="submit">
                  {items.cardBtn}
                </WhiteBtn>
                <p className="status__text">{items.cardStatus}</p>
              </div>
            );
          })}
        </GreenCard>
      </div>
    </>
  );
};

export default PurchaseCard1;
