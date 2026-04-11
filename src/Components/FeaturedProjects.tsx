import { useEffect, useRef, useState } from "react";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      category: "RESIDENTIAL",
      title: "Walnut Grove Estate, Jahi Abuja",
      description: "16 units estate with 24-hour utilities",
      image: "/walnut-grove.jpg",
      link: "/projects/walnut"
    },
    {
      id: 2,
      category: "COMMERCIAL",
      title: "Sterling Bank, Branch Development",
      description: "Multi-branch design & build development program",
      image: "/sterling.jpg",
      link: "/projects/sterling-bank"
    },
    {
      id: 3,
      category: "INSTITUTIONAL",
      title: "Living Faith Church, Akwa-Ibom",
      description: "100-capacity church construction",
      image: "/church.jpg",
      link: "/projects/living-faith-church"
    }
  ];

  return (
    <section className="featured-projects" ref={sectionRef}>
      <div className="projects-container">
        <div className={`section-header ${visible ? "show" : ""}`}>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <div className={`section-underline ${visible ? "line-show" : ""}`}></div>
          <p className="section-subtitle">
            A selection of projects that showcase our commitment to quality and excellence across sectors.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 180}ms` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
               
              </div>
            </div>
          ))}
        </div>

        <div className={`view-all ${visible ? "show" : ""}`}>
          <a href="/projects" className="view-all-btn">
            VIEW ALL PROJECTS →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;