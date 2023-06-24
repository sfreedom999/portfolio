import React from "react";
import {
  SiFirebase,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const Tools = () => {
  return (
    <div>
      <div>
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-center text-grayLight text-5xl font-bold my-14"
        >
          <span className="text-darkpink">Tools</span> I use
        </h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 ">
          <SiVisualstudiocode className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
          <SiFirebase className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
          <SiNetlify className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
          <SiGithub className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
          <SiVercel className="transition duration-700 hover:scale-110 text-grayLight hover:bg-cyan-800 hover:text-white font-semibold h-28 w-36 p-2 shadow-2xl shadow-red-500/80 border border-reddark" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
