import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url("/hero-contactus.jpg")` }}
      >
        <div className="overlay" />

        <div className="hero-content">
          <span className="tag">CONTACT</span>

          <h1>
            Let’s Talk About <br />
            <span>Your Project</span>
          </h1>

          <p>
            Have a project in mind? Reach out and let’s create something exceptional together.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" ref={sectionRef}>
        <div className="contact-container">

          {/* LEFT */}
          <div className={`contact-left ${visible ? "show" : ""}`}>
            <h2>
              Get In <span>Touch</span>
            </h2>

            <p>
              We’d love to hear from you. Whether it’s a new project, partnership,
              or general inquiry our team is ready.
            </p>

            <div className="contact-info">

              <div className="info-item">
             <FiMapPin className="icon" />
                <div>
                  <h4>Address</h4>
                  <p>No. 11 Abiodun Anofi Street, Abuja</p>
                </div>
              </div>
              
            <div className="info-item">
                <FiPhone className="icon" />
                <div>
                  <h4>Phone</h4>
                  <p>080-9895-1904</p>
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
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

              <div className="input-group">
                <input type="text" name="name" required />
                <label>Full Name</label>
              </div>

              <div className="input-group">
                <input type="email" name="email" required />
                <label>Email Address</label>
              </div>

              <div className="input-group">
                <textarea name="message" required />
                <label>Your Message</label>
              </div>

              <button className="btn-send">Send Message</button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;