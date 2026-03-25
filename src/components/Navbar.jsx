import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'glass scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-text">ELEVATE</span>
          <span className="brand-dot">.</span>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/properties" className={location.pathname === '/properties' ? 'active' : ''}>Properties</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className="btn btn-primary nav-cta">Let's Talk</Link>
        </nav>

        <button className={`mobile-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
