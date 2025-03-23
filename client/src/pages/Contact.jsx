import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have any questions or need support? Feel free to reach out to us.</p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@screwguard.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Industrial Road, Hyderabad, India</p>
      </div>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message</label>
        <textarea placeholder="Type your message here..." rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
