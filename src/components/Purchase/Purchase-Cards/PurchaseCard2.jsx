import React from "react";
import WhiteCard from "../White-Card/WhiteCard";
import GreenBtn from "../../UI/GreenBtn";
import OrangeBtn from "../../UI/OrangeBtn";

import "./PurchaseCard1.css";

const PurchaseCard2 = () => {
  const cardsData = [
    {
      cardPlan: "Yearly Plan",
      cardTitle: "$9",
      cardBtn: "Proceed Anually",
      cardStatus: `Billed $108 per website annually.
      $36 cheaper to this way.`,
    },
  ];

  return (
    <>
      <div className="green-card__container">
        <WhiteCard>
          {cardsData.map((items, index) => {
            return (
              <div className="inner-green__card" key={index}>
                <div className="up__text">
                  <p className="plan2_status">{items.cardPlan}</p>
                  <OrangeBtn type="submit">Save 25%</OrangeBtn>
                </div>
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

export default PurchaseCard2;
