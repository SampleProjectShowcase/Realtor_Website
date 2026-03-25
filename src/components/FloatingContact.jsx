import { FaWhatsapp, FaComments } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-container">
      <div className={`floating-options ${isOpen ? 'active' : ''}`}>
        <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="float-btn float-wa" aria-label="WhatsApp">
          <FaWhatsapp size={24} />
          <span className="tooltip">WhatsApp</span>
        </a>
        <a href="mailto:contact@elevaterealty.com" className="float-btn float-email" aria-label="Email">
          <MdEmail size={24} />
          <span className="tooltip">Email</span>
        </a>
      </div>
      <button className="float-btn float-main" onClick={() => setIsOpen(!isOpen)} aria-label="Chat options">
        <FaComments size={28} />
      </button>
    </div>
  );
};

export default FloatingContact;
