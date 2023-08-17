import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
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
);

export default SocialMedia;
