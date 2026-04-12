import { useEffect, useRef, useState } from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Arc. David Ochigbo mnia fcism",
      role: "Founder & Managing Director",
      image: "/team/ceo.jpeg",
      bio: "With over 18 years of experience in the construction industry, David Ochigbo founded Arch-Sterix with a vision to redefine quality standards in Nigeria.",
      details: "Architect David Ochigbo holds a Master’s Degree in Architecture and is a member of several professional bodies. He is a thoroughbred Construction Professional with over 14 years working experience and extensive Project Management and Construction Site Experience, including insights of Inspection Standards, Equipment Maintenance and Construction Site Safety Regulations."
    },
    {
      id: 2,
      name: "Olowolohun Micheal Ayodele",
      role: "Project Manager, Arch Sterix Group",
      image: "/team/micheal.jpg",
      bio: " A dedicated and goal-oriented Project Manager with extensive experience in overseeing construction projects.",
      details: "  Michael holds an HND in Civil Engineering from Federal Polytechnic, Ado-Ekiti, graduating in 2003. He previously worked at Urban Shelter Ltd.He is also an active member of the Nigerian Association of Technologists in Engineering (NATE), contributing to the advancement of the engineering profession."

    },
    {
      id: 3,
      name: "Bldr. Masiyer Bitrus",
      role: "Site Engineer, Arch Sterix Group",
      image: "/team/bitrus.jpg",
      bio: "A detail oriented Site Engineer at Arch-Sterix Group, known for his precision, professionalism, and commitment to excellence.",
      details: "Masiyer Bitrus has a strong foundation in Building Technology from Covenant University, he brings valuable experience across residential, commercial, and infrastructure projects.He has contributed to the successful delivery of high-quality developments, combining technical depth with a keen eye for execution and detail."
    },
    {
      id: 4,
      name: "Praise Igbudu",
      role: "Creative Social Media Manager",
      image: "/team/praise.jpeg",
      bio: "Committed to building engaging digital communities and elevating brand presense online. ",
      details: "Aisha holds a PhD in Environmental Safety and has implemented industry-leading HSE systems that have significantly improved safety performance company-wide."
    },

    {
        id: 5,
        name: "Ann Ozioma Okeke",
        role: "Executive Assistant, Arch Sterix Group",
        image: "/team/ann.jpg",
        bio: "Ann Ozioma Okeke  is an organized and proactive Executive Assistant focused on enhancing operational efficiency. With a strong background in administrative support and project management,",
        details: "At Arch-Sterix NIG. LTD, Ann manages executive schedules, coordinates meetings, and collaborates with teams to facilitate smooth operations. Her attention to detail and ability to anticipate needs make her a crucial part of the organization."
    },
  
];


  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className={`team-header ${visible ? "show" : ""}`}>
          <h2 className="team-title">The Architects of Progress</h2>
          <p className="team-subtitle">
            Our leadership team brings together decades of combined expertise in construction, 
            engineering, and project management.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`team-card ${visible ? "show" : ""} ${expandedId === member.id ? "expanded" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="team-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x700/1a1a1a/c9a646?text=Team+Member";
                  }}
                />
                <div className="team-overlay">
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>

                <button 
                  className="read-more-btn"
                  onClick={() => toggleExpand(member.id)}
                >
                  {expandedId === member.id ? "Show Less" : "Read More"}
                  <span className={`line ${expandedId === member.id ? "expanded" : ""}`}></span>
                </button>

                <div className={`expanded-content ${expandedId === member.id ? "open" : ""}`}>
                  <p>{member.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;