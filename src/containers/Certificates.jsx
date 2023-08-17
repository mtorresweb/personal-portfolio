/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import images from "../constants/images.jsx";
import AppWrap from "../wrapper/AppWrap.jsx";

const certificates = [
  {
    title: "API RESTful, Node.js",
    description: "From Udemy",
    imgUrl: images.api,
    pdf: "./api_certificate.pdf",
  },
  {
    title: "SCRUM",
    description: "From SENA",
    imgUrl: images.scrum,
    pdf: "./scrum.pdf",
  },
  {
    title: "Responsive Web Design",
    description: "From FreeCodeCamp",
    imgUrl: images.freecodecamp,
    pdf: "https://www.freecodecamp.org/certification/MichaelDev/responsive-web-design",
  },
  {
    title: "Git",
    description: "From códigofacilito",
    imgUrl: images.gitpro,
    pdf: "./git.pdf",
  },
  {
    title: "Linguaskill",
    description: "From Cambridge",
    imgUrl: images.linguaskill,
    pdf: "./linguaskill.pdf",
  },
];

const Certificates = () => {
  return (
    <div className="app__certificates">
      <motion.h2
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="head-text"
      >
        Certificates
      </motion.h2>

      <div className="app__profiles">
        {certificates.map((certificate, index) => (
          <motion.a
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={certificate.title + index}
            target="_blank"
            href={certificate.pdf}
          >
            <img src={certificate.imgUrl} alt={certificate.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {certificate.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {certificate.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Certificates, "certificates");
