import { useNavigate } from "react-router-dom";
import "./navbar.scss";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" onClick={() => navigate("/#home")}>
        MTORRESWEB
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "projects", "certificates", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <AiOutlineMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="mobile-menu"
          >
            <AiOutlineClose onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "skills",
                "projects",
                "certificates",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
