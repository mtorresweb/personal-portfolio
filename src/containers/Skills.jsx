/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import images from "../constants/images";

import AppWrap from "../wrapper/AppWrap.jsx";

const experiences = [
  {
    year: 2023,
    works: [
      {
        name: "Studying and developing personal projects",
        company: "",
        desc: "While I may lack traditional work experience, I have been developing personal projects to improve my skills and expand my knowledge. These projects have provided me with valuable hands-on experience, allowing me to apply the concepts and technologies I have learned in real-world scenarios.",
      },
    ],
  },
];

const skills = [
  {
    name: "Javascript",
    bgColor: "#e9ecef",
    icon: images.javascript,
  },
  {
    name: "Git",
    bgColor: "#e9ecef",
    icon: images.git,
  },
  {
    name: "Node js",
    bgColor: "#e9ecef",
    icon: images.node,
  },
  {
    name: "React",
    bgColor: "#e9ecef",
    icon: images.react,
  },
  {
    name: "HTML",
    bgColor: "#e9ecef",
    icon: images.html,
  },
  {
    name: "CSS",
    bgColor: "#e9ecef",
    icon: images.css,
  },
  {
    name: "PostgreSQL",
    bgColor: "#e9ecef",
    icon: images.postgresql,
  },
  {
    name: "MongoDB",
    bgColor: "#e9ecef",
    icon: images.mongodb,
  },
  {
    name: "MySQL",
    bgColor: "#e9ecef",
    icon: images.mysql,
  },
  {
    name: "Express",
    bgColor: "#e9ecef",
    icon: images.express,
  },
  {
    name: "Redux Toolkit",
    bgColor: "#e9ecef",
    icon: images.redux,
  },
];

const Skills = () => {
  return (
    <>
      <motion.h2
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        id="skills-title"
        className="head-text"
      >
        Skills & Experiences
      </motion.h2>

      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="app__skills-container"
      >
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="app__skills-exp"
        >
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text works-year">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text work-name">{work.name}</h4>
                      <p className="p-text work-company">{work.company}</p>

                      <p className="p-text work-desc">{work.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default AppWrap(Skills, "skills");
