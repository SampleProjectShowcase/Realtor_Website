import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-3 footer-grid">
        <div className="footer-col brand-col">
          <Link to="/" className="brand footer-brand">
            <span className="brand-text">ELEVATE</span>
            <span className="brand-dot">.</span>
          </Link>
          <p className="footer-desc text-muted">
            Premium real estate services tailored to your unique lifestyle and investment goals. We turn your property dreams into reality.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Contact Details</h4>
          <ul className="footer-contact text-muted">
            <li><strong>Office:</strong> 123 Luxury Ave, Beverly Hills, CA 90210</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Email:</strong> contact@elevaterealty.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Elevate Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
