import React from "react";
import { useState } from "react";
import "./Contactmain.css";

const Contactmain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    setStatus("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <div className="Container-Contact container">
      <div className="Div-Contact">
        <h1 className="h1-contact">Get in Touch</h1>
        <p className="p1-contact">
          We're here to help you turn your construction dreams into reality.
          Reach out to us through any of the channels below.
        </p>

        <section className="Section-div">
          <div>
            <i className="fa-solid fa-location-dot icon-space"></i>
          </div>
          <div>
            <h4>Our Location</h4>{" "}
            <p className="p2-contact">Jodhpur,Rajasthan, India</p>
          </div>
        </section>
        <section className="Section-div">
          <div>
            <i className="fa-solid fa-phone icon-space"></i>
          </div>
          <div>
            <h4>Phone Number</h4> <p className="p2-contact">+91 8003431008</p>
          </div>
        </section>
        <section className="Section-div">
          <div>
            <i className="fa-solid fa-envelope icon-space"></i>
          </div>
          <div>
            <h4>Email Address</h4>{" "}
            <p className="p2-contact">info@raiconstruction.com</p>
          </div>
        </section>
        <section className="Section-div">
          <div>
            <i className="fa-solid fa-clock icon-space"></i>
          </div>
          <div>
            <h4>Business Hours</h4>{" "}
            <p className="p2-contact"> Monday - Saturday: 9:00 AM - 6:00 PM </p>
            <p className="p2-contact">Sunday: Closed</p>
          </div>
        </section>
        <div className="map Sections-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3577.7865538201913!2d72.997609!3d26.268590000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE2JzA2LjkiTiA3MsKwNTknNTEuNCJF!5e0!3m2!1sen!2sin!4v1764417391438!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <i className="fa-solid fa-location-dot Icon-frame"></i>
          </div>
          <p className="p3-contact">Interactive map</p>
          <p className="p4-contact">Visit our office location</p>
        </div>
        </div>
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us about your project requirements.."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        
      </div>
    </div>
  );
};

export default Contactmain;
