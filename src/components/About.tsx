import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          <span className="about-highlight highlight-primary">Software Engineering</span> student with strong expertise in <span className="about-highlight">full-stack development</span> and a growing focus on <span className="about-highlight highlight-ai">Generative AI</span>. Experienced in building scalable web applications using <span className="about-highlight">React, Next.js, and Node.js</span>, along with integrating <span className="about-highlight">RESTful APIs</span> and optimizing UI performance. Skilled in <span className="about-highlight">software architecture</span>, design patterns, and <span className="about-highlight highlight-ai">AI-driven solutions</span>, with hands-on experience in developing intelligent systems including chatbots and automation tools.
        </p>
      </div>
    </div>
  );
};

export default About;