import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem";

import "./RecentProjects.css";

const RecentProjects = () => {
  return (

    <section id="two">
      <h1 className="header">Recent Work</h1>
      <div className="project-grouping">
        <ProjectItem
          title="Online Shop"
          preview="onlineShop"
          alt="Site preview"
          description="Created with NodeJs, express, MongoDb and ejs. With this site you are able to add items into a cart and checkout. The checkout service is provided with Stripe. Stripe is set to demo so no money will actually be transferred. After checkout a PDF is created as your invoice.
          To sign up include '@' and '.com' in your email address. "
          site="https://node-dummy-shop.herokuapp.com/"
          viewCode="https://github.com/TylerRWiddison/OnlineShopDemo"
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
          title="Workout Tracker (In Progess)"
          preview="workoutTracker"
          alt="Preview of website"
          description="This site allows you to create workout routines and programs.  After you have created your program you can track your workouts. The exercise search uses the wger API to populate the results list."
          site="https://widdi-workout-tracker.firebaseapp.com/"
          viewCode="https://github.com/TylerRWiddison/body-building-app/tree/master/Frontend"
        />
        <ProjectItem
          title="Drum App"
          preview="drums"
          alt="Site preview"
          description="Use your keyboard to play the drums.  This site uses HTML, CSS and Javascript to play 9 different drums sounds when you click the listed keys."
          site=""
          viewCode=""
        />
      </div>
      <div className="project-grouping">
        <ProjectItem
          title="Speech Recognition"
          preview="speech"
          alt="Site preview"
          description="This site requires a microphone. Using SpeechRecognition or webkitSpeechRecognition this site listens to your voice and fills out a page live.  When you pause a new paragraph will be created the next time you start to talk."
          site=""
          viewCode=""
        />
        <ProjectItem
          title="Whack A Mole Game"
          preview="mole"
          alt="Site preview"
          description="Play Whack A Mole. Created using Javascript. 3 different levels available. Whack as many as you can within 30 seconds and beat your high score. "
          site=""
          viewCode=""
        />
      </div>
      <div className="button-container">
        <Link className="button-main" to='/projects'>Full Portfolio</Link>
      </div>
    </section>
  );
};

export default RecentProjects;
