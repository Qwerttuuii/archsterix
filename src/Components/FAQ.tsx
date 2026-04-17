import { useEffect, useRef, useState } from "react";
import "./FAQ.css";
import { faqItems } from "../data/faqs";

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" ref={sectionRef} aria-labelledby="faq-title">
      <div className="faq-container">
        <div className={`faq-header ${visible ? "show" : ""}`}>
          <h2 className="faq-title" id="faq-title">
            Frequently Asked Questions
          </h2>
          <div className={`faq-underline ${visible ? "line-show" : ""}`}></div>
        </div>

        <div className="faq-list">
          {faqItems.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
                id={`faq-answer-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
