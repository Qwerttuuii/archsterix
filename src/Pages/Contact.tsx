import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Contact.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

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
      <Navbar />

      {/* HERO */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url("/hero-contactus.jpg")` }}
      >
        <div className="contact-overlay" />
        <div ref={heroRef} className="hero-content">
          <span className="tag">CONTACT US</span>
          <h1>
            Let's Build <span>Something Great</span>
          </h1>
          <p>Tell us about your project, we'll handle the rest.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" ref={sectionRef}>
        <div className="contact-container">

          {/* LEFT */}
          <div className={`contact-left ${visible ? "show" : ""}`}>
            <h2>Get In <span>Touch</span></h2>
            <p>
              Whether you're planning a project or just exploring ideas,
              our team is here to guide you every step of the way.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <FiMapPin className="icon" />
                <div>
                  <h4>Our Office</h4>
                  <p>No. 11 Abiodun Anofi Street, Dawaki Extension, Abuja</p>
                </div>
              </div>

              <div className="info-item">
                <FiPhone className="icon" />
                <div>
                  <h4>Phone</h4>
                  <p>080-9895-1904</p>
                  <p>080-3595-1904</p>
                </div>
              </div>

              <div className="info-item">
                <FiMail className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@archsterixgroup.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={`contact-right ${visible ? "show" : ""}`}>
            <form onSubmit={handleSubmit} noValidate>

              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  className={errors.name ? "error" : ""}
                />
                <label>Full Name</label>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className={errors.email ? "error" : ""}
                />
                <label>Email Address</label>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="input-group textarea-group">
                <textarea
                  name="message"
                  placeholder=" "
                  className={errors.message ? "error" : ""}
                />
                <label>Your Message</label>
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
              </div>

              <button className="btn-send" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="success-msg">✓ Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
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

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/2348098951904"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      <Footer />
    </>
  );
};

export default Contact;
