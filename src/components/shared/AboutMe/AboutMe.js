import React from "react";

const AboutMe = () => {
  return (
    <div className="my-16">
      <div className="hero  text-grayLight rounded-lg  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://miro.medium.com/max/1400/1*qdAW1TjCN57h1lbuuzvchg.gif"
            style={{ height: 400, width: 600 }}
            className="rounded-lg shadow-2xl bg-black w-full"
          />
          <div className="p-3">
            <h1 className="text-5xl font-bold mb-4 text-grayLight">About Me</h1>
            <p className="">
              Hi there.. Myself Tasmim Rahman a Web Developer. I specialize in
              both front-end and back-end web development. I'm proficient in
              HTML, CSS, JavaScript, React,Firebase, Node-js, Express js,
              MongoDB and constantly learning new technologies to stay ahead of
              the curve. Recently I have made three project using MERN Stack
              Technology.
            </p>
            <p className="my-3">
              I am doing my bachelor degree in Technology specialization in
              Electronics and Communications Engineering (ECE) from Hajee
              Mohammad Danesh Science & Technology University. And I have
              completed Web Development course from Programming hero(CEO-Jhankar
              Mahbub).
            </p>
            <p>
              
              Please take a look at my portfolio and feel free to get in touch
              if you have any query or would like to work together.
            </p>

            <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink mt-2">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;