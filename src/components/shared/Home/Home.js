import React from "react";
import Header from "../../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="max-w-8xl mx-auto bg-blackdeep px-6 py-10 space-y-12 sm:py-20">
      <div className="space-y-12 sm:space-y-24">
        <Header />
      </div>
      <div className="space-y-12 sm:space-y-24">
        <AboutMe />
      </div>
      <div className="space-y-12 sm:space-y-24">
        <Skills />
      </div>
      <div className="space-y-12 sm:space-y-24">
        <Services />
      </div>
      <div className="space-y-12 sm:space-y-24">
        <Projects />
      </div>
      <div>
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
