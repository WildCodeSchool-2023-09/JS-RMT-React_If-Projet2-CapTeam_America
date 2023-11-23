import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";
import InputForm from "./InputForm";

function ContactForm() {
  const [formValue, setFormValue] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showToastMessage = () => {
    toast.success("Your message has been send !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Error, try again !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const emailjsServiceId = VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = VITE_EMAILJS_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, e.target, emailjsPublicKey)

      .then(
        (result) => {
          showToastMessage(result);
        },
        (error) => {
          showToastErrorMessage(error);
        }
      );
  };

  return (
    <div className="contactCard">
      <h1>Leave us a message</h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <div>
          <InputForm
            label="Lastname"
            name="lastname"
            type="text"
            value={formValue.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputForm
            label="Firstname"
            name="firstname"
            type="text"
            value={formValue.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <InputForm
            label="Your Email"
            name="email"
            type="text"
            value={formValue.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="messageForm">
          <label>
            <span>Your Message</span>
            <textarea
              className="textArea"
              name="message"
              value={formValue.message}
              onChange={handleChange}
              id="description"
              maxLength={250}
              required
            />
          </label>
          <div className="submit">
            <input type="submit" className="submitButton" value="Submit" />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
