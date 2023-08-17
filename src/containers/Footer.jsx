/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsCheck2All } from "react-icons/bs";

import images from "../constants/images";
import AppWrap from "../wrapper/AppWrap";

const Footer = () => {
  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTel, setCopiedTel] = useState(false);

  const copy = async (e) => {
    try {
      if (e.target.id == "tel-button") {
        await navigator.clipboard.writeText("+57 3106058963");
        setCopiedTel(true);
      } else {
        await navigator.clipboard.writeText("hello@mtorresweb.me");
        setCopiedEmail(true);
      }
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err.text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_52ajuji",
        "template_46w1iml",
        form.current,
        "kZP4VIz7Irl_9IuP_"
      )
      .then(
        () => {
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <motion.h2
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="head-text"
        id="contact-title"
      >
        Chat with me
      </motion.h2>

      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="app__footer-cards"
      >
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@mtorresweb.me" className="p-text">
            hello@mtorresweb.me
          </a>
          {copiedEmail ? (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.8,
              }}
              id="email-button"
              className="copy-button"
              onClick={copy}
            >
              <BsCheck2All />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.8,
              }}
              id="email-button"
              className="copy-button"
              onClick={copy}
            >
              copy
            </motion.button>
          )}
        </div>
        <div className="app__footer-card">
          <img src={images.phone} alt="phone" />
          <a href="tel:+57 3106058963" className="p-text">
            +57 3106058963
          </a>
          {copiedTel ? (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.8,
              }}
              id="tel-button"
              className="copy-button"
              onClick={copy}
            >
              <BsCheck2All />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.8,
              }}
              id="tel-button"
              className="copy-button"
              onClick={copy}
            >
              copy
            </motion.button>
          )}
        </div>
      </motion.div>
      {!isFormSubmitted ? (
        <motion.form
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
          ref={form}
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              required
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
          </div>
          <div className="app__flex">
            <input
              required
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
          </div>
          <div>
            <textarea
              required
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </motion.form>
      ) : (
        <div>
          <h3 id="thank-you" className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact");
