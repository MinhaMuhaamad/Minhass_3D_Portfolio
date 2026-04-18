import { MdArrowOutward } from "react-icons/md";
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
                href=" https://www.linkedin.com/in/minha-muhammad/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn 
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
            
            <h4>Education</h4>
            <p>
              B.S. Software Engineering, FAST-NUCES 2022–Present 
            </p>
            <p>Faisalabad, Pakistan</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/MinhaMuhaamad/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/minha-muhammad/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;