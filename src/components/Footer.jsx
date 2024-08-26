import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-icons">
          <a
            href="https://github.com/girlnotfound"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kaila-ronquillo-230404325/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://stackoverflow.com/users/23103427/errorgirlnotfound"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow />
          </a>
          <a href="mailto:errorgirlnotfound@outlook.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
