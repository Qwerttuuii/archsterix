import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Home.css";
import siteConfig from "../config/SiteConfig";
import WhoWeAre from "../Components/WhoWeAre";
import WhatWeDo from "../Components/WhatWeDo";
import FeaturedProjects from "../Components/FeaturedProjects";
import TrustedBy from "../Components/TrustedBy";
import ConsultCTA from "../Components/ConsultCTA";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import Seo from "../seo/Seo";
import { faqItems } from "../data/faqs";
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "../seo/schema";

const stats = [
  { value: 15, suffix: "+", label: "YEARS EXPERIENCE" },
  { value: 50, suffix: "+", label: "PROJECTS COMPLETED" },
  { value: 10, suffix: "+", label: "MAJOR CLIENTS" },
  { value: 100, suffix: "%", label: "COMMITMENT" },
];

const Home = () => {
  const isServer = typeof window === "undefined";
  const [counts, setCounts] = useState(stats.map((stat) => (isServer ? stat.value : 0)));

  useEffect(() => {
    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);

      setCounts(stats.map((stat) => Math.round(stat.value * progress)));

      if (progress === 1) {
        window.clearInterval(timer);
      }
    }, frameRate);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Seo
        title="Arch-Sterix Nigeria Limited | Construction Company in Abuja"
        description="Arch-Sterix Nigeria Limited delivers construction, design-build, project management, renovation, and facility management services across Nigeria from Abuja."
        keywords={[
          "construction company Abuja",
          "design build company Nigeria",
          "facility management Abuja",
          "project management company Nigeria",
          "building contractors Abuja",
          "Arch-Sterix Nigeria Limited",
        ]}
        image={siteConfig.heroImage}
        canonicalPath="/"
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ]}
      />
      <Navbar />

      <main>
        <section
          className="hero"
          style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        >
          <div className="home-overlay"></div>

          <div className="hero-content">
            <div className="line"></div>

            <h1>
              Building Nigeria's <br />
              <span>Future, Today</span>
            </h1>

            <p>
              Arch-Sterix delivers cost-effective, sustainable construction,
              design-build, and facility management solutions with integrity and
              excellence across Nigeria.
            </p>

            <div className="hero-buttons">
              <Link className="btn-primary" to="/projects">
                VIEW OUR PROJECTS
              </Link>
              <Link className="btn-outline" to="/contact">
                GET IN TOUCH
              </Link>
            </div>
          </div>

          <div className="hero-stats" aria-label="Company performance statistics">
            {stats.map((stat, index) => (
              <div className="stat-item" key={stat.label}>
                <h2>
                  {counts[index]}
                  {stat.suffix}
                </h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <WhoWeAre />
        <WhatWeDo />
        <FeaturedProjects />
        <TrustedBy />
        <ConsultCTA />
        <FAQ />
      </main>

      <Footer />
    </>
  );
};

export default Home;
