import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <div className="page-content contact-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="hero-title animate-fade-in-up">Let's Connect</h1>
          <p className="section-subtitle animate-fade-in-up delay-1" style={{color: 'rgba(255,255,255,0.8)'}}>Take the first step toward your real estate goals.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-wrapper glass animate-fade-in-up delay-2">
            <div className="contact-info-panel">
              <h2 className="panel-title">Contact Information</h2>
              <p className="panel-desc">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon"><FaPhoneAlt /></span>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><FaEnvelope /></span>
                  <div>
                    <h4>Email</h4>
                    <p>contact@elevaterealty.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"><FaMapMarkerAlt /></span>
                  <div>
                    <h4>Office</h4>
                    <p>123 Luxury Ave, Suite 100<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="contact-deco-circle"></div>
            </div>

            <div className="contact-form-panel">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-group grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                <div className="input-group" style={{ marginBottom: '2rem' }}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
