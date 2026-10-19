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
          <div className="career-info-box career-current">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Full Stack Developer</h4>
                <h5>Webix Solutions</h5>
              </div>
              <div className="career-date-box">
                <h3>2026</h3>
                <span className="career-date-badge">August 2026 – Present</span>
              </div>
            </div>
            <p>
              • Engineered production-ready web applications by building responsive frontend interfaces and robust backend APIs, ensuring seamless full-stack performance across all devices.
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