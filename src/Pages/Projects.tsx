import { useState, useEffect } from "react";
import "./Projects.css";
import Navbar from "../Components/Navbar";
import WhyChooseUs from "../Components/WhyChooseUs";
import Footer from "../Components/Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "residential" | "commercial" | "institutional" | "On Going"
  >("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    "/projects/living-faith-church.jpg",
    "/projects/Bank_Projects_002.jpg",
    "/projects/Bank_Projects_003.jpg",
    "/projects/Bank_Projects_006.jpg",
    "/projects/Bank_Projects_011.jpg",
    "/projects/Bank_Projects_013.jpg",
    "/projects/Construction_Projects_030.jpg",
    "/projects/Construction_Projects_031.jpg",
    "/projects/Construction_Projects_032.jpg",
    "/projects/Construction_Projects_033.jpg",
    "/projects/Construction_Projects_038.jpg",
    "/projects/Construction_Projects_039.jpg",
    "/projects/Construction_Projects_041.jpg",
    "/projects/Construction_Projects_043.jpg",
    "/projects/Estate_Projects_015.jpg",
    "/projects/Estate_Projects_018.jpg",
    "/projects/Estate_Projects_020.jpg",
    "/projects/Estate_Projects_021.jpg",
    "/projects/Estate_Projects_026.jpg",
    "/projects/Estate_Projects_027.jpg",
  ];

  const projects = [
    {
      id: 1,
      title: "Lakeview Estate, Jabi-Abuja",
      category: "residential" as const,
      description: "160-unit estate with shopping complex, playground & 24-hour utilities",
      image: "/projects/lakeview-estate.jpg",
      location: "Jabi, Abuja",
    },
    {
      id: 2,
      title: "Walnut Grove Estate, Jahi-Abuja",
      category: "residential" as const,
      description: "Premium residential development in Jahi, Abuja",
      image: "/projects/walnut.jpg",
      location: "Jahi, Abuja",
    },
    {
      id: 3,
      title: "Sterling Bank, Branch Development",
      category: "commercial" as const,
      description: "Multi-branch design & build development program",
      image: "/projects/sterling-bank.jpg",
      location: "Multiple Locations",
    },
    {
      id: 4,
      title: "Keystone Bank Branch Development, Kogi",
      category: "commercial" as const,
      description: "Branch development project for Keystone Bank in Lokoja, featuring modern design and construction techniques.",
      image: "/projects/Ongoing_Projects_049.jpg",
      location: "Lokoja, Kogi",
    },
    {
      id: 5,
      title: "Living Faith Church, Akwa-Ibom",
      category: "institutional" as const,
      description: "100-capacity church construction with modern facilities",
      image: "/projects/living-faith-church.jpg",
      location: "Akwa-Ibom",
    },
    {
      id: 6,
      title: "The Chambery, Dawaki-Abuja",
      category: "On Going" as const,
      description: "The Chambery, Dawaki offers you a lifestyle wrapped in privacy, comfort and modern infrastructure",
      image: "/projects/chambery.jpeg",
      location: "Abuja",
    },
    {
      id: 7,
      title: "Skye Bank, Kano",
      category: "commercial" as const,
      description: "Branch development project for Skye Bank in Kano featuring state-of-the-art banking facilities.",
      image: "/projects/Ongoing_Projects_054.jpg",
      location: "Kano",
    },
    {
      id: 8,
      title: "Media Plus International, Abuja",
      category: "commercial" as const,
      description: "Interior furniture and equipment planned and supplied by Arch-Sterix Nigeria Limited.",
      image: "/projects/Ongoing_Projects_047.jpg",
      location: "Abuja",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      <Navbar />

      {/* dark background only wraps the projects sections */}
      <div className="projects-page">

        {/* ── Hero Slideshow ── */}
        <section className="projects-hero">
          <div className="hero-slideshow">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${slide})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            ))}
          </div>

          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Our Projects</h1>
              <p className="hero-subtitle">
                A portfolio showcasing our commitment to quality and excellence
                across residential, commercial, and institutional sectors.
              </p>
            </div>
          </div>

          <div className="slide-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ── Filter Tabs ── */}
        <section className="projects-filter">
          <div className="filter-container">
            {(
              [
                { value: "all",          label: "ALL" },
                { value: "residential",  label: "RESIDENTIAL" },
                { value: "commercial",   label: "COMMERCIAL" },
                { value: "institutional",label: "INSTITUTIONAL" },
                { value: "On Going",     label: "ON GOING" },
              ] as { value: typeof activeFilter; label: string }[]
            ).map(({ value, label }) => (
              <button
                key={value}
                className={`filter-btn ${activeFilter === value ? "active" : ""}`}
                onClick={() => setActiveFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="projects-grid-section">
          <div className="projects-grid-wrapper">
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/600x400/1a1a1a/cccccc?text=Project+Image";
                      }}
                    />
                    <div className="category-tag">
                      {project.category.toUpperCase()}
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-location">{project.location}</p>
                    <p className="project-desc">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      {/* WhyChooseUs and Footer are OUTSIDE .projects-page
          so the black background doesn't swallow their styles */}
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Projects;
