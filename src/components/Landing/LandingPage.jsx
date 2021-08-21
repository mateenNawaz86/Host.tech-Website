import React from "react";
import Navbar from "../Navbar/Navbar";
import LandingContent from "./LandingContent";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <LandingContent />
      </div>
    </>
  );
};

export default LandingPage;
