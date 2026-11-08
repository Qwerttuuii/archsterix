import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectProgress.css";

/* ─────────────────────────────────────────────
   EDIT THESE: everything on the section lives here.
   Put your video in /public (for example /public/progress.mp4).
   ───────────────────────────────────────────── */
const project = {
  eyebrow: "Project Update",
  titleTop: "The",
  titleAccent: "Chambéry",
  location: "Dawaki · Abuja",
  description:
    "A New Standard of Sophisticated Urban Living, a premium residential development crafted for individuals and families who desire more than just a house",

  // Construction progress, 0 to 100.
  progressLabel: "Construction progress",
  progress: 30,
  status: "Currently: Ground floor in progress",

  video: "/advid.mp4",
  poster: "/chambery.avif", // shown until the video loads. Set to "" to skip.
  videoTag: "Site update · November 2026",
  videoLabel: "Video of the latest construction progress on site",

  stats: [
    { value: "8", label: "Exclusive homes" },
    { value: "240", label: "SQM floor area" },
    { value: "170", label: "SQM per plot" },
  ],

  primaryCta: { label: "Make Enquries", to: "/contact" },
  secondaryCta: { label: "View More Projects", to: "/projects" },
};

const ProjectProgress = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);

  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const progress = Math.max(0, Math.min(100, project.progress));

  // Fill the progress bar the first time the section scrolls into view.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Play the video only while it is on screen. Pause it when it scrolls away.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current && !reduceMotion) {
            video.play().catch(() => {
              // Autoplay can be blocked. The play button still works.
            });
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="pp-section" ref={sectionRef} aria-labelledby="pp-title">
      <div className="pp-inner">
        <div className="pp-copy">
          <p className="pp-eyebrow">{project.eyebrow}</p>

          <h2 id="pp-title" className="pp-title">
            <span>{project.titleTop}</span>
            <span className="pp-title-accent">{project.titleAccent}</span>
          </h2>

          <p className="pp-location">{project.location}</p>
          <p className="pp-description">{project.description}</p>

          <div className="pp-progress">
            <div className="pp-progress-head">
              <span>{project.progressLabel}</span>
              <strong>{progress}%</strong>
            </div>
            <div
              className="pp-track"
              role="progressbar"
              aria-label={project.progressLabel}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <span
                className="pp-fill"
                style={{ transform: `scaleX(${inView ? progress / 100 : 0})` }}
              />
            </div>
            <p className="pp-status">{project.status}</p>
          </div>

          <div className="pp-stats">
            {project.stats.map((stat) => (
              <div className="pp-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="pp-actions">
            <Link className="pp-btn-primary" to={project.primaryCta.to}>
              {project.primaryCta.label} -&gt;
            </Link>
            <Link className="pp-btn-link" to={project.secondaryCta.to}>
              {project.secondaryCta.label} -&gt;
            </Link>
          </div>
        </div>

        <div className="pp-media">
          <div className="pp-video-frame">
            <video
              ref={videoRef}
              className="pp-video"
              src={project.video}
              poster={project.poster || undefined}
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={project.videoLabel}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <div className="pp-video-shade" />

            <span className="pp-video-tag">{project.videoTag}</span>

            <div className="pp-controls">
              <button
                type="button"
                className="pp-control"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M8 5v14M16 5v14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                className="pp-control"
                onClick={toggleMute}
                aria-label={muted ? "Turn sound on" : "Turn sound off"}
                aria-pressed={!muted}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor" />
                  {muted ? (
                    <path d="M16 9.5l5 5M21 9.5l-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <path d="M15.5 9a4 4 0 010 6M18 6.5a8 8 0 010 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProgress;