import React from "react";
import Header from "../../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import background from "../../../assets/front2.png"

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  return (
    <div style={divStyle}  className="max-w-8xl mx-auto space-y-12 sm:py-20">
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
