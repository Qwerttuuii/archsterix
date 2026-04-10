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

  // Add your client logo filenames here (place them in public/ folder)
  const clientLogos = [
    "/clients/livingfaith.png",
    "/clients/nddc.jpg",
    "/clients/ranao.jpg",
    "/clients/fcda.jpg",
    "/clients/brains.jpg",        // duplicate for seamless loop
    "/clients/kaduna.jpg",
    "/clients/sterlinglogo02.jpg",
    "/clients/gtbank.png",
    "/clients/fidelitylogo2.jpg",
    "/clients/skyelogo.png",
    "/clients/urbanshelter.jpg",
    "/clients/brains.jpg",
    "/clients/fcda.jpg",        // duplicate for seamless loop
    "/clients/kaduna.jpg",
    "/clients/sterlinglogo02.jpg",
    "/clients/gtbank.png",
    "/clients/livingfaith.png",
    "/clients/nddc.jpg",
    "/clients/ranao.jpg",
    "/clients/fcda.jpg",
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