import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Contact.css";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Seo from "../seo/Seo";
import siteConfig from "../config/SiteConfig";
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
} from "../seo/schema";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("hero-animate");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const newErrors = {
      name: name ? "" : "Full name is required",
      email: email && email.includes("@") ? "" : "Enter a valid email",
      message: message ? "" : "Message cannot be empty",
    };

    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message) return;

    setLoading(true);

    const res = await fetch("https://formspree.io/f/xaqlrjwy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  };

  return (
    <>
      <Seo
        title="Contact Arch-Sterix Nigeria Limited | Abuja Construction Company"
        description="Contact Arch-Sterix Nigeria Limited in Abuja for construction, design-build, facility management, renovation, and project management enquiries across Nigeria."
        keywords={[
          "contact construction company Abuja",
          "Arch-Sterix contact",
          "Abuja project management company contact",
          "facility management Abuja contact",
        ]}
        image="/hero-contactus.jpg"
        canonicalPath="/contact"
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Arch-Sterix Nigeria Limited",
            url: `${siteConfig.siteUrl}/contact`,
          },
        ]}
      />
      <Navbar />

      <main>
        <section
          className="contact-hero"
          style={{ backgroundImage: `url("/hero-contactus.avif")` }}
        >
          <div className="contact-overlay" />
          <div ref={heroRef} className="hero-content">
            <span className="tag">CONTACT US</span>
            <h1>
              Let&apos;s Build <span>Something Great</span>
            </h1>
            <p>Tell us about your project and our team will take it from there.</p>
          </div>
        </section>

        <section className="contact-section" ref={sectionRef}>
          <div className="contact-container">
            <div className={`contact-left ${visible ? "show" : ""}`}>
              <h2>
                Get In <span>Touch</span>
              </h2>
              <p>
                Whether you&apos;re planning a project or just exploring ideas,
                our team is here to guide you every step of the way.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <FiMapPin className="icon" />
                  <div>
                    <h4>Our Office</h4>
                    <p>
                      {siteConfig.streetAddress}, {siteConfig.city}
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <FiPhone className="icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href={`tel:${siteConfig.phone}`}>080-9895-1904</a>
                    </p>
                    <p>
                      <a href={`tel:${siteConfig.alternatePhone}`}>080-3595-1904</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <FiMail className="icon" />
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`contact-right ${visible ? "show" : ""}`}>
              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder=" "
                    className={errors.name ? "error" : ""}
                  />
                  <label htmlFor="contact-name">Full Name</label>
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="input-group">
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder=" "
                    className={errors.email ? "error" : ""}
                  />
                  <label htmlFor="contact-email">Email Address</label>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="input-group textarea-group">
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder=" "
                    className={errors.message ? "error" : ""}
                  />
                  <label htmlFor="contact-message">Your Message</label>
                  {errors.message && (
                    <span className="error-text">{errors.message}</span>
                  )}
                </div>

                <button className="btn-send" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="success-msg">Message sent successfully.</p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5!2d7.4265!3d9.058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1f!2sDawaki+Extension!5e0!3m2!1sen!2sng!4v1720000000000"
              loading="lazy"
              title="Arch-Sterix Office Location"
            />
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Arch-Sterix on WhatsApp"
      >
        Chat
      </a>

      <Footer />
    </>
  );
};

export default Contact;
