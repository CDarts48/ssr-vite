import React from 'react';
import './css/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-form">
        <form className="contact-form-content">
          <h3>How Can I Help?</h3>
          <label className="form-field">
            <input type="text" name="name" placeholder="Name" required />
          </label>
          <label className="form-field">
            <input type="email" name="email" placeholder="Email*" required />
          </label>
          <label className="form-field"> 
            <input type="tel" name="phone" placeholder="Phone" />
          </label>
          <label className="form-field">
            <input type="text" name="address" placeholder="Address (Street, City, Zip Code)" />
          </label>
          <label className="form-field">
            Let me know the details of what you are looking for, and we'll contact you with a quote.
            <textarea name="details"></textarea>
          </label>
          <label className="form-field">
            Attach Files
            <input type="file" name="file" />
          </label>
          <button type="submit">Send</button>
          <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </form>
      </div>
      <div className="contact-info">
        <h2>Looking Forward to Hearing From You!</h2>
        <p>Topher's Maintenance and Repair</p>
        <p>Westminister, Colorado, United States</p>
        <p>Chris@tophersmandr.com</p>
      </div>
    </section>
  );
}

export default ContactSection;