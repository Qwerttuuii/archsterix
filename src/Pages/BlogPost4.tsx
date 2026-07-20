import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./BlogPost4.css";

const BlogPost4 = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="blog-post-hero">
        <img src="/blog/blog4hero.avif" alt="Modern Luxury Homes" className="hero-bg" />
        
        <div className="hero-overlay">
          <Link to="/blog" className="back-to-journal">← BACK TO BLOG</Link>
          

          
          <h1 className="blog-post-title">
            Modern <span className="gold">luxury homes</span> Elements that make them extraordinary.
          </h1>
          
          <p className="hero-subtitle">
            Luxury today is no longer measured in square metres or the price of a finish. It is measured in comfort, technology, experience and the discipline of timeless design. Here is what defines the homes that stand apart.
          </p>
          
          <div className="post-meta-bottom">
            
            <span>BY THE ARCH-STERIX GROUP</span>
            <span>JULY 19, 2026</span>
          </div>
        </div>
      </section>

            {/* WHITE CONTENT SECTION */}
      <section className="blog-content">
        <div className="content-container">
          <div className="opening-statement">
            Luxury is not a price tag. It is exceptional design, cutting-edge technology, and the quiet, daily experience of living inside a space that is entirely considered.
          </div>
          
          <div className="post-body">
            <p>Modern luxury homes are redefining what it means to live exceptionally. From breathtaking architecture to seamless smart technology integration, these homes are no longer simply large spaces they are carefully curated environments designed to elevate lifestyle, convenience, wellness and prestige.</p>
            
            <p>At Arch Sterix Group, we believe luxury architecture should combine aesthetics, innovation and functionality in a single, disciplined gesture. What follows are the eight defining elements we return to on every project that aspires to a higher standard.</p>
          </div>
        </div>
      </section>
            {/* THE ELEMENTS SECTION */}
      <section className="elements-section">
        <div className="elements-container">
          <p className="section-label">THE ELEMENTS</p>
          <h2>Five ideas that separate the extraordinary from the merely expensive.</h2>

          {/* Element 01 */}
      
        
           
           <div className="element-item">
            <div className="element-left">
              <div className="element-number">01</div>
              <p className="element-category">THE KITCHEN</p>
              <h3>Sophisticated gourmet kitchens.</h3>
              <p>The kitchen has evolved from a functional cooking space into the centrepiece of modern luxury living — a stage for entertaining, connection and daily ritual.</p>
              <div className="element-tags">
                <span>CUSTOM CABINETRY</span>
                <span>STATEMENT PENDANTS</span>
                <span>STONE ISLANDS</span>
                <span>SMART APPLIANCES</span>
              </div>
            </div>
            <div className="element-image">
              <img src="/blog/kitchencounter.avif" alt="Sophisticated Gourmet Kitchen" />
            </div>
          </div>
           <div className="element-item">
            <div className="element-left">
              <div className="element-number">02</div>
              <p className="element-category">Indoor & Outdoor</p>
              <h3>Seamless indoor outdoor living.</h3>
              <p>One of the most desirable features in luxury homes today is the fluid transition between architecture and landscape a home that breathes with its site.</p>
              <p>Expansive sliding doors. Outdoor kitchens and dining areas. Infinity pools. Fire pits and outdoor lounges. Landscaped gardens. Each element is designed to create a sense of continuity between the interior and exterior, allowing residents to enjoy the beauty of nature without sacrificing comfort or style.</p>
              <div className="element-tags">
                <span>CUSTOM CABINETRY</span>
                <span>STATEMENT PENDANTS</span>
                <span>STONE ISLANDS</span>
                <span>SMART APPLIANCES</span>
              </div>
            </div>
            <div className="element-image">
              <img src="/blog/outdoorliving.avif" alt="Sophisticated Gourmet Kitchen" />
            </div>
          </div>
           <div className="element-item">
            <div className="element-left">
              <div className="element-number">03</div>
              <p className="element-category"> Wellness</p>
              <h3>Spa inspired bathrooms..</h3>
              <p>Luxury bathrooms are no longer utility spaces. They are personal wellness retreats  architecture in service of restoration.</p>
              <p>Freestanding tubs. Rainfall showers. Heated flooring. Steam rooms. Custom vanities. Each element is designed to create a sense of serenity and indulgence, allowing residents to escape the stresses of daily life and immerse themselves in a spa-like experience.</p>
              <div className="element-tags">
                <span>Freestanding Tubs</span>
                <span>Rainfall Showers</span>
                <span>Heated Flooring</span>
                <span>Steam rooms</span>
              </div>
            </div>
            <div className="element-image">
              <img src="/blog/spa.avif" alt="Sophisticated Gourmet Kitchen" />
            </div>
          </div>
           <div className="element-item">
            <div className="element-left">
              <div className="element-number">04</div>
              <p className="element-category">Dressing Room</p>
              <h3>Lavish walk-in closets & dressing rooms.</h3>
              <p>The dressing room has become an extension of the bedroom experience  a boutique-style ritual, staged inside the home.</p>
              <p>Custom shelving systems. Premium lighting. Dedicated display sections for shoes and accessories. Vanity zones. Full-length mirrors. Personalised organisation systems. Every element is calibrated so that functionality and elegance are indistinguishable from each other.</p>
              <div className="element-tags">
                <span>Custom Shelving</span>
                <span>Vanity Areas</span>
                <span>Shoe & Bag Display</span>
                <span>Mirror Walls</span>
              </div>
            </div>
            <div className="element-image">
              <img src="/blog/walkin.avif" alt="Sophisticated Gourmet Kitchen" />
            </div>
          </div>
           <div className="element-item">
            <div className="element-left">
              <div className="element-number">05</div>
              <p className="element-category">Architectural Detail</p>
              <h3>Unique architectural detailing.</h3>
              <p>What truly separates luxury homes from ordinary ones is craftsmanship  the discipline of considering every detail as an authored choice.</p>
              <p>Grand entrances. Double-volume spaces. Floating staircases. Architectural lighting. Curved walls and archways. Statement façades. Bespoke finishes. Each element is intentionally designed to create a unique identity a language that gives the house its timeless appeal and its unmistakable sense of self.</p>             
              <div className="element-tags">
                <span>Floating stairs</span>
                <span>Double volume spaces</span>
                <span>Curved walls</span>
                <span>Statement façades</span>
              </div>
            </div>
            <div className="element-image">
              <img src="/blog/archh.avif" alt="Sophisticated Gourmet Kitchen" />
            </div>
          </div>

      
        </div>
      </section>
            {/* PULL QUOTE SECTION */}
      <section className="pull-quote-section">
        <div className="pull-quote-container">
          <blockquote>
            Luxury homes command premium value because they offer far more than square footage  <span className="gold">they deliver elevated experiences.</span>
          </blockquote>
          <p className="quote-author">— ARCH-STERIX GROUP</p>
        </div>
      </section>
            {/* FINAL CTA SECTION */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <p className="cta-label">DESIGN YOUR STANDARD</p>
          <h2>Build the home you were meant to <span className="gold">live</span> in.</h2>
          
          <p className="cta-text">
            Whether you are commissioning a private residence or curating a portfolio of premium developments, our studio brings the craft, the technology and the discipline to deliver it at the highest standard.
          </p>

          <Link to="/contact" className="commission-btn">
            COMMISSION A PROJECT →
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost4;