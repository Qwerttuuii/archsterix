import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./WhatWeDo.css";


const WhatWeDo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

  const services = [
    {
      id: 1,
      title: "Pre-Construction",
      desc: "We help build clients smarter by laying the right groundwork before construction begins. Our pre-construction services include cost estimation, feasibility studies, and design planning.",
      image: "/part 1.avif",
    },
    {
      id: 2,
      title: "Construction and Project Management",
      desc: "Arch-Sterix provides full-spectrum project management and construction services. We manage every aspect of the construction process, ensuring projects are delivered on time, within budget, and to the highest quality standards.",
      image: "/part 2.avif",
    },
    {
      id: 3,
      title: "Post-Construction",
      desc: "Our involvement does not end when the building is complete. We support system commissioning, testing, and handover to ensure the facility operates as intended.",
      image: "/part 3.avif",
    },
  ];

  return (
    <section className="what-we-do" ref={sectionRef}>
      <div className="what-container">
        <div className={`what-text ${visible ? "show" : ""}`}>
          <h2 className="what-title">
            What We <span>Do</span>
          </h2>
          <div className={`what-underline ${visible ? "line-show" : ""}`}></div>
          <p className="what-subtitle">
            End-to-end construction solutions from concept through completion
            and beyond. We combine precision engineering with creative
            problem-solving to deliver exceptional results.
          </p>
          <Link to="/projects" className="explore-btn">
            EXPLORE ALL WORKS -&gt;
          </Link>
        </div>

        <div className={`what-visual ${visible ? "show" : ""}`}>
          <div className="main-image-container">
            <img
              src="/what.avif"
              alt="Arch-Sterix Construction Excellence"
              className="main-image"
            />
          </div>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${visible ? "show" : ""}`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onTouchStart={() =>
              setActiveCard(activeCard === service.id ? null : service.id)
            }
          >
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div
                className={`service-overlay ${
                  activeCard === service.id ? "active" : ""
                }`}
              >
                <h3 className="service-name">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
