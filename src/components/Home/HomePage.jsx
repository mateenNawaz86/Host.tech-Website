import React from "react";
import LandingPage from "../Landing/LandingPage";
import HostingPage from "../Hosting/Host-Page/HostingPage";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import PurchasePage from "../Purchase/PurchasePage";
import ContactUsPage from "../Contact-Us/ContactUsPage";

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <HostingPage />
      <Services />
      <Testimonial />
      <PurchasePage />
      <ContactUsPage />
    </>
  );
};

export default HomePage;
