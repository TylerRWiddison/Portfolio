import "./Footer.css";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <div className="footer-container">
      <Socials />
      <div className='copyright-container'>
        <span className="copyright">&copy; 2021 Tyler Widdison</span>
      </div>
    </div>
  );
};

export default Footer;
