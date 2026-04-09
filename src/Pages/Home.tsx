import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Home.css";
import siteConfig from "../config/SiteConfig";

const stats = [
  { value: 13, suffix: "+", label: "YEARS EXPERIENCE" },
  { value: 50, suffix: "+", label: "PROJECTS COMPLETED" },
  { value: 10, suffix: "+", label: "MAJOR CLIENTS" },
  { value: 100, suffix: "%", label: "COMMITMENT" },
];

const Home = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);

      setCounts(
        stats.map((stat) => Math.round(stat.value * progress))
      );

      if (progress === 1) {
        window.clearInterval(timer);
      }
    }, frameRate);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <section
        className="hero"
        style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <div className="line"></div>

          <h1>
            Building Nigeria’s <br />
            <span>Future, Today</span>
          </h1>

          <p>
            Quality is long remembered after price is forgotten. We deliver
            cost-effective, sustainable building solutions with integrity and excellence.
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

        {/* Stats */}
        <div className="hero-stats">
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
    </>
  );
};

export default Home;
