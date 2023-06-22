import React from "react";
import "./Header.css";
import {
  HiOutlineDocument,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import boy from "../../assets/developer.png";
import resume from "../../assets/Arefin_Shaon MERN Stack Developer_Resume.pdf";
import { Link } from "react-router-dom";
import background from "../../assets/front.png"

const Header = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div>
      <div className="md:-mt-20">
        <div style={divStyle}  className="hero text-grayLight rounded-lg">
          <div className="flex flex-col lg:flex-row-reverse">
            <img
              src={boy}
              style={{ width: 460, height: 400 }}
              className="rounded-lg shadow-2xl lg:ml-28 w-full"
              alt=""
            />
            <div className="content-container">
              <div className="shadow-2xl shadow-gray-900 rounded-lg p-10 font-sans">
                <h2 className="text-5xl font-extrabold font-sans">
                  Hi, I'm <span className="text-darkpink">Arefin Shaon</span>
                </h2>
                <p className="my-5">MERN Stack Developer from Bangladesh.</p>
                <div className="pt-10">
                  <div className="flex">
                    <HiOutlineDocument className="text-darkpink w-7 h-7" />
                    <p className="p">MERN Stack Developer</p>
                  </div>
                  <div className="flex py-3">
                    <HiOutlineMail className="text-darkpink w-7 h-7" />
                    <p className="">arefinshaon99@gmail.com</p>
                  </div>
                  <div className="flex">
                    <HiOutlineLocationMarker className="text-darkpink w-7 h-7" />
                    <p className="">Rangpur, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl shadow-gray-900 rounded-lg p-10 mt-8 font-sans">
                <p className="py-5">Download My Resume:</p>
                <a href={resume} download="Arefin Shaon">
                  <button className="btn btn-outline border-sm mr-5 shadow-2xl sm:mb-5 lg:mb-0 text-darkpink rounded-none bg-blackdeep">
                    Download Resume
                  </button>
                </a>
                <Link
                  to="#contactMe"
                  className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
