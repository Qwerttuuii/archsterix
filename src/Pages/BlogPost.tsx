import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./BlogPost.css";

const BlogPost = () => {
  

  const post = {
    id: 1,
    title: "Parametricism architecture for a complex world.",
    category: "ARCHITECTURE & INNOVATION",
    author: "THE ARCH-STERIX GROUP",
    heroImage: "/blog/parametric.avif",

    openingStatement: "For the first time since the Bauhaus, architecture has produced a coherent new vocabulary  one that does not borrow from the past but emerges from the computational possibilities of the present.",

    body: `
      <p>Parametricism is, by the most influential reading, the first truly epoch-making architectural style since Modernism. It is not a question of aesthetic preference  it is a fundamentally different way of thinking about how buildings come into being. Where Modernism began with the platonic solid and cleared the site of history, Parametricism begins with a network of relationships and lets the form emerge from their negotiation.</p>
      
      <p>The shift is comparable to the move from analog photography to digital. The output may look superficially similar in some cases, but the underlying grammar  what can be precisely captured, manipulated and reproduced has been completely rewritten. A parametric model is not a drawing; it is a living system of rules. Change the brief and the building reorganises itself in seconds. Change the climate data and the façade re-tunes itself.</p>
      
      <p>This essay traces where Parametricism came from, what defines it, the buildings that established its reality, and why for any practice confronting the complexity of contemporary urbanism  it is no longer optional.</p>
    `
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="blog-post-hero">
        <img src={post.heroImage} alt={post.title} className="hero-bg" />
        <div className="hero-overlay">
          <Link to="/blog" className="back-to-journal">← BACK TO BLOG</Link>
          
         

          <h1 className="blog-post-title">{post.title}</h1>

          <div className="post-meta-bottom">
            <span>BY {post.author}</span>
            
          </div>
        </div>
      </section>

      {/* WHITE CONTENT */}
      <section className="blog-content">
        <div className="content-container">
          <div className="opening-statement">
            {post.openingStatement}
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </section>

      {/* A BRIEF HISTORY SECTION */}
      <section className="history-section">
        <div className="history-container">
          <div className="section-header">A BRIEF HISTORY</div>
          <h2 className="history-title">
            Three decades, from fringe experiment to mainstream practice.
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="year">1990S</div>
              <div className="event-content">
                <div className="event-title">Digital Genesis</div>
                <div className="event-desc">
                  The earliest experiments with computational design emerge at studios like Foreign Office Architects and the Architectural Association in London. Software written for aerospace and automotive engineering is repurposed for architectural form-finding.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="year">2008</div>
              <div className="event-content">
                <div className="event-title">The Manifesto</div>
                <div className="event-desc">
                  Patrik Schumacher, principal at Zaha Hadid Architects, publishes the Parametricist Manifesto at the Venice Biennale, formally naming the movement and declaring it the successor to Modernism.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="year">2010S</div>
              <div className="event-content">
                <div className="event-title">Built Reality</div>
                <div className="event-desc">
                  Buildings like the Heydar Aliyev Center, Galaxy SOHO and the London Aquatics Centre prove the style can scale from pavilion to civic infrastructure.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="year">Today</div>
              <div className="event-content">
                <div className="event-title">Mainstream Practice</div>
                <div className="event-desc">
                  Parametric tools Grasshopper, Dynamo, generative AI design  are now standard in mid-sized practices worldwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="principles-section">
        <div className="principles-container">
          <div className="section-header">DEFINING PRINCIPLES</div>
          <h2 className="principles-title">
            Four ideas that distinguish parametric thinking from everything before it.
          </h2>

          <div className="principles-list">
            <div className="principle">
              <div className="principle-left">
                <div className="principle-number">01</div>
                <div className="principle-icon">⟐</div>
              </div>
              <div className="principle-right">
                <h3>Systemic Inflection</h3>
                <p>Changing one parameter foot traffic, sunlight, structural load alters all related elements, adapting the entire system seamlessly.</p>
                <p>In a parametric model, no element exists in isolation. A window is not an object placed in a wall; it is a relationship defined by daylight requirements, structural openings, façade rhythm and view priority. Shift one variable and the model recomposes itself, propagating that change through every dependent element with logical consistency. This is design as choreography rather than drafting.</p>
              </div>
            </div>

            <div className="principle">
              <div className="principle-left">
                <div className="principle-number">02</div>
                <div className="principle-icon">≈</div>
              </div>
              <div className="principle-right">
                <h3>Organic Fluidity</h3>
                <p>Forms are continuous, fluid, and dynamic often mimicking natural systems and challenging the rigid geometric conventions of Modernism.</p>
                <p>Where Modernism worshipped the right angle, Parametricism rediscovers the curve, the gradient, the seam-less transition. These are not stylistic indulgences, they are the geometries that nature has refined across millennia to distribute load, channel flow, and respond to environment. A parametric building inherits that fluency, settling into its context the way a riverbed accommodates water.</p>
              </div>
            </div>

            <div className="principle">
              <div className="principle-left">
                <div className="principle-number">03</div>
                <div className="principle-icon">⟨/⟩</div>
              </div>
              <div className="principle-right">
                <h3>Rule Based Design</h3>
                <p>Computational parameters and algorithms drive both form and performance, enabling extraordinary complexity to be achieved with precision and efficiency no manual drafting can replicate.</p>
                <p>The designer writes the rules; the algorithm executes them.A parametric workflow might define a façade as: maintain 50% solar shading on south-facing surfaces, optimise daylight to interior workstations, vary panel size to respond to view angles, and never repeat a single panel exactly. From those rules emerge thousands of unique components, each fabricated digitally, each contributing to a coherent whole.</p>
              </div>
            </div>

            <div className="principle">
              <div className="principle-left">
                <div className="principle-number">04</div>
                <div className="principle-icon">↝</div>
              </div>
              <div className="principle-right">
                <h3>Adaptive Intelligence</h3>
                <p>Parametric structures are inherently responsive to climate, topology, human movement, and structural forces. The building becomes a living, data driven organism.</p>
                <p>A parametric building is, in effect, an answer to a question its site is asking. Where the sun falls hardest, the skin thickens. Where the breeze enters, an opening forms. Where people gather, the volume expands. The building is not imposed on its context, it negotiates with it. This adaptive logic continues post-occupancy, with embedded sensors and actuated façades that respond to real time conditions..</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* NOTABLE BUILT WORKS SECTION */}
      <section className="built-works-section">
        <div className="built-works-container">
          <div className="section-header">NOTABLE EXAMPLES</div>
          <h2 className="built-works-title">Built Works</h2>

          <div className="works-grid">
            {/* Example 1 */}
            <div className="work-card">
              <div className="work-image-placeholder">
                <img src="/blog/example1.avif" alt="Heydar Aliyev Center" />
              </div>
              <div className="work-info">
                <div className="work-location">BAKU, AZERBAIJAN • 2012</div>
                <h3>Heydar Aliyev Center</h3>
                <p>A continuous, fluid skin rises to envelop the plaza, creating a seamless relationship between architecture and landscape — one of Zaha Hadid's most iconic parametric achievements.</p>
              </div>
            </div>

            
            <div className="work-card">
              <div className="work-image-placeholder">
                <img src="/blog/example 2.avif" alt="Galaxy SOHO" />
              </div>
              <div className="work-info">
                <div className="work-location">BEIJING, CHINA • 2014</div>
                <h3>Galaxy SOHO</h3>
                <p>A complex of four domed, flowing structures connected by bridges, designed through parametric parameters for optimal urban performance.</p>
              </div>
            </div>
           
            <div className="work-card">
              <div className="work-image-placeholder">
                <img src="/blog/example 3.avif" alt="Galaxy SOHO" />
              </div>
              <div className="work-info">
                <div className="work-location">ROME, ITALY • 2010</div>
                <h3>MAXXI Museum</h3>
                <p>Flowing galleries adapt to the surrounding urban fabric, creating dynamic spatial experiences that challenge how visitors move through and perceive cultural institution.</p>
              </div>
            </div>
            
            <div className="work-card">
              <div className="work-image-placeholder">
                <img src="/blog/example 4.avif" alt="Galaxy SOHO" />
              </div>
              <div className="work-info">
                <div className="work-location">LONDON, UK • 2012</div>
                <h3>London Aquatic Centre</h3>
                <p>Built for the 2012 Olympics, its 160 metre roof draws its form the fluild geometrics of water in motion optimised the steel structure.</p>
              </div>
            </div>

          
          </div>
        </div>
      </section>
            {/* WHY IT MATTERS SECTION */}
      <section className="why-matters-section">
        <div className="why-matters-container">
          <div className="section-header">WHY IT MATTERS</div>
          <h2 className="why-matters-title">
            Architecture for a world that no longer fits a grid.
          </h2>

          <div className="why-matters-body">
            <p>The 20th century city was conceived as a Cartesian grid a homogeneous field on which standardised buildings could be repeated indefinitely. That city no longer exists, if it ever truly did. The contemporary city is heterogeneous, layered, networked, and constantly changing. It is shaped by data flows, mobility patterns, climate stress, and social dynamics that cannot be addressed with the right angle alone.</p>
            
            <p>Parametricism gives architects and urban designers the instruments to work with that complexity rather than against it. A parametric masterplan can respond to pedestrian flow data, solar exposure, view corridors and acoustic conditions simultaneously, producing a coherent fabric in which every building, street and public space is precisely tuned to its place and purpose.</p>
            
            <p>Where Modernism imposed order through repetition and right angles, Parametricism discovers order through relationships, gradients and adaptive systems. The result is architecture that is simultaneously more complex and more coherent buildings that feel inevitable, as if they could not have been any other way.</p>
            
            <p>For Nigeria specifically, the implications are significant. Our climate is demanding, our urban density is changing rapidly, and our cities are shaped by patterns of use that defy template solutions. A parametric approach allows us to design for the country we actually have, rather than the country a foreign style guide might assume.</p>
          </div>
        </div>
      </section>
      {/* QUOTE SECTION */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-text">
            Parametricism is not a style of forms, <span className="gold">it is a style of thinking</span>. The architecture of complexity, designed through intelligence.
          </div>
          <div className="quote-author">
            — AFTER PATRIK SCHUMACHER
          </div>
        </div>
      </section>
            {/* FINAL CTA SECTION */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <p className="cta-small">BRING THE METHODOLOGY TO YOUR PROJECT</p>
          
          <h2 className="cta-main">
            We design with intelligence,<br />
            build with <span className="gold">precision</span>.
          </h2>
          
          <p className="cta-desc">
            Whether your project calls for parametric methodology in full or simply benefits from 
            the rigour it brings to programme, performance and form, our studio brings the tools and 
            the experience to deliver it.
          </p>
          
          <Link to="/contact" className="discuss-btn">
            DISCUSS A PROJECT →
          </Link>
        </div>
      </section>

      <Footer />

      <Footer />
    </>
  );
};

export default BlogPost;