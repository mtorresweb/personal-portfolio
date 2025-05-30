/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import images from "../constants/images.jsx";
import AppWrap from "../wrapper/AppWrap.jsx";

const certificates = [
  {
    title: "API RESTful, Node.js",
    description: "From Udemy",
    imgUrl: images.gold,
    pdf: "./sample.pdf",
  },
  {
    title: "SCRUM",
    description: "From SENA",
    imgUrl: images.gold,
    pdf: "./sample.pdf",
  },
  {
    title: "Responsive Web Design",
    description: "From FreeCodeCamp",
    imgUrl: images.gold,
    pdf: "./sample.pdf",
  },
  {
    title: "Git",
    description: "From códigofacilito",
    imgUrl: images.gold,
    pdf: "./sample.pdf",
  },
  {
    title: "Linguaskill",
    description: "From Cambridge",
    imgUrl: images.gold,
    pdf: "./sample.pdf",
  },
];

const Certificates = () => {
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="app__certificates"
    >
      <h2 className="head-text">Certificates</h2>

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
    </motion.div>
  );
};

export default AppWrap(Certificates, "certificates");
