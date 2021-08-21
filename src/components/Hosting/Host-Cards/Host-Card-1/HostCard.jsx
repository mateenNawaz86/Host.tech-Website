import React from "react";
import Card from "../../../UI/Card";
import RoundGreenBtn from "../../../UI/RoundGreenBtn";
import SimpleBtn from "../../../UI/SimpleBtn";
import Title from "../../../UI/Title";

import "./HostCard.css";

const HostCard = () => {
  const cardsData = [
    {
      roundBtnName: "free",
      cardIcon: "fas fa-lock",
      cardTitle: "SSL Certificate",
      cardContent: `Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur`,
      simpleBtnName: "more",
    },
  ];

  return (
    <Card>
      {cardsData.map((items, index) => {
        return (
          <div className="main__div" key={index}>
            <div className="card__container">
              <div className="inner__card">
                <i className={items.cardIcon} />
                <RoundGreenBtn type="submit">
                  {items.roundBtnName}
                </RoundGreenBtn>
                <Title>{items.cardTitle}</Title>
                <p>{items.cardContent}</p>
                <SimpleBtn type="submit">{items.simpleBtnName}</SimpleBtn>
              </div>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default HostCard;
