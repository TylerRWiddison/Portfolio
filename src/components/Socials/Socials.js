import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div>
      <ul className="socials">
        <li className="socials-item">
          <a href="https://github.com/TylerRWiddison" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li className="socials-item">
          <a href="https://www.linkedin.com/in/tyler-widdison/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
