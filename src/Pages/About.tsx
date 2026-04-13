import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import "./About.css";
import Footer from "../Components/Footer";
import CoreValues from "../Components/CoreValues";
import TeamSection from "../Components/TeamSection";



const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("hero-animate");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;
    let start = 0;
    const end = 10;
    const duration = 1000;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [startCount]);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        {/* renamed from .overlay to .about-hero-overlay */}
        <div className="about-hero-overlay" />

        <div ref={heroRef} className="about-hero-content">
          {/* renamed from .tag to .about-tag */}
          <span className="about-tag">ABOUT US</span>
          <h1>
            About <span>Arch-Sterix</span>
          </h1>
          <p>
            A fully registered construction and facility management company
            delivering excellence since 2011.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section" ref={sectionRef}>
        <div className="about-container">

          <div className={`about-left ${visible ? "show" : ""}`}>
            <span className="small-tag">Est. 2011</span>
            <h2>Our Story</h2>
            <p>
              Arch-Sterix Nigeria Limited was established in November 2011 and
              is headquartered in Abuja. What started as a focused construction
              company has grown into a full-service design build and project
              management firm.
            </p>
            <p>
              Over the years, we have built a strong reputation for delivering
              cost-effective, sustainable, and technically sound building
              solutions across Nigeria. We hope to be recognized as a national
              and subsequently, regional leader in the industry, for our strength
              in traditional construction methods and for our creative, fresh
              approach to cutting edge technologies and delivery systems.
            </p>
            <p>
              Interior construction, including metal and wood framing, drywall,
              finish work, painting, flooring, acoustic ceiling and grid are done
              in house, with our own employees. This gives us an edge over the
              competition since we have control that just can't be obtained
              through subcontracting to other companies.
            </p>
            <p>
              Our expertise spans the construction industry spectrum, from smaller
              renovations to multi-million naira projects. We also specialize in
              healthcare and industrial facilities, commercial, institutional and
              educational buildings, telecommunications and data centers, as well
              as infrastructure projects such as water and waste water treatment plants.
            </p>
            <p>
              Our team of construction professionals offers a single source
              solution for all of your construction related needs. Whether its
              restoration, site preparation, a new facility or facility renovation,
              or design, we have the experience and personnel to provide the highest
              quality designs as well as construction on schedule and within budget.
            </p>
          </div>

          <div className={`about-right ${visible ? "show" : ""}`}>
            <img src="/aboutright2.jpg" alt="Arch-Sterix construction site" />
            <div className="experience-box">
              <h3>{count}+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section">
        <div className="mv-container">
          <div className="mv-box">
            <h3>Mission</h3>
            <p>
              To provide cost-effective, sustainable, and technically sound
              building solutions that exceed client expectations through teamwork,
              integrity and excellence in execution.
            </p>
          </div>
          <div className="mv-box">
            <h3>Vision</h3>
            <p>
              To be recognized as a leading construction company in Nigeria and
              Africa, setting benchmarks for quality and innovation in the industry.
            </p>
          </div>
        </div>
      </section>

      <CoreValues />
      <TeamSection />
      
      <Footer />
    </>
  );
};

export default About;
