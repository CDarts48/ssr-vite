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
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email*
            <input type="email" name="email" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" />
          </label>
          <label>
            Address (Street, City, Zip Code)
            <input type="text" name="address" />
          </label>
          <label>
            Let me know the details of what you are looking for, and we'll contact you with a quote.
            <textarea name="details"></textarea>
          </label>
          <label>
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