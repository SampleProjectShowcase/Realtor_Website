import { FaArrowRight, FaSearch } from 'react-icons/fa';
import interiorImg from '../assets/property_interior.png';
import heroImg from '../assets/hero_mansion.png';
import './Properties.css';

const properties = [
  { id: 1, title: 'Modern Architectural Masterpiece', location: 'Beverly Hills, CA', price: '$4,500,000', beds: 4, baths: 5, sqft: 6200, img: interiorImg },
  { id: 2, title: 'Oceanfront Villa', location: 'Malibu, CA', price: '$8,900,000', beds: 6, baths: 7, sqft: 8500, img: heroImg },
  { id: 3, title: 'Penthouse with City Views', location: 'Downtown LA, CA', price: '$3,200,000', beds: 3, baths: 3, sqft: 3100, img: interiorImg },
  { id: 4, title: 'Historic Country Estate', location: 'Montecito, CA', price: '$12,500,000', beds: 8, baths: 10, sqft: 12000, img: heroImg },
  { id: 5, title: 'Contemporary Skyline Condo', location: 'West Hollywood, CA', price: '$1,850,000', beds: 2, baths: 2, sqft: 1800, img: interiorImg },
  { id: 6, title: 'Secluded Mountain Retreat', location: 'Aspen, CO', price: '$6,750,000', beds: 5, baths: 6, sqft: 5400, img: heroImg },
];

const Properties = () => {
  return (
    <div className="page-content properties-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="hero-title animate-fade-in-up">Exclusive Properties</h1>
          <p className="section-subtitle animate-fade-in-up delay-1" style={{color: 'rgba(255,255,255,0.8)'}}>Discover our curated collection of luxury real estate.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          {/* Mock Search Bar */}
          <div className="search-bar glass animate-fade-in-up delay-2">
            <input type="text" placeholder="Search by location, neighborhood, or ZIP" className="search-input" />
            <select className="search-select">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="estate">Estate</option>
            </select>
            <select className="search-select">
              <option value="">Price Range</option>
              <option value="1-3">$1M - $3M</option>
              <option value="3-5">$3M - $5M</option>
              <option value="5+">$5M+</option>
            </select>
            <button className="btn btn-primary search-btn"><FaSearch /> Search</button>
          </div>

          <div className="grid grid-3">
            {properties.map((prop, index) => (
              <div key={prop.id} className={`property-card animate-fade-in-up delay-${(index % 3) + 1}`}>
                <div className="property-img-wrapper">
                  <img src={prop.img} alt={prop.title} className="property-img" />
                  <div className="property-price">{prop.price}</div>
                </div>
                <div className="property-info">
                  <h3 className="property-title">{prop.title}</h3>
                  <p className="property-location text-muted">{prop.location}</p>
                  <div className="property-features">
                    <span>{prop.beds} Bed</span> • <span>{prop.baths} Bath</span> • <span>{prop.sqft.toLocaleString()} sqft</span>
                  </div>
                  <a href="#" className="property-link" onClick={e => e.preventDefault()}>
                    View Details <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
