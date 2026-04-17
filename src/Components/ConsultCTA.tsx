import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./ConsultCTA.css";

const ConsultCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="consult-cta" ref={sectionRef}>
      <div className="cta-container">
        <div className={`cta-left ${visible ? "show" : ""}`}>
          <h2 className="cta-title">
            READY TO
            <br />
            BREAK <span>GROUND?</span>
          </h2>
          <p className="cta-subtitle">
            Consult with our lead architects and engineers today for a detailed
            structural assessment and project feasibility.
          </p>
        </div>

        <div className={`cta-right ${visible ? "show" : ""}`}>
          <button onClick={() => navigate("/contact")} className="schedule-btn">
            SCHEDULE A CONSULTATION -&gt;
          </button>

          <p className="cta-note">Quick response | Nationwide site visits available</p>
        </div>
      </div>
    </section>
  );
};

export default ConsultCTA;
