import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem";

import "./RecentProjects.css";

const RecentProjects = () => {
  return (
    <section id="two">
      <h1 className="header">Recent Work</h1>
      <div className="project-grouping">
      <ProjectItem
          title="Webflow Bike Shop"
          preview="webflowBike"
          alt="Site preview"
          description="E-commerce site created with Webflow. Sorts product by category, adds items to a cart, and lets you sign up for a newsletter. Checkout has been disabled for demo."
          site="https://treak-bike-demo.webflow.io/"
          viewCode="deactivated"
        />
        <ProjectItem
          title="Where's That?"
          preview="imageShare"
          alt="Site preview"
          description="Website built with the MERN stack. View and share images and their location with other users. Since it is hosted on Heroku with a free account, the uploaded images are cycled and will not be persistant.
          To sign up include '@' and '.com' in your email address."
          site="https://imagesharemern-90cad.web.app/"
          viewCode="https://github.com/TylerRWiddison/ImageShareAppMERN"
        />
      </div>
      <div className="project-grouping">
        <ProjectItem
          title="Logan Travel Blog"
          preview="travelBlog"
          alt="Preview of website"
          description="A simple travel blog for Logan, Utah. Made with Wordpress."
          site="https://tylerwiddison.com"
          viewCode="deactivated"
        />
        <ProjectItem
          title="Drum App"
          preview="drums"
          alt="Site preview"
          description="Use your keyboard to play the drums.  This site uses HTML, CSS and Javascript to play 9 different drums sounds when you click the listed keys."
          site="https://drumsjavascript.web.app"
          viewCode="https://github.com/TylerRWiddison/javascriptDrums"
        />
      </div>
      <div className="project-grouping">
        <ProjectItem
          title="MERN Online Shop"
          preview="onlineShop"
          alt="Site preview"
          description="Created with NodeJs, express, MongoDb and ejs. With this site you are able to add items into a cart and checkout. The checkout service is provided with Stripe. Stripe is set to demo so no money will actually be transferred. After checkout a PDF is created as your invoice.
          To sign up include '@' and '.com' in your email address. "
          site="https://node-dummy-shop.herokuapp.com/"
          viewCode="https://github.com/TylerRWiddison/OnlineShopDemo"
        />
        <ProjectItem
          title="Whack A Mole Game"
          preview="mole"
          alt="Site preview"
          description="Play Whack A Mole. Created using Javascript. 3 different levels available. Whack as many as you can within 30 seconds and beat your high score. "
          site="https://whackamolejs.web.app"
          viewCode="https://github.com/TylerRWiddison/WhackaMole"
        />
      </div>
      {/* <div className="button-container">
        <Link className="button-main" to='/projects'>Full Portfolio</Link>
      </div> */}
    </section>
  );
};

export default RecentProjects;
