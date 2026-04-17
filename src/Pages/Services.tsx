import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Services.css";
import Seo from "../seo/Seo";
import { services } from "../data/services";
import { absoluteSchemaUrl, breadcrumbSchema, organizationSchema } from "../seo/schema";

const Services = () => {
  return (
    <>
      <Seo
        title="Construction Services in Abuja and Nigeria | Arch-Sterix"
        description="Explore Arch-Sterix services including residential construction, commercial projects, project management, facility management, renovation, remodeling, and engineering solutions across Nigeria."
        keywords={[
          "construction services Abuja",
          "residential construction Nigeria",
          "commercial construction Abuja",
          "facility management Nigeria",
          "project management services Nigeria",
          "engineering solutions Abuja",
        ]}
        image="/services/banner.jpg"
        canonicalPath="/services"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Construction Services",
            url: "https://archsterixgroup.com/services",
            hasPart: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.desc,
              provider: {
                "@type": "Organization",
                name: "Arch-Sterix Nigeria Limited",
              },
              areaServed: "Nigeria",
              image: absoluteSchemaUrl(service.image),
            })),
          },
        ]}
      />
      <Navbar />

      <main>
        <section className="services-hero">
          <div className="services-hero-content">
            <h1>Construction, Design-Build, and Facility Services</h1>
            <p>
              Arch-Sterix delivers end-to-end construction, project management,
              renovation, and engineering services across Nigeria.
            </p>
          </div>
        </section>

        <section className="services-list" aria-label="Service offerings">
          {services.map((service) => (
            <article
              key={service.id}
              className={`service-row ${service.reverse ? "reverse" : ""}`}
            >
              <div className="service-image">
                <img
                  src={service.image}
                  alt={`${service.title} by Arch-Sterix Nigeria Limited`}
                  loading="lazy"
                />
              </div>

              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <Link to="/projects" className="learn-more-btn">
                  Explore Related Projects
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
