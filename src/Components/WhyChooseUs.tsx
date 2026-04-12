import { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
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

  const benefits = [
    "Uncompromising Quality Standards",
    "Expert & Dedicated Workforce",
    "Proven Track Record of Excellence",
    "Innovative Engineering Solutions"
  ];

  const stats = [
    { label: "Client Satisfaction", value: 92 },
    { label: "Projects Delivered On Time", value: 88 },
    { label: "Repeat Clients", value: 95 }
  ];

  return (
    <section className="why-choose-us" ref={sectionRef}>
      <div className="why-container">
        {/* Left Content */}
        <div className={`why-content ${visible ? "show" : ""}`}>
          <div className="why-badge">WHY CHOOSE US</div>
          
          <h2 className="why-title">
            We Always Deliver <span>Excellence</span> in Every Project
          </h2>

          <p className="why-subtitle">
            At Arch-Sterix, quality is not just a promise, it's our foundation. 
            We combine precision engineering, experienced teams, and uncompromising standards 
            to exceed client expectations every time.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="check-icon">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Stats / Progress Bars */}
          <div className="stats-section">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-label">{stat.label}</div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar"
                    style={{ 
                      width: visible ? `${stat.value}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
                <span className="stat-value">{stat.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image / Video Area */}
        <div className={`why-image ${visible ? "show" : ""}`}>
          <div className="image-wrapper">
            {/* You will add your image or video here manually */}
            <img 
              src="/whychooseus.jpg" 
              alt="Arch-Sterix Team on Site"
              className="team-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x900/1a1a1a/c9a646?text=Arch-Sterix+Team";
              }}
            />
            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;