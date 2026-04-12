import { useEffect, useRef, useState } from "react";
import "./CoreValues.css";

const CoreValues = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "INTEGRITY",
      desc: "Radical honesty in every dealing. We prioritize transparency, ethical practices, and building lasting trust with every client and partner."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "QUALITY",
      desc: "Precision engineering and uncompromising standards. We deliver work that stands the test of time, quality is long remembered after price is forgotten."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 14h.01" />
        </svg>
      ),
      title: "SAFETY",
      desc: "Zero-compromise on health, safety, and environment. Every site is managed with rigorous protocols to protect lives, property, and the environment."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
      title: "INNOVATION",
      desc: "Leveraging modern technology, smart construction methods, and creative problem-solving to deliver superior outcomes for our clients."
    }
  ];

  return (
    <section className="core-values" ref={sectionRef}>
      <div className="core-container">
        <div className={`section-header ${visible ? "show" : ""}`}>
          <h2 className="section-title">Foundational Pillars</h2>
          <p className="section-subtitle">
            The core values that serve as the load-bearing walls of our entire organization.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`value-card ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;