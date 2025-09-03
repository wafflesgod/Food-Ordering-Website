import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your message, ${formData.name}! We'll get back to you soon.`
    );
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Adress</h3>
              <p>
                123, abc, 123, 345
                <br />
                123,123
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>
                012345678
                <br />
                0987654321
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>
                query@yumyum.com
                <br />
                contact@yumyum.com
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>Hours</h3>
              <p>
                Mon-Fri: 10 AM - 10 PM <br />
                Free Delivery
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
