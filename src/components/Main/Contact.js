import React, { useState } from "react";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_o5ng1o4";
      const templateId = "template_x1t5nle";
      const userId = "user_yyKL04ExCHqdRWUBh84sA";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .sendForm(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="three">
      <header className="header">
        <h2>Contact Me</h2>
      </header>
      <form id="contact-form">
        <input
          className="input-name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="input-message"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="contact-send" onClick={submit}>
          Send Message
        </button>
        <span className={emailSent ? "visible" : null}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </form>
    </section>
  );
};

export default Contact;
