import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Residential Construction",
      desc: "We build modern, comfortable, and durable homes and estates with attention to detail and quality craftsmanship.",
      image: "/services/residential.jpg",
      reverse: false
    },
    {
      id: 2,
      title: "Commercial Projects",
      desc: "Office buildings, banks, shopping complexes, and other commercial structures designed for functionality and business success.",
      image: "/services/commercial.jpg",
      reverse: true
    },
    {
      id: 3,
      title: "Project Management",
      desc: "End-to-end project management from planning and design through to successful completion and handover.",
      image: "/services/project-management.jpg",
      reverse: false
    },
    {
      id: 4,
      title: "Facility Management",
      desc: "Long-term maintenance, optimization, and management of buildings and infrastructure for maximum value and performance.",
      image: "/services/facility.jpg",
      reverse: true
    },
    {
      id: 5,
      title: "Renovation & Remodeling",
      desc: "Expert renovation and transformation of existing structures to meet modern standards and client requirements.",
      image: "/services/renovation.jpg",
      reverse: false
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Delivering excellence in construction and project management across Nigeria.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        {serviceData.map((service) => (
          <div 
            key={service.id} 
            className={`service-row ${service.reverse ? 'reverse' : ''}`}
          >
            <div className="service-image">
              <img 
                src={service.image} 
                alt={service.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600/1a1a1a/c9a646?text=" + encodeURIComponent(service.title);
                }}
              />
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <button className="learn-more-btn">Learn More →</button>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Services;