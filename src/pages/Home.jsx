import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_mansion.png';
import headshotImg from '../assets/realtor_headshot.png';
import interiorImg from '../assets/property_interior.png';
import './Home.css';
import { FaArrowRight, FaHome, FaHandshake, FaChartLine } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-text animate-fade-in-up">
            <span className="hero-badge">Luxury Real Estate</span>
            <h1 className="hero-title">Discover Your<br/>Dream Home.</h1>
            <p className="hero-subtitle">Elevating the standard of luxury living with unparalleled service and exclusive listings in the world's most desired locations.</p>
            <div className="hero-ctas">
              <Link to="/properties" className="btn btn-primary">View Properties</Link>
              <Link to="/contact" className="btn btn-outline" style={{color: '#fff', borderColor: '#fff'}}>Contact Me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Summary */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center animate-fade-in-up">
            <h2 className="section-title">Exclusive Listings</h2>
            <p className="section-subtitle">Curated properties that define luxury and sophistication.</p>
          </div>
          
          <div className="grid grid-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className={`property-card animate-fade-in-up delay-${item}`}>
                <div className="property-img-wrapper">
                  <img src={interiorImg} alt="Luxury property" className="property-img" />
                  <div className="property-price">$4,500,000</div>
                </div>
                <div className="property-info">
                  <h3 className="property-title">Modern Architectural Masterpiece</h3>
                  <p className="property-location text-muted">Beverly Hills, CA</p>
                  <div className="property-features">
                    <span>4 Bed</span> • <span>5 Bath</span> • <span>6,200 sqft</span>
                  </div>
                  <Link to="/properties" className="property-link">
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}>
             <Link to="/properties" className="btn btn-primary">Explore All Properties</Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="service-card animate-fade-in-up delay-1">
              <div className="service-icon"><FaHome size={32} /></div>
              <h3 className="service-title">Buying</h3>
              <p className="text-muted">Find your perfect home with our expert guidance and exclusive market access.</p>
            </div>
            <div className="service-card animate-fade-in-up delay-2">
              <div className="service-icon"><FaHandshake size={32} /></div>
              <h3 className="service-title">Selling</h3>
              <p className="text-muted">Maximize your property's value with our innovative marketing strategies.</p>
            </div>
            <div className="service-card animate-fade-in-up delay-3">
              <div className="service-icon"><FaChartLine size={32} /></div>
              <h3 className="service-title">Investing</h3>
              <p className="text-muted">Build wealth through strategic real estate investments and portfolio management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Snippet */}
      <section className="section section-bio glass-bg">
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
          <div className="bio-image-container animate-fade-in-up">
            <img src={headshotImg} alt="Realtor" className="bio-image" />
            <div className="experience-badge">
              <span className="exp-years">15+</span>
              <span className="exp-text">Years of<br/>Experience</span>
            </div>
          </div>
          <div className="bio-content animate-fade-in-up delay-1">
            <h2 className="section-title">Meet Your Executive Realtor</h2>
            <p className="bio-text text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              With over a decade of experience in the luxury real estate market, I provide an unparalleled level of service, market knowledge, and negotiation expertise. My commitment is to make your real estate journey seamless and successful.
            </p>
            <p className="bio-text text-muted" style={{ marginBottom: '2.5rem' }}>
              Whether you are looking to acquire a statement home or sell a prized asset, you need a partner who understands the nuances of the high-end market. Let's elevate your real estate experience.
            </p>
            <div className="bio-actions">
              <Link to="/about" className="btn btn-primary">Read Full Bio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
