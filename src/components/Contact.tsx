import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/minha-ghulam-muhammad"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — minha-ghulam-muhammad
              </a>
            </p>
            <p>
              <a
                href="mailto:minhaghulammuhammad@gmail.com"
                data-cursor="disable"
              >
                minhaghulammuhammad@gmail.com
              </a>
            </p>
            <p>03146842477</p>
            <h4>Education</h4>
            <p>
              B.S. Software Engineering, FAST-NUCES — 2022–Present (8th Semester)
            </p>
            <p>Faisalabad, Pakistan</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/minha-ghulam-muhammad"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Minha Ghulam Muhammad</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;