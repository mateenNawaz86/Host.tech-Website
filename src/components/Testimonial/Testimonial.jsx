import React from "react";
import TestCard1 from "./Test-Cards/TestCard1";
import TestCard2 from "./Test-Cards/TestCard2";
import TestCard3 from "./Test-Cards/TestCard3";
import TestCard4 from "./Test-Cards/TestCard4";

import "./Testimonial.css";

const Testimonial = () => {
  const testData = [
    "TESTIMONIALS",
    "What Clients Say",
    `We place huge value on strong relationships and have seen the
  benefit they bring to our business. Customer feedback is vital in
  helping us to get it right.`,
  ];
  return (
    <>
      <section className="testimonial__container">
        <div className="inner__testi-container">
          <div className="upper__area">
            <p>{testData[0]}</p>

            <h1>{testData[1]}</h1>
            <p className="up__para">{testData[2]}</p>
          </div>

          <div className="testimonial__cards">
            <TestCard1 />
            <TestCard2 />
            <TestCard3 />
            <TestCard4 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
