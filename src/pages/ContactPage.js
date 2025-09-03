import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="container">
      <section className="contact-section">
        <div className="contact-grid">
          
          <div className="contact-left-column">
            <div className="contact-header animated-item" style={{ animationDelay: '0.2s' }}>
              <h1>Get in Touch</h1>
              <p>
                At <strong>AI Vault</strong>, we believe every conversation sparks new possibilities. Whether you prefer a face-to-face meeting at our office, a quick call, or a message over email, our team is always ready to connect with you.
              </p>
              <p>
                No matter the channel, you can count on us to listen, guide, and work with you towards smarter, secure, and future-ready solutions.
              </p>
            </div>
            
            <div className="contact-details animated-item" style={{ animationDelay: '0.4s' }}>
              <h3>Reach out today—we're just a hello away!</h3>
              <div className="detail-item">
                <span className="detail-label">Reach</span>
                <a href="mailto:hello@aivault.in">hello@aivault.in</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Connect</span>
                <a href="tel:+917351234501">+91-735 12345 01</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Address</span>
                <p>
                  AI Vault Technologies Private Limited<br />
                  Block C, Bhutani Cyber Park<br />
                  Sector 62, Noida
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-map animated-item" style={{ animationDelay: '0.6s' }}>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="firstName">Your First Name*</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email Address*</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message*</label>
                <textarea id="message" name="message" rows="5" placeholder="Type your message here" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Your Inquiry</button>
            </form>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.518837385904!2d77.362799375129!3d28.61420158448831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544da53e931%3A0x33b216163435154!2sBhutani%20Cyberthum!5e0!3m2!1sen!2sin!4v1725273391219!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AI Vault Office Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;