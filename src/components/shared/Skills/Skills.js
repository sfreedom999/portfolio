import React from "react";
import {
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import Tools from "./Tools/Tools";
import background from "../../../assets/front2.png"

const Skills = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100px',
  };
  return (
    <div style={divStyle} className="grid justify-center -mt-12 py-8" id="skills">
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center text-grayLight text-5xl font-bold mb-14"
      >
        Professional <span className="text-darkpink">Skillset</span>
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 mx-auto">
        <DiJavascript1 className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
        <DiReact className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
        <DiNodejs className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
        <DiMongodb className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
        <DiCss3 className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
      </div>
      <div className="my-10 mx-auto">
        <Tools />
      </div>
    </div>
  );
};

export default Skills;
