import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <ul className="socials">
          <li className="socials-item">
            <a href="https://github.com/TylerRWiddison" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li className="socials-item">
            <a
              href="https://www.linkedin.com/in/tyler-widdison/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className='copyright-container'>
        <span className="copyright">&copy; 2021 Tyler Widdison</span>
      </div>
    </div>
  );
};

export default Footer;
