import React from "react";
import GreenBtn from "../UI/GreenBtn";
import WhiteBtn from "../UI/WhiteBtn";

import "./LandingContent.css";

const LandingContent = () => {
  const btnsName = ["Upload For Free", "Watch Video"];
  return (
    <>
      <div className="header__container">
        <div className="text__container">
          <div className="heading">
            <h1>
              One-click
              <br /> solution for
              <br /> your static?
              <br /> website.
            </h1>
          </div>

          <div className="btns">
            <GreenBtn type="submit">
              <i className="fas fa-upload" />
              {btnsName[0]}
            </GreenBtn>
            <WhiteBtn>
              <i className="fab fa-youtube" />
              {btnsName[1]}
            </WhiteBtn>
          </div>
        </div>

        <div className="header__img">
          <img src="../images/landing__page.png" alt="header" />
        </div>
      </div>
    </>
  );
};

export default LandingContent;
