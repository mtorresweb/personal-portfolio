import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <a
      className="app__social-item"
      href="https://github.com/your github username"
      target="_blank"
      rel="noreferrer"
    >
      <BsGithub />
    </a>
    <a
      className="app__social-item"
      href="https://api.whatsapp.com/send?phone=your phone number"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
    <a className="app__social-item" href="mailto:your email address">
      <AiOutlineMail />
    </a>
  </div>
);

export default SocialMedia;
