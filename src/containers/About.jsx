/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import AppWrap from "../wrapper/AppWrap.jsx";
import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function About() {
  return (
    <div className="app__about-container">
      <div className="left">
        <div className="cube-loader">
          <div className="cube-top">
            <span className="text">
              <div className="content">About</div>
            </span>
          </div>
          <div className="cube-wrapper">
            <span style={{ "--i": 0 }} className="cube-span">
              <span className="text">
                <div className="content">About</div>
              </span>
            </span>
            <span style={{ "--i": 1 }} className="cube-span">
              <span className="text">
                <div className="content">About</div>
              </span>
            </span>
            <span style={{ "--i": 2 }} className="cube-span">
              <span className="text">
                <div className="content">About</div>
              </span>
            </span>
            <span style={{ "--i": 3 }} className="cube-span">
              <span className="text">
                <div className="content">About</div>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="text">
          <h2 id="about-title" className="head-text">
            About me
          </h2>
          <p id="about-text" className="p-text">
            I am a passionate and dedicated Full Stack junior developer with
            proficiency in building robust and scalable web applications. My
            skill set includes proficiency in JavaScript, Node.js, Express, SQL,
            and MongoDB for developing powerful backend systems. On the
            frontend, I utilize the power of JavaScript and React to create
            engaging and intuitive user interfaces.
          </p>
        </div>
        <div className="links">
          <a id="resume" href="./resume.pdf" target="_blank">
            Download CV
          </a>
          <div className="contact-links">
            <a
              className="app__social-item"
              href="https://github.com/mtorresweb"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="app__social-item"
              href="https://api.whatsapp.com/send?phone=573106058963"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a className="app__social-item" href="mailto:hello@mtorresweb.me">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(About, "about");
