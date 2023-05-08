import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // send form data to backend or email service
    // reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className="cntform" onSubmit={handleSubmit}>
      <div>
        <label className="cntlabel" htmlFor="name">
          Name
        </label>
        <input
          className="cntinput"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className="cntlabel" htmlFor="email">
          Email
        </label>
        <input
          className="cntinput"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className="cntlabel" htmlFor="message">
          Message
        </label>
        <textarea
          className="cnttextarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="cntbutton" type="submit">
        Send
      </button>
    </form>
  );
}
