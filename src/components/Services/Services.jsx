import React from "react";
import ServiceCard from "./ServiceCard";

import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services__container">
        <div className="upper__color__div"></div>
        <div className="side__color__div"></div>
        <div className="services__img">
          <img src="../images/second.png" alt="services" />
        </div>
        <div className="card__div">
          <ServiceCard />
        </div>
        <div className="lower__color__div"></div>
      </div>
    </>
  );
};

export default Services;
