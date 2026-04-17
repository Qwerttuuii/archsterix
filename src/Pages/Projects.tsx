import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Projects.css";
import Navbar from "../Components/Navbar";
import WhyChooseUs from "../Components/WhyChooseUs";
import Footer from "../Components/Footer";
import Seo from "../seo/Seo";
import {
  absoluteSchemaUrl,
  breadcrumbSchema,
  organizationSchema,
} from "../seo/schema";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "../data/projects";

const heroSlides = [
  "/projects/living-faith-church.avif",
  "/projects/Bank_Projects_002.avif",
  "/projects/Bank_Projects_003.avif",
  "/projects/Bank_Projects_006.avif",
  "/projects/Bank_Projects_011.avif",
  "/projects/Bank_Projects_013.avif",
  "/projects/Construction_Projects_030.avif",
  "/projects/Construction_Projects_031.avif",
  "/projects/Construction_Projects_032.avif",
  "/projects/Construction_Projects_033.avif",
  "/projects/Construction_Projects_038.avif",
  "/projects/Construction_Projects_039.avif",
  "/projects/Construction_Projects_041.avif",
  "/projects/Construction_Projects_043.avif",
  "/projects/Estate_Projects_015.avif",
  "/projects/Estate_Projects_018.avif",
  "/projects/Estate_Projects_020.avif",
  "/projects/Estate_Projects_021.avif",
  "/projects/Estate_Projects_026.avif",
  "/projects/Estate_Projects_027.avif",
];

const isCategory = (value: string | null): value is ProjectCategory =>
  !!value && projectCategories.includes(value as ProjectCategory);

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = isCategory(searchParams.get("sector"))
    ? (searchParams.get("sector") as ProjectCategory)
    : "all";

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(initialCategory);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  useEffect(() => {
    const sector = searchParams.get("sector");
    if (isCategory(sector) && sector !== activeFilter) {
      setActiveFilter(sector);
    }
    if (!sector && activeFilter !== "all") {
      setActiveFilter("all");
    }
  }, [activeFilter, searchParams]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (value: ProjectCategory) => {
    setActiveFilter(value);
    if (value === "all") {
      setSearchParams({});
      return;
    }
    setSearchParams({ sector: value });
  };

  const categoryLabel =
    activeFilter === "all"
      ? "Construction Projects"
      : `${activeFilter.charAt(0).toUpperCase()}${activeFilter.slice(1)} Projects`;

  return (
    <>
      <Seo
        title="Construction Projects Portfolio in Nigeria | Arch-Sterix"
        description="Browse Arch-Sterix construction projects across residential, commercial, institutional, and ongoing developments in Abuja and across Nigeria."
        keywords={[
          "construction projects Nigeria",
          "Abuja construction portfolio",
          "residential projects Abuja",
          "commercial building projects Nigeria",
          "institutional construction Nigeria",
        ]}
        image="/projects/lakeview-estate.avif"
        canonicalPath="/projects"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: categoryLabel,
            about: "Construction project portfolio",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: filteredProjects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: project.title,
                  description: project.description,
                  image: absoluteSchemaUrl(project.image),
                  contentLocation: project.location,
                },
              })),
            },
          },
        ]}
      />
      <Navbar />

      <main>
        <div className="projects-page">
          <section className="projects-hero">
            <div className="hero-slideshow">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide}
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
                <h1 className="hero-title">Construction Projects Across Nigeria</h1>
                <p className="hero-subtitle">
                  Explore our portfolio of residential, commercial,
                  institutional, and ongoing developments delivered with a focus
                  on quality, safety, and long-term value.
                </p>
              </div>
            </div>

            <div className="slide-indicators">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide}
                  className={`indicator ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="projects-filter" aria-label="Project filters">
            <div className="filter-container">
              {[
                { value: "all", label: "ALL" },
                { value: "residential", label: "RESIDENTIAL" },
                { value: "commercial", label: "COMMERCIAL" },
                { value: "institutional", label: "INSTITUTIONAL" },
                { value: "ongoing", label: "ONGOING" },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  className={`filter-btn ${activeFilter === value ? "active" : ""}`}
                  onClick={() => handleFilterChange(value as ProjectCategory)}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section className="projects-grid-section" aria-labelledby="projects-grid-title">
            <div className="projects-grid-wrapper">
              <h2 id="projects-grid-title" className="sr-only">
                {categoryLabel}
              </h2>
              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="project-card">
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={`${project.title} project by Arch-Sterix in ${project.location}`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = "/projects/Construction_Projects_030.avif";
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
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
};

export default Projects;
