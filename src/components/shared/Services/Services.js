import React from "react";
import background from "../../../assets/front2.png";

const Services = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };
  return (
    <div style={divStyle} className="text-grayLight -mt-12 py-12">
      <div
        id="services"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center"
      >
        <h2 className="font-bold text-5xl mb-4">Services</h2>
        <p className="text-xl text-darkpink font-bold mt-3 mb-5">What I Offer</p>
      </div>
      <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card lg:card-side bg-cyan-800 shadow-2xl shadow-gray-900 rounded-lg md:w-2/3 mx-auto"
        >
          <figure className="rounded-lg">
            <img
              className="lg:w-60 lg:h-56 lg:p-10 rounded-lg"
              src="https://inizsoft.com/wp-content/uploads/2021/02/webdev.gif"
              alt="Frontend Development"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Pentesting</h2>
            <p>
            I have experience in pentesting manually as well as automatically using all types of hacking and pentesting tools.
            </p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink">
                Contact me
              </button>
            </div> */}
          </div>
        </div>

        {/* <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card lg:card-side bg-cyan-800 shadow-2xl shadow-gray-900 rounded-lg md:w-2/3 mx-auto"
        >
          <figure className="rounded-lg">
            <img
              className="lg:w-60 lg:h-56 lg:p-10 rounded-lg"
              src="https://dresma.ai/wp-content/uploads/2022/02/Backend-Developer-NodeJS.gif"
              alt="BackEnd Development"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">BackEnd Development</h2>
            <p>
              I have experience in backend development using technologies like
              Node.js, Express, and databases such as MongoDB.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink">
                Contact me
              </button>
            </div>
          </div>
        </div> */}
        {/* <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="card lg:card-side bg-cyan-800 shadow-2xl shadow-gray-900 rounded-lg md:w-2/3 mx-auto"
        >
          <figure className="rounded-lg">
            <img
              className="lg:w-60 lg:h-56 lg:p-10 rounded-lg"
              src="https://www.cmarix.com/blog/wp-content/uploads/2019/05/backend-development.gif"
              alt="MERN Stack development"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MERN Stack Development</h2>
            <p>
              I have experience in developing full-stack applications using the
              MERN stack (MongoDB, Express, React, and Node.js).
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline border-sm shadow-2xl rounded-none text-darkpink">
                Contact me
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
