import React from "react";
import ContactCard from "./Contact-Card/ContactCard";

import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <>
      <div className="contact__container">
        <div className="inner__contact">
          <div className="color__container">
            <div className="contact-card__container">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
