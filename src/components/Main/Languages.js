import { Fragment } from "react";

// faReact, faJs, faCss3, faHtml5
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

import "./Languages.css";

const Languages = () => {
  return (
    <Fragment>
      <h1 className='language-header'>Languages and Tools</h1>
      <div className="language-container color">
        <section>
          <span>
            <FontAwesomeIcon icon={faReact} size="5x" />
          </span>
          <h1>React JS</h1>
        </section>
        <section>
          <span>
            <FontAwesomeIcon icon={faJs} size="5x" />
          </span>
          <h1>Javascript</h1>
        </section>
        <section>
          <span>
            <FontAwesomeIcon icon={faCss3Alt} size="5x" />
          </span>
          <h1>CSS3</h1>
        </section>
        <section>
          <span>
            <FontAwesomeIcon icon={faHtml5} size="5x" />
          </span>
          <h1>HTML5</h1>
        </section>
      </div>
    </Fragment>
  );
};

export default Languages;
