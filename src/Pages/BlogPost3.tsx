import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./BlogPost3.css";

const BlogPost3 = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="blog-post-hero">
        <img src="/blog/chambery.avif" alt="The Chambéry" className="hero-bg" />
        
        <div className="hero-overlay">
          <Link to="/blog" className="back-to-journal">← BACK TO Blog</Link>
          
        
          
          <h1 className="blog-post-title">
            The <span className="gold">Chambéry</span>  redefining luxury living in Abuja.
          </h1>
          
          <p className="hero-subtitle">
            A new standard of sophisticated urban living in Dawaki. Where architecture meets lifestyle, and every detail is drawn around elegance, comfort, security and long-term value.
          </p>
          
          <div className="post-meta-bottom">
            
            <span>DAWAKI, ABUJA</span>
            <span>BY ARCH STERIX GROUP</span>
            <span>JULY 11, 2026</span>
          </div>
        </div>
      </section>

      {/* WHITE CONTENT SECTION - First part */}
      <section className="blog-content">
        <div className="content-container">
          <div className="opening-statement">
            Imagine waking up every morning in a home designed around elegance, comfort, security and modern luxury right in the heart of Abuja.
          </div>
          
          <div className="post-body">
            <p>The Abuja real estate market is evolving rapidly. Today’s homeowners and investors are no longer searching for ordinary properties they are searching for premium locations, smart investment opportunities, lifestyle-focused communities and long-term value appreciation.</p>
            
            <p>The Chambéry was designed to deliver all of these and more. Located in the fast-growing district of Dawaki, it combines timeless architecture with modern functionality to create a truly elevated living experience for individuals and families who want more than just a house.</p>
          </div>
        </div>
      </section>

            {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>8</h3>
            <p>Limited luxury residences in Dawaki</p>
          </div>
          <div className="stat-card">
            <h3>240m²</h3>
            <p>Gross floor area · Terrace Triplex</p>
          </div>
          <div className="stat-card">
            <h3>170m²</h3>
            <p>Total apartment area</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Solar-powered energy system</p>
          </div>
        </div>
      </section>
                  {/* FOUR PILLARS SECTION */}
      <section className="pillars-section">
        <div className="pillars-container">
          {/* Image Left */}
          <div className="pillars-image">
            <img src="/blog/chambery2.jpeg" alt="The Chambéry" />
          </div>

          {/* Content Right */}
          <div className="pillars-content">
            <p className="section-label">DESIGNED FOR MODERN LUXURY</p>
            <h2>Four pillars behind every <span className="gold">Chambéry</span> residence.</h2>

            {/* Pillar 01 */}
            <div className="pillar-item">
              <div className="pillar-number">01</div>
              <div>
                <p className="pillar-category">ARCHITECTURE</p>
                <h3>Contemporary Exterior Design</h3>
                <p>Every façade at The Chambéry is composed as carefully as a portrait proportioned volumes, honest materials, floor to ceiling openings and a rhythm of light and shadow that changes through the day.
                     The result is an architecture that feels neither trend driven nor derivative; it is a building that will look considered in five years, and quietly modern in twenty five. Clean architectural lines, premium finishes, expansive glazing and a bold, timeless visual identity.</p>
              </div>
            </div>

           
          </div>
        </div>
        <div className="pillars-container">
          {/* Image Left */}
          <div className="pillars-image">
            <img src="/blog/chambery3.jpeg" alt="The Chambéry" />
          </div>

          {/* Content Right */}
          <div className="pillars-content">
            <p className="section-label">INTERIORS</p>
            

            {/* Pillar 01 */}
            <div className="pillar-item">
              <div className="pillar-number">02</div>
              <div>
               
                <h3>Spacious Interior Layouts</h3>
                <p>Open plan living designed for natural light, seamless flow, and the flexibility real families demand.

                 Interiors are drawn around how people actually live cooking that opens into dining, living rooms that open onto private balconies, bedrooms sized for a real wardrobe and a real reading corner. Ceiling heights are generous, sight-lines are long, and cross-ventilation is engineered into every plan so that the home breathes even before the air-conditioning is asked to.
                     </p>
              </div>
            </div>

            
          </div>
          
        </div>
        <div className="pillars-container">
          {/* Image Left */}
          <div className="pillars-image">
            <img src="/blog/chambery4.jpeg" alt="The Chambéry" />
          </div>

          {/* Content Right */}
          <div className="pillars-content">
             <p className="section-label">SMART LIVING</p>
           
           

            {/* Pillar 01 */}
            <div className="pillar-item">
              <div className="pillar-number">03</div>
              <div>
                
                <h3>Integrated Smart Home Technology</h3>
                <p>
                     Automated lighting, climate, security and access orchestrated through a single, discreet interface.

Smart home hubs coordinate lighting, air conditioning and appliance scheduling. Advanced CCTV surveillance, smart gate access and a central estate management app place control of the community in every resident's hand. Technology at The Chambéry is designed to disappear into the experience of the home  never to dominate it.</p>
              </div>
            </div>

            {/* Add Pillar 02, 03, 04 similarly when you send the next designs */}
          </div>
        </div>
        <div className="pillars-container">
          {/* Image Left */}
          <div className="pillars-image">
            <img src="/blog/chambery5.jpeg" alt="The Chambéry" />
          </div>

          {/* Content Right */}
          <div className="pillars-content">
            
          

            {/* Pillar 01 */}
            <div className="pillar-item">
              <div className="pillar-number">04</div>
              <div>
                <p className="pillar-category">LOCATION</p>
                <h3>The Dawaki Advantage</h3>
                <p>One of Abuja's fastest appreciating residential corridors  connected, growing, and quietly prestigious.

Dawaki has emerged as one of the capital's most attractive residential districts thanks to expanding road infrastructure, proximity to key commercial nodes, and an unmistakable upward pressure on land values. For homeowners this means daily convenience. For investors it means the kind of long-term appreciation curve Abuja rewards patient capital with.
                     </p>
              </div>
            </div>

            {/* Add Pillar 02, 03, 04 similarly when you send the next designs */}
          </div>
        </div>
      </section>
            
      <section className="closing-banner">
        <div className="closing-content">
          <div className="closing-label">THE CHAMBÉRY STANDARD</div>
          <h2 className="closing-quote">
            We build homes that perform  <span className="gold">in comfort, cost, structure, and everyday living.</span>
          </h2>
        </div>
      </section>
                <div className="highlights-grid">
            <div className="highlight-card">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#c9a646" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.34a4 4 0 0 1 0 7.32"/></svg>
              <h3>Prime Location</h3>
              <p>Strategically positioned in one of Abuja's most sought-after neighborhoods, offering exceptional proximity to business hubs, cultural institutions, and world-class dining.</p>
            </div>
            
            <div className="highlight-card">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#c9a646" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <h3>Architectural Excellence</h3>
              <p>Designed by internationally acclaimed architects, featuring signature geometric forms, flowing spaces, and an emphasis on natural light and ventilation.</p>
            </div>
            
            <div className="highlight-card">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#c9a646" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <h3>Smart Systems</h3>
              <p>Integrated IoT technology for climate control, security, and energy management. Residents enjoy unprecedented control and efficiency at the touch of a button.</p>
            </div>
            
            <div className="highlight-card">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#c9a646" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <h3>Sustainable Design</h3>
              <p>Solar integration, rainwater harvesting, and green spaces throughout. Chambéry achieves superior energy efficiency without compromising on luxury.</p>
            </div>
          </div>
            {/* CURRENT PHASE PRICING / MILESTONE SECTION */}
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <p className="section-label">FOUNDATION STAGE COMPLETED • CURRENT PHASE PRICING CONCLUDES WITH THIS MILESTONE</p>
            <h2>Structured, transparent, <span className="gold">milestone-based.</span></h2>
          </div>

          <div className="pricing-grid">
            {/* 2-Bedroom */}
            <div className="price-card">
              <h3>2-Bedroom Apartment</h3>
              <p className="unit-detail">2.5 BATH • FULLY FINISHED</p>
              <div className="price">₦80,000,000</div>
            </div>

            {/* 4-Bedroom Terrace Triplex */}
            <div className="price-card">
              <h3>4-Bedroom + BQ Terrace Triplex</h3>
              <p className="unit-detail">4.5 BATH • 240m² GFA</p>
              <div className="price">₦160,000,000</div>
            </div>
          </div>

          <div className="pricing-note">
            <ul>
              <li>10% discount for full payment</li>
              <li>Installment: 50% down, balance spread across 8 months</li>
              <li>Structured milestone-based ownership options available</li>
            </ul>
          </div>
        </div>
      </section>
            {/* FINAL CTA SECTION */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <p className="cta-label">BOOK A PRIVATE INSPECTION</p>
          <h2>Experience The <span className="gold">Chambéry</span> in person.</h2>
          <p className="cta-text">
            Schedule a private site visit to experience the architecture, the location and the lifestyle firsthand. Our sales team will walk you through floor plans, finishes, ownership options and the long-term investment case.
          </p>

          <div className="cta-buttons">
            <Link to="/contact" className="schedule-btn">SCHEDULE A SITE VISIT →</Link>
            <a href="tel:08098951904" className="phone-btn">☎ 080 9895 1904</a>
          </div>

          <div className="cta-contact">
            <span> DAWAKI, ABUJA</span>
            <span>✉ INFO@ARCHSTERIXGROUP.COM</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost3;