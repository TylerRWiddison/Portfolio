import Header from "./Header";
import AboutMe from "./AboutMe";
import RecentProjects from "./RecentProjects";
import Languages from "./Languages";
import Footer from "../Footer/Footer";

import './Home.css';

const Home = () => {
  return (
    <div id="content-w-sidebar">
      <header id="sidebar">
        <Header />
      </header>
      <main id="main">
        <RecentProjects />
        <hr />
        <AboutMe />
        <hr />
        <Languages />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
