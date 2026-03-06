 import React, { lazy, Suspense } from "react";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </Suspense>
  );
}

export default App;