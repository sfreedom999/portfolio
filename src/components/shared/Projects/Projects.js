// import React from "react";
// import toys from "../../../assets/toys.png";
// import getaway from "../../../assets/summer.png";
// import chefs from "../../../assets/chefs.png";
// import { BiLinkExternal } from "react-icons/bi";
// import background from "../../../assets/front2.png";

// const Projects = () => {
//   const divStyle = {
//     backgroundImage: `url(${background})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//   };
//   return (
//     <div style={divStyle} id="projects" className="text-grayLight grid justify-center align-center -mt-12 my-10 py-8 mb-20">
//       <div
//         data-aos="fade-up"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="1000"
//         className="text-center pt-12 "
//       >
//         <h2 className="text-5xl font-bold">Projects</h2>
//         <p className="text-darkpink font-bold mt-2 text-lg">My Recent Works</p>
//       </div>
//       <div
//         data-aos="fade-up"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="1000"
//         className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 h-fit px-8"
//       >
//         <div className="transition duration-700 hover:scale-105 card rounded-sm shadow-2xl shadow-cyan-800/80">
//           <figure>
//             <img className="" src={getaway} alt="Shoes" />
//           </figure>
//           <div className="card-body -mt-5">
//             <h2 className="card-title ">Getaway</h2>
//             <p>Getaway is an online course platform based on summer-camp students. Users can have their personal dashboard to add or delete something.</p>
//             <div className="card-actions justify-between mt-2 -mb-2">
//               <div className="flex">
//                 <a
//                   className="no-underline text-darkpink"
//                   href=" https://summer-camp-client-ee2a3.web.app/"
//                 >
//                   Live-link
//                 </a>
//               </div>
//               <div className="flex">
//                 <BiLinkExternal className="text-darkpink mt-1 " />
//                 <a
//                   className="no-underline text-darkpink"
//                   href="https://github.com/ArefinShaon/getaway-summer-camp-client"
//                 >
//                   Front-End
//                 </a>
//               </div>
//               <div className="flex">
//                 <BiLinkExternal className="text-darkpink mt-1 " />
//                 <a
//                   className="no-underline text-darkpink"
//                   href="https://github.com/ArefinShaon/getaway-summer-camp-server"
//                 >
//                   Back-End
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="transition duration-700 hover:scale-105 card rounded-sm card-shadow shadow-2xl shadow-cyan-800/80">
//             <figure>
//               <img className="" src={toys} alt="Shoes" />
//             </figure>
//             <div className="card-body -mt-5">
//               <h2 className="card-title ">Toy Man</h2>
//               <p>Toy Man is a website for buying and selling Toys. Seller can post toys for selling the product in this marketplace. This has a good authentication system.</p>
//               <div className="card-actions justify-between mt-2 -mb-2">
//                 <div className="flex">
//                   <BiLinkExternal className="text-darkpink mt-1 " />
//                   <a
//                     className="no-underline text-darkpink"
//                     href="https://toy-client-ddaaf.web.app/"
//                   >
//                     Live-link
//                   </a>
//                 </div>
//                 <div className="flex">
//                   <BiLinkExternal className="text-darkpink mt-1 " />
//                   <a
//                     className="no-underline text-darkpink"
//                     href="https://github.com/ArefinShaon/toy-marketplace-client"
//                   >
//                     Front-End
//                   </a>
//                 </div>
//                 <div className="flex">
//                   <BiLinkExternal className="text-darkpink mt-1 " />
//                   <a
//                     className="no-underline text-darkpink"
//                     href="https://github.com/ArefinShaon/toy-marketplace-server"
//                   >
//                     Back-End
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="transition duration-700 hover:scale-105 card rounded-sm shadow-2xl card-shadow shadow-cyan-800/80">
//             <figure>
//               <img className="" src={chefs} alt="Shoes" />
//             </figure>
//             <div className="card-body -mt-5">
//               <h2 className="card-title ">Bd Chefs</h2>
//               <p>Bd Chefs is an online blogging platform. It shows various chefs recipes.</p>
//               <div className="card-actions justify-between mt-2 -mb-2">
//                 <div className="flex">
//                   <BiLinkExternal className="text-darkpink mt-1 " />
//                   <a
//                     className="no-underline text-darkpink"
//                     href=" https://bd-chef-clien-site.web.app/"
//                   >
//                     Live-link
//                   </a>
//                 </div>
//                 <div className="flex">
//                   <BiLinkExternal className="text-darkpink mt-1 " />
//                   <a
//                     className="no-underline text-darkpink"
//                     href="https://github.com/ArefinShaon/chef-client-side"
//                   >
//                     Front-End
//                   </a>
//                 </div>
//                 <div className="flex">
//                   <BiLinkExternal className="text-darkpink mt-1 " />
//                   <a
//                     className="no-underline text-darkpink"
//                     href="https://github.com/ArefinShaon/chef-sereve-side"
//                   >
//                     Back-End
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
