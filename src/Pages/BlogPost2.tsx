import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./BlogPost2.css";   

const BlogPost2 = () => {
  useEffect(() => {
    const speed = 200;

    const animateCounter = (counter: HTMLElement) => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.ceil(count) + (target === 100 ? '%' : '%');
          setTimeout(updateCount, 16);
        } else {
          counter.textContent = target + (target === 100 ? '%' : '%');
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll<HTMLElement>('.stat-number');
          counters.forEach(counter => {
            if (counter.textContent === '0') {
              animateCounter(counter);
            }
          });
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector<HTMLElement>('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION - Second Post */}
      <section className="blog-post-hero">
        <img src="/blog/eco.avif" alt="Sustainable Luxury" className="hero-bg" />
        
        <div className="hero-overlay">
          <Link to="/blog" className="back-to-journal">← BACK TO JOURNAL</Link>
          
        
          
          <h1 className="blog-post-title">
            How to combine <span className="gold">luxury</span> and  eco-friendliness.
          </h1>
          
          <div className="post-meta-bottom">
    
            <span>BY THE ARCH-STERIX GROUP</span>
            <span>MAY 18, 2026</span>
          </div>
        </div>
      </section>

           {/* WHITE CONTENT SECTION */}
      <section className="blog-content">
        <div className="content-container">
          <div className="opening-statement">
            The most desirable home of the next decade is not the largest, the loudest or the most ornamented, it is the one that performs invisibly, ages gracefully, and asks the least of the planet that holds it up.
          </div>
          
          <div className="post-body">
            <p>Sustainable architecture has transformed what it means to live luxuriously. Today’s most coveted properties are not just beautiful they are intelligent, responsible, and built for the long term. Over the past decade, what began as a niche concern among environmentally minded clients has matured into the defining standard of the global luxury market.</p>
            
            <p>The reasons are practical as much as ethical. Energy independence in a country with unreliable grid supply is no longer a fringe preference, it is the difference between a home that works and one that doesn’t. Indoor air quality, once invisible, is now measured and prized. Material provenance, once an industry concern, is now a buyer expectation. And the carbon footprint of a building has become a permanent part of its valuation.</p>
            
            <p>From energy saving systems and intelligent appliances to living green surfaces and renewable solar technology, here is how the world’s finest homes and the homes we build at Arch Sterix are redefining luxury for the next decade.</p>
          </div>
        </div>
      </section>
            {/* STATS / COUNTERS SECTION */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number" data-target="30">0</h3>
            <p>Energy savings from LED &amp; smart lighting</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number" data-target="40">0</h3>
            <p>Reduction in heating bills with modern insulation</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number" data-target="9">0</h3>
            <p>Premium on market value for solar-equipped homes</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number" data-target="100">0</h3>
            <p>Energy independence with solar + battery systems</p>
          </div>
        </div>
      </section>
      <section className="efficiency-section">
        <div className="efficiency-container">
          <div className="efficiency-left">
            <h2>Illuminating Efficiency:<br />Energy Saving Lighting</h2>
            <p>Though a seemingly simple upgrade, energy saving lighting has become a hallmark of modern luxury homes. LED systems now fill interiors with a warm, natural glow while consuming a fraction of traditional energy and when paired with smart automation, they elevate a home’s intelligence as much as its ambience.</p>
            
            <ul className="efficiency-list">
              <li>LED systems replacing incandescent bulbs throughout</li>
              <li>Automated lighting triggered by occupancy and time</li>
              <li>Remote and app based lighting control</li>
              <li>Motion sensor lighting in corridors and outdoor spaces</li>
              <li>Significant long-term savings on electricity bills</li>
            </ul>
          </div>
          
          <div className="efficiency-right">
            <div className="efficiency-image">
              <img src="/blog/energy.avif" alt="Energy Efficient Lighting" />
              <div className="image-label">Energy Efficient Lighting</div>
            </div>
          </div>
        </div>
      </section>
            {/* INTELLIGENT CONSUMPTION SECTION */}
      <section className="intelligent-section">
        <div className="intelligent-container">
          {/* Image on the LEFT */}
          <div className="intelligent-left">
            <div className="intelligent-image">
              <img src="/blog/smart.avif" alt="Energy Efficient Appliances" />
              <div className="image-label">Smart Technology</div>
            </div>
          </div>

          {/* Text on the RIGHT */}
          <div className="intelligent-right">
            <h2>Intelligent Consumption:<br />Energy Efficient Appliances</h2>
            
            <p>In modern luxury homes, smart technology and eco friendliness are inseparable. Energy Starrated appliances from intelligent refrigerators with built in cameras to precision cooking ovens and self operating cleaning robots provide unmatched convenience while dramatically reducing a household’s energy footprint.</p>
            
            <ul className="features-list">
              <li>Energy Star-rated appliances throughout the home</li>
              <li>Smart refrigerators with interior cameras to reduce waste</li>
              <li>Precision ovens that cook perfectly with minimal energy</li>
              <li>Automated cleaning robots for hands-free maintenance</li>
              <li>Real-time energy usage monitoring & reporting</li>
            </ul>
          </div>
        </div>
      </section>
       <section className="efficiency-section">
        <div className="efficiency-container">
          <div className="efficiency-left">
            <h2>The Invisible Luxury:<br />Advanced Insulation</h2>
            <p>Insulation is not the most visible feature of a luxury home, but it is one of the most valuable. Cutting edge composite materials now allow homes to maintain optimal temperature year round with significantly less energy ensuring every room is a haven of comfort regardless of the season outside.</p>
            
            <ul className="efficiency-list">
              <li>Eco-friendly composite insulation materials</li>
              <li>Year round thermal comfort with minimal energy use</li>
              <li>Reduced reliance on air conditioning & heating systems</li>
              <li>Soundproofing benefits for enhanced interior tranquillity</li>
              <li>Meaningful long-term reduction in energy bills</li>
            </ul>
          </div>
          
          <div className="efficiency-right">
            <div className="efficiency-image">
              <img src="/blog/insulation2.avif" alt="Energy Efficient Lighting" />
              <div className="image-label">Advanced Insulation</div>
            </div>
          </div>
        </div>
      </section>
      <section className="intelligent-section">
        <div className="intelligent-container">
          {/* Image on the LEFT */}
          <div className="intelligent-left">
            <div className="intelligent-image">
              <img src="/blog/living.avif" alt="Energy Efficient Appliances" />
              <div className="image-label">Living Surfaces</div>
            </div>
          </div>

          {/* Text on the RIGHT */}
          <div className="intelligent-right">
            <h2>Nature as Architecture:<br />Greenery & Living Surfaces</h2>
            
            <p>Greenery does far more than add visual appeal it is a functional, high performance building element. Green roofs and living walls provide additional insulation, reduce solar heat gain in summer, and actively improve indoor air quality. Lush outdoor sanctuaries and botanical gardens have become indicators of prestige in contemporary luxury real estate.</p>
            
            <ul className="features-list">
              <li>Green roofs reducing summer solar heat gain</li>
              <li>Living walls improving interior air quality</li>
              <li>Additional natural insulation layer year round</li>
              <li>Outdoor dining and lounge areas in lush landscaping</li>
              <li>Proven uplift in property market value</li>
            </ul>
          </div>
        </div>
      </section>
       <section className="efficiency-section">
        <div className="efficiency-container">
          <div className="efficiency-left">
            <h2>Power & Independence: <br />Solar Panels & Shingles</h2>
            <p>Solar power remains the most widely adopted renewable energy source in luxury residential properties and for good reason. A well designed solar system with battery storage can achieve full energy independence. The latest innovation, solar shingles, takes this further by replacing traditional roof tiles entirely, blending seamlessly into a home's architectural aesthetic.</p>
            
            <ul className="efficiency-list">
              <li>Full energy independence with solar + battery storage</li>
              <li>Solar shingles integrating invisibly into roof design</li>
              <li>Significant reduction in or elimination of electricity bills</li>
              <li>One of the highest ROI eco-upgrades on the market</li>
              <li>Strong appeal to eco-conscious luxury buyers</li>
            </ul>
          </div>
          
          <div className="efficiency-right">
            <div className="efficiency-image">
              <img src="/blog/renewable energy.avif" alt="Energy Efficient Lighting" />
              <div className="image-label">Renewable Energy</div>
            </div>
          </div>
        </div>
      </section>
            {/* DEFINITION BANNER SECTION */}
      <section className="definition-banner">
        <img src="/blog/banner2.avif" alt="Sustainable Luxury Banner" className="banner-bg" />
        
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="banner-label">A NEW DEFINITION</div>
            <h2 className="banner-quote">
              Luxury is no longer the absence of restraint <span className="gold">it is the presence of intelligence.</span>
            </h2>
          </div>
        </div>
      </section>
            {/* MYTHS VS REALITY SECTION */}
      <section className="myths-section">
        <div className="myths-container">
          {/* Image on the LEFT */}
          <div className="myths-image">
            <img src="/blog/myth.avif" alt="Sustainable Luxury Myths" />
            <div className="myths-overlay"></div>
            <div className="myths-image-text">
              <p>SEPARATING FACT FROM FICTION IN SUSTAINABLE LUXURY</p>
            </div>
          </div>

          {/* Content on the RIGHT */}
          <div className="myths-content">
            <h2>Three myths about sustainable luxury and the reality.</h2>

            <div className="myths-grid">
              {/* Myth 1 */}
              <div className="myth-item">
                <div className="myth-number">01</div>
                <div className="myth-column">
                  <p className="myth-label">THE MYTH</p>
                  <p className="myth-text">"Sustainable design costs more."</p>
                </div>
                <div className="reality-column">
                  <p className="reality-label">THE REALITY</p>
                  <p className="reality-text">Upfront premiums of 2 to 8% are typically recovered within 5 to 10 years through operating savings and the asset commands a measurable resale premium for the entire holding period.</p>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="myth-item">
                <div className="myth-number">02</div>
                <div className="myth-column">
                  <p className="myth-label">THE MYTH</p>
                  <p className="myth-text">"Eco-friendly homes feel utilitarian."</p>
                </div>
                <div className="reality-column">
                  <p className="reality-label">THE REALITY</p>
                  <p className="reality-text">The finest sustainable homes are indistinguishable from  and often more luxurious than their conventional counterparts. Performance disappears into craft.</p>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="myth-item">
                <div className="myth-number">03</div>
                <div className="myth-column">
                  <p className="myth-label">THE MYTH</p>
                  <p className="myth-text">"Solar panels ruin the architecture."</p>
                </div>
                <div className="reality-column">
                  <p className="reality-label">THE REALITY</p>
                  <p className="reality-text">Modern integrated solar  solar shingles, BIPV façade systems, hidden roof arrays  disappears entirely into the building’s composition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* IN CLOSING SECTION */}
      <section className="closing-section">
        <div className="closing-container">
          <div className="closing-label">IN CLOSING</div>
          
          <h2 className="closing-quote">
            The future of luxury <span className="gold">is sustainable.</span>
          </h2>
          
          <p className="closing-text">
            The most extraordinary homes being built today are those that marry indulgence with responsibility  designed not only to impress, but to endure. They are quieter, more comfortable, less expensive to operate, and more valuable to own. They feel better to live in.
          </p>
          
          <p className="closing-text">
            At Arch Sterix, we believe eco-friendly design and premium living are not in conflict they are, in fact, the same thing seen from two angles.
          </p>

          <Link to="/contact" className="start-project-btn">
            START YOUR PROJECT →
          </Link>
        </div>
      </section>
      <Footer />
      
    </>
  );
};

export default BlogPost2;