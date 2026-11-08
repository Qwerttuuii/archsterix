import { useCallback, useEffect, useRef, useState } from "react";
import "./AdModal.css";

type AdSlide = {
  image: string;
  title: string;
  text: string;
};

/* ─────────────────────────────────────────────
   EDIT THESE: your slideshow images and texts.
   Images live in /public, so use paths like "/hero1.avif".
   (These three are placeholders using files already in /public.)
   ───────────────────────────────────────────── */
const slides: AdSlide[] = [
  {
    image: "/wakana.jpg",
    title: "The wānaka Modern Living. Lasting Value.",
    text: "12 exclusive 4-bedroom + BQ semi-detached triplex residences on a serene 6,000 sqm gated estate.",
  },
  {
    image: "/ad3.jpeg",
    title: "A New Standard, Already in Sight",
    text: "The Chambéry, Dawaki a refined residential development by Arch-Sterix Nigeria Limited that redefines modern living in Abuja.",
  },
  {
    image: "/ad2.jpeg",
    title: "ArchSterix Facilities Management Ad (O&M Services)",
    text: "At Arch-Sterix Facilities Management Company Ltd, we deliver comprehensive Operations & Maintenance (O&M) solutions that protect your investment and maximise performance.",
  },
];

/* ── Settings ── */
// Time before the modal closes by itself. Set to null to keep it open until the user clicks X.
const AUTO_CLOSE_MS: number | null = 5000;
// How long each slide stays on screen.
const SLIDE_INTERVAL_MS = 1700;
// Must match the fade-out duration in AdModal.css.
const FADE_OUT_MS = 350;
// sessionStorage key: the modal shows once per browser session.
const STORAGE_KEY = "arch-sterix-ad-seen";

const AdModal = () => {
  // Starts closed so the server render and the first client render match.
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [active, setActive] = useState(0);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);
  const leaveTimerRef = useRef<number | undefined>(undefined);

  // Decide whether to show the modal (client only, once per session).
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage can be blocked (private mode, strict settings). Show the modal anyway.
    }
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setLeaving(true);
    leaveTimerRef.current = window.setTimeout(() => setOpen(false), FADE_OUT_MS);
  }, []);

  // While open: lock page scroll, listen for Escape, run the slideshow and the auto-close timer.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    const autoCloseTimer =
      AUTO_CLOSE_MS === null ? undefined : window.setTimeout(close, AUTO_CLOSE_MS);

    const slideTimer =
      slides.length > 1
        ? window.setInterval(
            () => setActive((index) => (index + 1) % slides.length),
            SLIDE_INTERVAL_MS
          )
        : undefined;

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(autoCloseTimer);
      window.clearInterval(slideTimer);
    };
  }, [open, close]);

  // Clear the fade-out timer if the component unmounts mid-fade.
  useEffect(() => {
    return () => window.clearTimeout(leaveTimerRef.current);
  }, []);

  if (!open) return null;

  return (
    <div
      className={`adm-backdrop${leaving ? " adm-leaving" : ""}`}
      onClick={close}
      role="presentation"
    >
      <div
        className="adm-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Featured announcement"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="adm-close"
          aria-label="Close announcement"
          onClick={close}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M5 5l14 14M19 5L5 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="adm-stage">
          {slides.map((slide, index) => (
            <div
              key={slide.title + index}
              className={`adm-slide${index === active ? " adm-slide-active" : ""}`}
              aria-hidden={index !== active}
            >
              <img src={slide.image} alt="" />
              <div className="adm-shade" />
              <div className="adm-caption">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <div className="adm-dots" aria-hidden="true">
            {slides.map((slide, index) => (
              <span
                key={slide.title + index}
                className={`adm-dot${index === active ? " adm-dot-active" : ""}`}
              />
            ))}
          </div>
        )}

        {AUTO_CLOSE_MS !== null && (
          <div className="adm-progress" aria-hidden="true">
            <span style={{ animationDuration: `${AUTO_CLOSE_MS}ms` }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdModal;