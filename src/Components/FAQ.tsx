import { useEffect, useRef, useState } from "react";
import "./FAQ.css";

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

  const faqs = [
    {
      question: "What types of projects does Arch-Sterix handle?",
      answer: "We specialize in residential estates, commercial buildings, institutional structures, and facility management projects across Nigeria."
    },
    {
      question: "Do you offer design-build services?",
      answer: "Yes. We provide end-to-end design-build solutions from concept through completion, including pre-construction planning and post-construction support."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration varies based on scope and complexity. We provide detailed timelines during the consultation phase with realistic milestones."
    },
    {
      question: "Are you available for projects outside Abuja?",
      answer: "Yes. We undertake projects nationwide across Nigeria with our experienced team and strong project management systems."
    },
    {
      question: "What makes Arch-Sterix different from other construction companies?",
      answer: "Our commitment to uncompromising quality, transparency, and timely delivery. We believe quality is long remembered after price is forgotten."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-container">
        <div className={`faq-header ${visible ? "show" : ""}`}>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className={`faq-underline ${visible ? "line-show" : ""}`}></div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>+</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
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