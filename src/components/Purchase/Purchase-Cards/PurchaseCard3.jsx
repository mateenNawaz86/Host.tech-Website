import React from "react";
import WhiteCard from "../White-Card/WhiteCard";
import GreenBtn from "../../UI/GreenBtn";

import "./PurchaseCard1.css";

const PurchaseCard3 = () => {
  const cardsData = [
    {
      cardPlan: "Monthly Plan",
      cardTitle: "$12",
      cardBtn: "Proceed Monthly",
      cardStatus: `Billed $12 per website monthly.
      Total is $144 per year.`,
    },
  ];

  return (
    <>
      <div className="green-card__container">
        <WhiteCard>
          {cardsData.map((items, index) => {
            return (
              <div className="inner-green__card" key={index}>
                <p className="plan2_status">{items.cardPlan}</p>
                <h1 className="second-card__title">
                  {items.cardTitle} <span>/month</span>
                </h1>
                <GreenBtn type="submit">{items.cardBtn}</GreenBtn>
                <p className="second-status__text">{items.cardStatus}</p>
              </div>
            );
          })}
        </WhiteCard>
      </div>
    </>
  );
};

export default PurchaseCard3;
