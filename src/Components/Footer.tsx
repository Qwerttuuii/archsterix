import { Link } from "react-router-dom";
import siteConfig from "../config/SiteConfig";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              ARCH-STERIX <span className="gold">NIGERIA LIMITED</span>
            </div>
            <p className="footer-desc">
              Delivering excellence in construction, design-build, and facility
              management since 2011. Quality is long remembered after price is
              forgotten.
            </p>

            <div className="social-icons">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.327.487 2.54.23 6.902.166 8.18.166 8.59.166 12c0 3.41 0 3.82.065 5.098.258 4.362 2.466 6.575 6.824 6.83 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.255 6.566-2.468 6.824-6.83.058-1.28.072-1.688.072-5.098 0-3.41 0-3.82-.065-5.098-.258-4.362-2.466-6.575-6.824-6.83C15.668.014 15.26 0 12 0z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">SECTORS</h4>
            <ul className="footer-links">
              <li>
                <Link to="/projects?sector=residential">Residential</Link>
              </li>
              <li>
                <Link to="/projects?sector=commercial">Commercial</Link>
              </li>
              <li>
                <Link to="/projects?sector=institutional">Institutional</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">HEADQUARTERS</h4>
            <div className="contact-info">
              <p>
                {siteConfig.streetAddress},<br />
                {siteConfig.city}
              </p>
              <p className="phone">
                <a href={`tel:${siteConfig.phone}`}>0809 895 1904</a>
                <br />
                <a href={`tel:${siteConfig.alternatePhone}`}>0803 595 1904</a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} {siteConfig.companyName} ({siteConfig.rcNumber}). All Rights Reserved.
          </div>
          <div className="footer-links-bottom">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="tagline">QUALITY IS LONG REMEMBERED AFTER PRICE IS FORGOTTEN</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
