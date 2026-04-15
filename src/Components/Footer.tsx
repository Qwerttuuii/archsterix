import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <div className="footer-logo">
              ARCH-STERIX <span className="gold">NIGERIA LIMITED</span>
            </div>
            <p className="footer-desc">
              Delivering excellence in construction, design-build, and facility management since 2011. 
              Quality is long remembered after price is forgotten.
            </p>

            {/* Social Media Icons */}
            {/* Inside the first footer-col, replace the old social-icons with this: */}

{/* Social Media Icons */}
<div className="social-icons">


  <a 
    href="https://instagram.com/archsterixgroup" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Visit our Instagram"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.327.487 2.54.23 6.902.166 8.18.166 8.59.166 12c0 3.41 0 3.82.065 5.098.258 4.362 2.466 6.575 6.824 6.83 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.255 6.566-2.468 6.824-6.83.058-1.28.072-1.688.072-5.098 0-3.41 0-3.82-.065-5.098-.258-4.362-2.466-6.575-6.824-6.83C15.668.014 15.26 0 12 0z"/>
      <circle cx="18.406" cy="5.594" r="1.44"/>
    </svg>
  </a>



 
</div>
          </div>

          {/* Sectors */}
          <div className="footer-col">
            <h4 className="footer-heading">SECTORS</h4>
            <ul className="footer-links">
              <li><a href="/projects?sector=residential">Residential</a></li>
              <li><a href="/projects?sector=commercial">Commercial</a></li>
              <li><a href="/projects?sector=institutional">Institutional</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">HEADQUARTERS</h4>
            <div className="contact-info">
              <p>No. 11 Abiodun Anofi Street,<br />Dawaki Extension, Abuja</p>
              <p className="phone">
                <a href="tel:08098951904">0809 895 1904</a><br />
                <a href="tel:08035951904">0803 595 1904</a>
              </p>
              <p>
                <a href="mailto:info@archsterixgroup.com">info@archsterixgroup.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Arch-Sterix Nigeria Limited (RC: 997105). All Rights Reserved.
          </div>
          <div className="footer-links-bottom">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div className="tagline">
            QUALITY IS LONG REMEMBERED AFTER PRICE IS FORGOTTEN
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;