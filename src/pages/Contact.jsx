import React, { useState } from "react";
import "../styles/style.css";

function Contact() {
  // states for input values, errors, and submission message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  // updates name and clears related errors
  function handleNameChange(e) {
    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  }

  // updates email
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  }

  // updates message
  function handleMessageChange(e) {
    setMessage(e.target.value);
    setErrors({ ...errors, message: "" });
  }

  // checks if the email is valid
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // validates and handles form submission
  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setSubmissionMessage("Your message has been successfully submitted!");
    }
  }

  // JSX for the contact form
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            className="contact-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="contact-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
            className="contact-input"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        {Object.keys(errors).length > 0 && (
          <p className="error">Please complete all required fields.</p>
        )}
        {submissionMessage && <p>{submissionMessage}</p>}
        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
