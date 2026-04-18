import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <section className="whatIDO" id="whatido">
      <div className="what-box">
        <div className="what-box-in">
          <h2>
            What <span className="hat-h2">I</span> <span className="do-h2">Do</span>
          </h2>

          <div className="what-content what-content-active">
            <div className="what-content-in">
              <h5>Focused On</h5>
              <h3>Modern web experiences powered by React</h3>
              <p>
                I build clean, responsive interfaces with animation, 3D visuals,
                and interactive design. My work combines frontend performance
                with thoughtful UX to deliver portfolio-grade applications.
              </p>
              <div className="what-content-flex">
                <span className="what-tags">React</span>
                <span className="what-tags">TypeScript</span>
                <span className="what-tags">Three.js</span>
                <span className="what-tags">GSAP</span>
              </div>
            </div>
            <div className="what-arrow" aria-hidden="true" />
            <div className="what-border1" />
            <div className="what-border2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

  