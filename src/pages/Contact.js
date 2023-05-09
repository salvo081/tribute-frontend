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
    // console.log(formData);
    // send form data to backend or email service
    // reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className="containercnt" onSubmit={handleSubmit}>
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : +49 81 314 928 595</div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="NAME"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="EMAIL"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="CONTACT NO" />
              </div>
              <div className="app-form-group message">
                <input
                  className="app-form-control"
                  placeholder="MESSAGE"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="app-form-group buttons">
                <button className="app-form-button" type="submit">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
