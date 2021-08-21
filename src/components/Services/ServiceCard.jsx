import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import GreenBtn from "../UI/GreenBtn";

import "./ServiceCard.css";

const ServiceCard = () => {
  const serviceCardData = [
    "Create Amazing Website",
    `Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis
    tincidunt id aliquet risus feugiat in. Auctor augue mauris augue neque
    gravida in fermentum et. Feugiat in fermentum urna.`,
    "learn morelearn more",
  ];
  return (
    <Card>
      <div className="amazing__card__container">
        <Title>{serviceCardData[0]}</Title>
        <p>{serviceCardData[1]}</p>
        <GreenBtn>{serviceCardData[2]}</GreenBtn>
      </div>
    </Card>
  );
};

export default ServiceCard;
