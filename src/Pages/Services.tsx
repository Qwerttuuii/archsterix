import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Residential Construction",
      desc: "We build modern, comfortable, and enduring homes and estates with exceptional attention to detail and superior craftsmanship. Every project is carefully designed to combine functionality, aesthetics, and long-term durability, creating living spaces that families are proud to call home.",
      image: "/services/residential.jpg",
      reverse: false
    },
    {
      id: 2,
      title: "Commercial Projects",
      desc: "We deliver high-quality commercial buildings including offices, banks, shopping complexes, and business facilities tailored to meet the specific needs of growing enterprises. Our commercial projects combine architectural excellence with practical functionality to create spaces that enhance productivity and brand presence.",
      image: "/services/commercial.jpg",
      reverse: true
    },
    {
      id: 3,
      title: "Project Management",
      desc: "We provide comprehensive project management services from initial planning through to successful handover. Our experienced team ensures that every project is delivered on time, within budget, and to the highest quality standards through meticulous planning, risk management, and continuous coordination.",
      image: "/services/project-management.jpg",
      reverse: false
    },
    {
      id: 4,
      title: "Facility Management",
      desc: "We offer professional facility management services focused on maintaining and optimizing buildings for long-term performance and value. Our approach ensures that properties remain efficient, safe, and comfortable throughout their lifecycle through proactive maintenance and strategic asset management.",
      image: "/services/facility.jpg",
      reverse: true
    },
    {
      id: 5,
      title: "Renovation & Remodeling",
      desc: "We specialize in transforming existing structures through expert renovation and remodeling that blend modern functionality with timeless design. Whether it’s updating an old building or completely reimagining a space, we deliver thoughtful solutions that breathe new life into properties.",
      image: "/services/renovation.jpg",
      reverse: false
    },
    {
      id: 6,
      title: "Engineering Solutions",
      desc: "We provide innovative structural, mechanical, electrical, and plumbing (MEP) engineering solutions tailored to meet the complex demands of modern construction. Our engineering team works closely with clients to develop smart, efficient, and technically sound solutions for every project.",
      image: "/services/engineeringsolutions.jpg",
      reverse: true
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
              
              {/* Updated Learn More Button - Links to Projects Page */}
              <Link to="/projects" className="learn-more-btn">
                Explore More →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Services;