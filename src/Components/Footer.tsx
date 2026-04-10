import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Column 1: Brand & About */}
          <div className="footer-col">
            <div className="footer-logo">
              ARCH-STERIX <span className="gold">NIGERIA LIMITED</span>
            </div>
            <p className="footer-desc">
              Delivering excellence in construction, design-build, and facility management since 2011. 
              Quality is long remembered after price is forgotten.
            </p>
          </div>

          {/* Column 2: Quick Links - Sectors */}
          <div className="footer-col">
            <h4 className="footer-heading">SECTORS</h4>
            <ul className="footer-links">
              <li><a href="/projects?sector=residential">Residential</a></li>
              <li><a href="/projects?sector=commercial">Commercial</a></li>
              <li><a href="/projects?sector=institutional">Institutional</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Headquarters */}
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