import { useEffect, useRef, useState } from "react";
import "./TrustedBy.css";

const TrustedBy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const clientLogos = [
    "/clients/fcda.avif",
    "/clients/kaduna.avif",
    "/clients/sterlinglogo02.avif",
    "/clients/gtbank.avif",
    "/clients/fidelitylogo2.avif",
    "/clients/skyelogo.avif",
    "/clients/urbanshelter.avif",
    "/clients/brains.avif",
    "/clients/livingfaith.avif",
    "/clients/nddc.avif",
    "/clients/ranao.avif",
    // Duplicates for seamless infinite scroll
    "/clients/fcda.avif",
    "/clients/kaduna.avif",
    "/clients/sterlinglogo02.avif",
    "/clients/gtbank.avif",
    "/clients/fidelitylogo2.avif",
    "/clients/skyelogo.avif",
    "/clients/urbanshelter.avif",
    "/clients/brains.avif",
    "/clients/livingfaith.avif",
    "/clients/nddc.avif",
    "/clients/ranao.avif",
  ];

  return (
    <section className="trusted-by" ref={sectionRef}>
      <div className="trusted-container">
        <div className={`trusted-header ${visible ? "show" : ""}`}>
          <h2 className="trusted-title">
            Trusted <span>By</span>
          </h2>
          <div className={`trusted-underline ${visible ? "line-show" : ""}`}></div>
          <p className="trusted-subtitle">
            Leading organizations across Nigeria trust Arch-Sterix for quality and excellence
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="logos-track-container">
          <div className={`logos-track ${visible ? "animate" : ""}`}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img
                  src={logo}
                  alt="Client logo"
                  className="client-logo"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;