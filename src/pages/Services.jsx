import './Services.css';
import { FaHome, FaHandshake, FaChartLine, FaKey, FaGlobe, FaCamera } from 'react-icons/fa';

const servicesList = [
  {
    icon: <FaHome size={32} />,
    title: 'Buying a Home',
    desc: 'Whether it is your first luxury home or an addition to your portfolio, we provide access to exclusive off-market listings and expert negotiation to secure your ideal property.'
  },
  {
    icon: <FaHandshake size={32} />,
    title: 'Selling a Property',
    desc: 'We utilize targeted, high-end marketing strategies and a global network to ensure your property reaches the right buyers and achieves the maximum possible return.'
  },
  {
    icon: <FaChartLine size={32} />,
    title: 'Investment Consulting',
    desc: 'Strategic advice for real estate investors. We analyze market trends and identify high-yield opportunities to help you build and manage a profitable portfolio.'
  },
  {
    icon: <FaKey size={32} />,
    title: 'Relocation Services',
    desc: 'Seamless transition services for individuals and corporations. We handle the logistics of finding a new home in a new city so you can focus on what matters.'
  },
  {
    icon: <FaGlobe size={32} />,
    title: 'International Reach',
    desc: 'Tap into our extensive network of global buyers and international real estate professionals for cross-border transactions.'
  },
  {
    icon: <FaCamera size={32} />,
    title: 'Premium Marketing',
    desc: 'Bespoke marketing materials including 4K video tours, drone photography, and placement in luxury publications.'
  }
];

const Services = () => {
  return (
    <div className="page-content services-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="hero-title animate-fade-in-up">Bespoke Services</h1>
          <p className="section-subtitle animate-fade-in-up delay-1" style={{color: 'rgba(255,255,255,0.8)'}}>Tailored real estate solutions for the discerning client.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-3">
            {servicesList.map((service, index) => (
               <div key={index} className={`service-item-card animate-fade-in-up delay-${(index % 3) + 1}`}>
                 <div className="service-icon-wrapper">{service.icon}</div>
                 <h3 className="service-item-title">{service.title}</h3>
                 <p className="text-muted">{service.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
