import React, { useState } from 'react';
import './css/ContactSection.css'
import { sendEmail } from "/Users/corey/Desktop/ssr-vite/utils/ContactSection.jsx";

const ContactSection = () => {
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (honeypot) {
      // This is likely a bot submission because the honeypot field has a value
      return;
    }
  
    // Get form data
    const formData = new FormData(event.target);
  
    try {
      // Send email
      await sendEmail(formData);
      console.log('Email sent successfully');
    } catch (error) {
      // There was an error sending the email
      console.error('Error sending email', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-form">
        <form className="contact-form-content" onSubmit={handleSubmit}>
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
                      <input type="file" name="files" multiple />.
                  </label>

          {/* Honeypot field */}
          <div style={{ display: "none" }}>
            <label>Don't fill this out if you're human: 
              <input type="text" name="bot-field" onChange={(e) => setHoneypot(e.target.value)} />
            </label>
          </div>

          <button type="submit">Send</button>
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