import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import siteConfig from "../config/SiteConfig";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          <img src={siteConfig.logo} alt={siteConfig.companyName} />
        </div>

        {/* Desktop Links */}
        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/clients">CLIENTS</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        {/* Contact Button */}
        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
        <Link to="/clients" onClick={() => setMenuOpen(false)}>CLIENTS</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
      </div>
    </header>
  );
};

export default Navbar;