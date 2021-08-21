import React from "react";
import SubmitBtn from "../../UI/SubmitBtn";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter your Name" autoComplete="off" />
        <input
          type="text"
          placeholder="Enter a valid email address"
          autoComplete="off"
        />

        <textarea cols="30" rows="8" />
        <SubmitBtn type="submit">submit</SubmitBtn>
      </form>
    </>
  );
};

export default ContactForm;
