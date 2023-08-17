/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import AppWrap from "../wrapper/AppWrap.jsx";
import Typed from "react-typed";
import { useState } from "react";

const Header = () => {
  const [showNextLine, setShowNextLine] = useState(false);

  const changeLine = () => {
    const typedCursor = document.querySelector(".typed-cursor");
    typedCursor?.classList.replace("typed-cursor", "typed-cursor-transparent");
    setShowNextLine(true);
  };

  return (
    <div className="app__header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Michael</h1>
            </div>
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
        <div>
          <Typed
            typeSpeed={100}
            strings={["Have a look"]}
            contentType={"html"}
            onComplete={changeLine}
          >
            <p className="head-text text">Have a look</p>
          </Typed>

          {showNextLine && (
            <Typed
              typeSpeed={100}
              contentType={"html"}
              strings={["at my <span>portfolio</span>"]}
            >
              <p className="head-text text">
                at my <span>portfolio</span>
              </p>
            </Typed>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
