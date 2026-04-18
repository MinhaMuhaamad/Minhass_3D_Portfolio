<<<<<<< HEAD
import "./styles/Career.css";
=======
// Career.tsx  –  updated timeline: 2024 → 2025 → 2026 (top to bottom)
// The most recent entry (2026) sits at the bottom where the glowing dot lives.

const careerData = [
  {
    year: "2024",
    role: "WordPress Developer",
    company: "Internee.Pk",
    description:
      "Integrated RESTful APIs to render live data inside WordPress themes. Customised plugins, enforced cross-browser consistency, and shipped client-facing sites with measurably faster load times.",
    className: "career-past",
  },
  {
    year: "2025",
    role: "Frontend Developer",
    company: "Internee.Pk",
    description:
      "Architected and optimised React SPAs with dynamic, data-driven UIs. Partnered with senior engineers to translate Figma designs into pixel-precise, production-ready components.",
    className: "career-past",
  },
  {
    year: "2026 — NOW",
    role: "Full Stack Developer",
    company: "Freelance / Open Source",
    description:
      "Building full-stack products with Next.js, Node.js, and MongoDB while shipping AI-integrated features using LLM APIs. Actively contributing to open-source and taking on client projects end-to-end.",
    className: "career-current",
  },
];

>>>>>>> 9c93a202011d4042f5f88c054bf460cd26cb9b82
const Career = () => {
  return (
    <section className="career-section">
      <h2>
        My career &amp; <span>experience</span>
      </h2>

      <div className="career-container">
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
<<<<<<< HEAD
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering</h4>
                <h5>FAST-NUCES, Faisalabad</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Currently enrolled in the 8th semester of Software Engineering at
              FAST-NUCES. Coursework covers software architecture, design patterns,
              Agile development, UML modeling, test automation, and AI-driven systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Internee.pk</h5>
=======

          {careerData.map((item) => (
            <div
              key={item.year}
              className={`career-info-box ${item.className}`}
            >
              {/* Left column: role + company */}
              <div className="career-info-in">
                <div>
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
>>>>>>> 9c93a202011d4042f5f88c054bf460cd26cb9b82
              </div>

              {/* Right column: description */}
              <p>{item.description}</p>
            </div>
<<<<<<< HEAD
            <p>
              Developed and optimized React-based web applications, enhancing UI
              performance and implementing dynamic features using JavaScript.
              Collaborated with senior engineers to deliver responsive, production-ready
              interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WordPress Developer</h4>
                <h5>Internee.pk</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Integrated RESTful APIs to display dynamic data in real time. Gained
              hands-on experience with WordPress themes and plugins. Enhanced
              cross-browser compatibility and optimized front-end performance for
              live client sites.
            </p>
          </div>
=======
          ))}
>>>>>>> 9c93a202011d4042f5f88c054bf460cd26cb9b82
        </div>
      </div>
    </section>
  );
};
export default Career;