import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active-link" : "";

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link className="logo" to="/" aria-label="Go to Arch-Sterix homepage">
          <img src={siteConfig.logo} alt={siteConfig.companyName} />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            PROJECTS
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            SERVICES
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            BLOG
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            CONTACT
          </NavLink>
        </nav>

        <NavLink to="/contact" className="contact-btn">
          Contact Us
        </NavLink>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          className={linkClass}
          onClick={() => setMenuOpen(false)}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/services"
          className={linkClass}
          onClick={() => setMenuOpen(false)}
        >
          SERVICES
        </NavLink>
        <NavLink to="/blog" className={linkClass} onClick={() => setMenuOpen(false)}>
          BLOG
        </NavLink>
        <NavLink
          to="/contact"
          className={linkClass}
          onClick={() => setMenuOpen(false)}
        >
          CONTACT
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
