import { Fragment } from "react";
import Socials from "../Socials/Socials";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header-socials">
          <Socials />
      </div>
    <header id="header">
      <div className="inner">
        <h1>
          <strong>Tyler Widdison</strong><br />  Web Developer
        </h1>
      </div>
    </header>
    </Fragment>
  );
};

export default Header;
