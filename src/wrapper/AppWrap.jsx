import { NavigationDots, SocialMedia } from "../components";
import { motion } from "framer-motion";

const AppWrap = (Component, idName, classes = "") =>
  function HOC() {
    return (
      <motion.div id={idName} className={`app__container ${classes}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </motion.div>
    );
  };

export default AppWrap;
