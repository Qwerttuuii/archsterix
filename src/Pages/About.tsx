import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import "./About.css";
import Footer from "../Components/Footer";
import CoreValues from "../Components/CoreValues";
import TeamSection from "../Components/TeamSection";
import Seo from "../seo/Seo";
import siteConfig from "../config/SiteConfig";
import { breadcrumbSchema, organizationSchema } from "../seo/schema";

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(() => (typeof window === "undefined" ? 10 : 0));
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
      <Seo
        title="About Arch-Sterix Nigeria Limited | Construction Company in Abuja"
        description="Learn about Arch-Sterix Nigeria Limited, an Abuja-based construction and facility management company delivering design-build, project management, renovation, and infrastructure solutions across Nigeria since 2011."
        keywords={[
          "about Arch-Sterix",
          "construction company Abuja",
          "facility management company Nigeria",
          "design build firm Abuja",
          "project management company Nigeria",
        ]}
        image="/abouthero.avif"
        canonicalPath="/about"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          organizationSchema(),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Arch-Sterix Nigeria Limited",
            description:
              "About page for Arch-Sterix Nigeria Limited, a construction and facility management company headquartered in Abuja.",
            url: `${siteConfig.siteUrl}/about`,
          },
        ]}
      />
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="about-hero-overlay" />

          <div ref={heroRef} className="about-hero-content">
            <span className="about-tag">ABOUT US</span>
            <h1>
              About <span>Arch-Sterix</span>
            </h1>
            <p>
              Arch-Sterix Nigeria Limited is a fully registered construction and
              facility management company in Abuja, delivering excellence since
              2011.
            </p>
          </div>
        </section>

        <section
          className="about-section"
          ref={sectionRef}
          aria-labelledby="about-story-heading"
        >
          <div className="about-container">
            <article className={`about-left ${visible ? "show" : ""}`}>
              <span className="small-tag">Est. 2011</span>
              <h2 id="about-story-heading">Our Story</h2>
              <p>
                Arch-Sterix Nigeria Limited was established in November 2011 and
                is headquartered in Abuja. What started as a focused
                construction company has grown into a full-service design-build
                and project management firm.
              </p>
              <p>
                Over the years, we have built a strong reputation for delivering
                cost-effective, sustainable, and technically sound building
                solutions across Nigeria. We aim to be recognized as a national
                and regional leader in the industry through our strength in
                traditional construction methods and our fresh approach to
                modern delivery systems and technology.
              </p>
              <p>
                Interior construction, including metal and wood framing,
                drywall, finish work, painting, flooring, acoustic ceiling, and
                grid work, is handled in house by our own employees. This gives
                us stronger quality control and better project delivery than
                relying solely on subcontracting.
              </p>
              <p>
                Our expertise spans the construction industry spectrum, from
                smaller renovations to multi-million naira projects. We also
                specialize in healthcare and industrial facilities, commercial,
                institutional, and educational buildings, telecommunications and
                data centers, as well as infrastructure projects such as water
                and wastewater treatment plants.
              </p>
              <p>
                Our team of construction professionals offers a single-source
                solution for construction-related needs. Whether it is
                restoration, site preparation, a new facility, facility
                renovation, or design, we have the experience and personnel to
                provide high-quality outcomes on schedule and within budget.
              </p>
            </article>

            <div className={`about-right ${visible ? "show" : ""}`}>
              <img
                src="/aboutright2.avif"
                alt="Arch-Sterix team executing a commercial construction project in Nigeria"
                loading="lazy"
              />
              <div
                className="experience-box"
                aria-label={`${count}+ years of excellence`}
              >
                <h3>{count}+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mv-section" aria-labelledby="mission-vision-heading">
          <div className="mv-container">
            <div className="mv-box">
              <h2 id="mission-vision-heading">Mission and Vision</h2>
              <h3>Mission</h3>
              <p>
                To provide cost-effective, sustainable, and technically sound
                building solutions that exceed client expectations through
                teamwork, integrity, and excellence in execution.
              </p>
            </div>
            <div className="mv-box">
              <h3>Vision</h3>
              <p>
                To be recognized as a leading construction company in Nigeria
                and Africa, setting benchmarks for quality and innovation in the
                industry.
              </p>
            </div>
          </div>
        </section>

        <CoreValues />
        <TeamSection />
      </main>

      <Footer />
    </>
  );
};

export default About;
