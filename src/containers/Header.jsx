/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import AppWrap from "../wrapper/AppWrap.jsx";

const Header = () => {
  return (
    <div className="app__header">
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp ">
            {/* <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Michael</h1></div> */}
              <p className="p-text">⚠️ Esta es una plantilla de mi antiguo portafolio. Ya no representa mi identidad actual. Solo está disponible como ejemplo visual.</p>
              <p className="p-text" style={{marginTop: '12px'}}>⚠️ This is a template of my old portfolio. It no longer represents my current identity. It is available for visual reference only.</p>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">Junior</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="app__header-msg"
      >
        <motion.div
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="head-text text">Have a look</p>

          <p className="head-text text">
            at my <span>portfolio</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
