import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-divider"></div>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
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
                
              </div>
              <h3>2025</h3>
            </div>
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
        </div>
      </div>
    </div>
  );
};
export default Career;