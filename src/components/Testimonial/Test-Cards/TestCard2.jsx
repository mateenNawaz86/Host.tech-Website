import React from "react";
import TestiCard from "../Testi-Cards/TestiCard";

import "../Testimonial.css";

const TestCard2 = () => {
  const testiCardsData = [
    {
      userImg: "../images/user-22.png",
      userComment: `Vitae suscipit tellus mauris a diam maecenas sed enim ut.
      Mauris augue neque gravida in fermentum. Praesent semper
      feugiat nibh sed pulvinar proin.`,
      userName: "Celia Almeda",
      userStatus: "Secretary",
    },
  ];

  return (
    <>
      {testiCardsData.map((items, index) => {
        return (
          <TestiCard key={index}>
            <div className="inner__testi__cards">
              <img src={items.userImg} alt="User-1" />
              <div className="card__test">
                <i className="fas fa-quote-left" />
                <p>{items.userComment}</p>
                <i className="fas fa-quote-right" />
              </div>

              <h1 className="userName">{items.userName}</h1>
              <p className="userStatus">{items.userStatus}</p>
            </div>
          </TestiCard>
        );
      })}
    </>
  );
};

export default TestCard2;
