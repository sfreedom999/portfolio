import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import boy from '../../assets/boyimg.png';
import background from "../../assets/front2.png"

const Navbar = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100px',
  };
  return (
    <div style={divStyle}>
      <div className="uppercase navbar fixed z-20 text-grayLight sm:text-black font-sans font-sm" >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blackdeep text-grayLight rounded-box w-52">
              <li>
                <Link smooth to='#' className="">Home</Link>
              </li>
              <li>
                <Link smooth to="#aboutMe" className="">About Me</Link>
              </li>
              <li>
                <Link smooth to="#skills" className="">Skills</Link>
              </li>
              <li>
                <Link smooth to="#services" className="">Services</Link>
              </li>
              <li>
                <Link smooth to="#projects" className="">Projects</Link>
              </li>
              <li>
                <Link smooth to="#contactMe" className="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="avatar mx-8">
            <div className="w-16 rounded-full">
              <img src={boy} alt="Avatar" />
            </div>
          </div>
        
          <p className=" uppercase md:text-2xl font-bold text-primary hover:text-darkpink hover:translate-y-1">Md Sadhin Hossen</p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-grayLight font-bold">
            <li>
              <Link smooth to='#' className=" hover:text-red-500 hover:translate-y-1">Home</Link>
            </li>
            <li>
              <Link smooth to="#aboutMe" className=" hover:text-red-500 hover:translate-y-1 ">About Me</Link>
            </li>
            <li>
              <Link smooth to="#skills" className=" hover:text-red-500 hover:translate-y-1">Skills</Link>
            </li>
            <li>
              <Link smooth to="#services" className=" hover:text-red-500 hover:translate-y-1">Services</Link>
            </li>
            <li>
              <Link smooth to="#projects" className=" hover:text-red-500 hover:translate-y-1">Projects</Link>
            </li>
            <li>
              <Link smooth to="#contactMe" className=" hover:text-red-500 hover:translate-y-1">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
