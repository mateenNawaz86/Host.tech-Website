import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../Contact-Form/ContactForm";

import "./ContactCard.css";

const ContactCard = () => {
  const contactInfo = [
    {
      infoIcon: "fas fa-phone-alt",
      infoNum: "+92 (345) 2347521",
    },
    {
      infoIcon: "fas fa-envelope",
      infoNum: "contact@yourmail.com",
    },
    {
      infoIcon: "fas fa-map-marker-alt",
      infoNum: "203, Envato Labs, Behind Alis Steet, Australia",
    },
  ];

  return (
    <>
      <div className="contact__card">
        <div className="contact-text__area">
          <h1>Contact Info</h1>
          {contactInfo.map((items, index) => {
            return (
              <div className="contact-text__rows" key={index}>
                <i className={items.infoIcon} />
                <p>{items.infoNum}</p>
              </div>
            );
          })}

          <div className="social__links">
            <Link to="/">
              <i className="fab fa-facebook-square" />
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-youtube-square" />
            </Link>
          </div>
        </div>

        <div className="contact__form">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactCard;
