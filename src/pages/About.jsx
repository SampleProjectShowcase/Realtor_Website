import './About.css';
import headshotImg from '../assets/realtor_headshot.png';

const About = () => {
  return (
    <div className="page-content about-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="hero-title animate-fade-in-up">About Me</h1>
          <p className="section-subtitle animate-fade-in-up delay-1" style={{color: 'rgba(255,255,255,0.8)'}}>Your Trusted Partner in Luxury Real Estate.</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: 'minmax(300px, 400px) 1fr', gap: '4rem', alignItems: 'flex-start' }}>
          <div className="about-image-wrapper animate-fade-in-up">
             <img src={headshotImg} alt="Realtor portrait" className="about-image" />
             <div className="stats-box glass">
               <div className="stat">
                 <span className="stat-num">15+</span>
                 <span className="stat-label">Years Experience</span>
               </div>
               <div className="stat">
                 <span className="stat-num">$500M+</span>
                 <span className="stat-label">Career Sales</span>
               </div>
             </div>
          </div>
          
          <div className="about-content animate-fade-in-up delay-1">
             <h2 className="section-title">Elevating the Real Estate Experience</h2>
             <p className="text-muted mb-4">
               Welcome. I am dedicated to providing exceptional, personalized service for all of my clients. I take great pride in the relationships I build and always work relentlessly on the client's behalf to help them achieve their real estate goals.
             </p>
             <p className="text-muted mb-4">
               My philosophy is simple: clients come first. I pledge to be in constant communication with my clients, keeping them fully informed throughout the entire buying or selling process. I believe that if you're not left with an amazing experience, I haven't done my job. I don't measure success through achievements or awards, but through the satisfaction of my clients.
             </p>

             <h3 className="subsection-title mt-5">Core Values</h3>
             <ul className="values-list text-muted">
               <li><strong>Integrity:</strong> Honest and transparent communication at all times.</li>
               <li><strong>Excellence:</strong> Delivering the highest standard of service in every transaction.</li>
               <li><strong>Innovation:</strong> Utilizing cutting-edge marketing and technology.</li>
               <li><strong>Discretion:</strong> Protecting the privacy of high-net-worth individuals and public figures.</li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
