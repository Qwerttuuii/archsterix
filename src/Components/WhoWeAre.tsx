import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";

import siteConfig from "../config/SiteConfig";

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="who" ref={sectionRef}>
      <div className="who-container">
        <div className={`who-text ${visible ? "show" : ""}`}>
          <h2 className="who-title">
            Crafting Excellence <br />
            <span>Since 2011</span>
          </h2>

          <div className={`underline ${visible ? "line-show" : ""}`}></div>

          <p>
            Arch-Sterix Nigeria Limited is a fully registered construction and
            facility management company established in November 2011 (RC:
            997105). Headquartered in Abuja, we have grown from a construction
            contractor into a comprehensive design-build and project management
            firm.
          </p>

          <p>
            We serve commercial, residential, industrial, and institutional
            sectors across Nigeria, delivering cost-effective, sustainable, and
            technically sound building solutions.
          </p>

          <blockquote>
            "Quality is long remembered after price is forgotten"
          </blockquote>

          <Link to="/about" className="read-more">
            Read More {"->"}
          </Link>
        </div>

        <div className={`who-image ${visible ? "show" : ""}`}>
          <div className="ceo-card">
            <div className="ceo-image-frame">
              <img src="/ceo.avif" alt={siteConfig.ceoName} />
            </div>

            <div className="ceo-meta">
              <p className="ceo-role">{siteConfig.ceoTitle}</p>
              <h4 className="ceo-name">{siteConfig.ceoName}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
