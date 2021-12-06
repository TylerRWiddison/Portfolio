import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Main/Home";
import Projects from './components/AllProjects/Projects';

import "./App.css";


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Fragment>
  );
}

export default App;
