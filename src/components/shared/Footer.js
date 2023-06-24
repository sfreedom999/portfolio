import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/front2.png";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }}>
      <footer className="footer grid justify-between items-center h-40 -mt-28 p-4 px-10 text-grayLight">
        <div className=" font-bold">
          <p>Developed by Arefin Shaon</p>
        </div>
        <div className="text-darkpink">
          <h2>Copyright © 2023 AREFIN</h2>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xl">
          <a href="https://www.linkedin.com/in/arefin-shaon/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ArefinShaon">
            <FaGithub />
          </a>
          <a href="https://web.facebook.com/Arefin.shawon.0">
            <FaFacebookSquare />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
