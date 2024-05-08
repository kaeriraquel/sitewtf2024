// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Lottie from "lottie-react";
// import animationData from "../../assets/PruebaMano003";
// import Navbar from ".././components/navbar";
// import { Carousel } from "flowbite-react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RevealOnScroll = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const scrollObserver = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         scrollObserver.unobserve(entry.target);
//       }
//     });

//     scrollObserver.observe(ref.current);

//     return () => {
//       if (ref.current) {
//         scrollObserver.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const classes = `transition-opacity duration-1000
//       ${isVisible ? "opacity-100" : "opacity-0"}`;

//   return (
//     <div ref={ref} className={classes}>
//       {children}
//     </div>
//   );
// };

// export default function Home() {
//   function submitForm(formData) {
//     console.log(formData);
//     fetch(
//       "https://wetheforcestudios.com/admin/api/forms/submit/ContactUs?token=6576ea43680014d77ccd27c5718164",
//       {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           form: {
//             Email: formData.get("email"),
//             Subject: formData.get("subject"),
//             Description: formData.get("message"),
//           },
//         }),
//       }
//     )
//       .then((entry) => entry.json())
//       .then((entry) => console.log(entry))
//       .then(() => toast.success("Thank you for your message!"));
//   }
//   return (
//     <main className="w-full">
//       <div>
//         <div className="font-sf select-none ">
//           <h2 className=" flex place-content-center">
//             <video autoPlay loop muted className="w-full">
//               <source src="../assets/videoBg.mp4" />
//             </video>
//           </h2>
//           <div className="flex place-content-center">
//             <div className="w-8 h-8 animate-bounce -my-8">
//               <img
//                 className="select-none "
//                 src="/assets/down-arrow.png"
//                 draggable="false"
//               />
//             </div>
//           </div>
//         </div>
//         <Navbar />
//         {/* TODO CAN REMOVE THIS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

//         {/* <button onClick={executeScroll}> Go to shop </button> */}

//         <div className=" relative z-10 py-6">
//           <h2 className="font-sf font-bold flex place-content-center text-[80px] select-none ">
//             We Are{" "}
//           </h2>

//           <div className="flex place-content-center place-self-center grid gap-2 grid-rows-3 w-full md:gap-6 ]">
//             <span className="flex place-content-center">
//               <p className="text-center font-sf  text-lg  w-3/4 md:w-1/2 md:text-xl">
//                 A group of artists and developers creating games and interactive
//                 products since 2011,{" "}
//                 <span className="font-bold">
//                   building business relationships with different brands and
//                   companies around the world.
//                 </span>
//               </p>
//             </span>
//             <span className="flex place-content-center">
//               <p className="text-center font-sf  text-lg  w-3/4 md:w-1/2 md:text-xl">
//                 At the end of 2017, We The Force won the IDB Inter American
//                 Development Bank award,{" "}
//                 <span className="font-bold">
//                   being part of the top 50 companies in Latin America and the
//                   Caribbean in the development of interactive products.
//                 </span>
//               </p>
//             </span>
//             <div className="flex place-self-center text-center font-sf  text-lg  w-3/4 md:w-1/2 md:text-xl">
//               During the development time, WTF have created a network of
//               contacts in the entertainment industry worldwide with renowned
//               companies.
//             </div>
//           </div>
//         </div>

//         <div className="h-96 w-screen md:hidden">
//           <Carousel>
//             <div
//               className="flex place-content-center place-self-center grid rows-auto h-80 rounded-lg content-end py-4"
//               style={{
//                 backgroundClip: "border-box",
//                 backgroundPosition: "center",
//                 backgroundSize: "contain",
//                 backgroundRepeat: "no-repeat",
//                 backgroundImage: `url(../assets/new_design/entertainment.png)`,
//               }}
//             >
//               <button className="flex place-self-center place-content-center bg-wtfYellow text-wtfBlack rounded-lg ">
//                 <h1 className="text-center sf-font font-bold text-wtfBlack px-4">
//                   ENTERTAINMENT
//                 </h1>
//               </button>
//             </div>
//             <div
//               className="flex place-content-center place-self-center grid rows-auto h-80 rounded-lg content-end py-4"
//               style={{
//                 backgroundClip: "border-box",
//                 backgroundPosition: "center",
//                 backgroundSize: "contain",
//                 backgroundRepeat: "no-repeat",
//                 backgroundImage: `url(../assets/new_design/industry.png)`,
//               }}
//             >
//               <button className="flex place-self-center place-content-center bg-wtfYellow text-wtfBlack rounded-lg ">
//                 <h1 className="text-center sf-font font-bold text-wtfBlack px-4">
//                   INDUSTRY 4.0
//                 </h1>
//               </button>
//             </div>
//             <div
//               className="flex place-content-center place-self-center grid rows-auto h-80 rounded-lg content-end py-4"
//               style={{
//                 backgroundClip: "border-box",
//                 backgroundPosition: "center",
//                 backgroundSize: "contain",
//                 backgroundRepeat: "no-repeat",
//                 backgroundImage: `url(../assets/new_design/animation.png)`,
//               }}
//             >
//               <button className="flex place-self-center place-content-center bg-wtfYellow text-wtfBlack rounded-lg ">
//                 <h1 className="text-center sf-font font-bold text-wtfBlack px-4">
//                   VISUALS
//                 </h1>
//               </button>
//             </div>
//           </Carousel>
//         </div>

//         <div className="">
//           <div className="flex justify-stretch place-content-center grid grid-rows-auto w-full px-8 gap-8 md:grid-cols-3 md:gap-12">
//             {/* GREY BOXES */}
//             <div className="bg-wtfGrey rounded-lg ">
//               <div className="p-4  grid gap-2 grid-rows-auto md:p-12 md:gap-4">
//                 <img className="" src="../assets/new_design/game_dev.png" />
//                 <b className="text-xl">Game Development</b>
//                 <h1 className="text-sm md:w-3/4">
//                   With years of experience creating diverse games and forms of
//                   entertainment, We The Force is proud to present its
//                   interactive worlds and products{" "}
//                 </h1>
//               </div>
//             </div>

//             <div className="bg-wtfGrey rounded-lg ">
//               <div className="p-4  grid gap-2 grid-rows-auto  md:p-12 md:gap-4">
//                 <img className="" src="../assets/new_design/vr.png" />
//                 <b className="text-xl">VR Development</b>
//                 <h1 className="text-sm md:w-3/4">
//                   With experience in both entertainment, training, and digital
//                   tools, We The Force prides itself in its ability to create a
//                   suite of applications taking advantage of Virtual Reality{" "}
//                 </h1>
//               </div>
//             </div>

//             <div className="bg-wtfGrey rounded-lg ">
//               <div className="p-4  grid gap-2 grid-rows-auto  md:p-12 md:gap-4">
//                 <img className="" src="../assets/new_design/phone.png" />
//                 <b className="text-xl">Augmented Reality</b>
//                 <h1 className="text-sm md:w-3/4">
//                   Utilizing our experience with both game development and VR
//                   development, We The Force develops cutting edge AR
//                   applications utilizing the latest tools and technologies to
//                   make these ideas a reality{" "}
//                 </h1>
//               </div>
//             </div>

//             <div className="bg-wtfGrey rounded-lg ">
//               <div className="p-4  grid gap-2 grid-rows-auto  md:p-12 md:gap-4">
//                 <img className="" src="../assets/new_design/supervision.png" />
//                 <b className="text-xl">Quality Assurance and Supervision</b>
//                 <h1 className="text-sm md:w-3/4">
//                   Through our experience with UI and UX, we create complex yet
//                   easy to use tools for diverse supervision and quality
//                   assurance tools{" "}
//                 </h1>
//               </div>
//             </div>

//             <div className="bg-wtfGrey rounded-lg ">
//               <div className="p-4  grid gap-2 grid-rows-auto  md:p-12 md:gap-4">
//                 <img className="" src="../assets/new_design/Checkup.png" />
//                 <b className="text-xl">Continuous Improvement </b>
//                 <h1 className="text-sm md:w-3/4">
//                   Constantly updating and keeping up with the latest tools, we
//                   do our best to{" "}
//                 </h1>
//               </div>
//             </div>

//             <div className="bg-wtfGrey rounded-lg ">
//               <div className="p-4  grid gap-2 grid-rows-auto  md:p-12 md:gap-4">
//                 <img className="" src="../assets/new_design/post.png" />
//                 <b className="text-xl">Production and Video Editing</b>
//                 <h1 className="text-sm md:w-3/4">
//                   Experience with 3D, 2D, and video production{" "}
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* TODO IMPLEMENT IMG AS GIF */}
//         {/* <div className=" flex place-content-center z-0 overflow-clip overflow-x-hidden box-border">
//           <img
//             src="/assets/spin.png"
//             className="absolute animate-spin-slow -my-4 overflow-x-hidden select-none box-border"
//             draggable="false"
//           />
//         </div> */}

//         <div className="">
//           <div className="py-24">
//             <h2 className="text-[100px] text-bold font-sf font-bold flex place-content-center ">
//               Clients{" "}
//             </h2>
//             <div>
//               {/* //clients 1*/}
//               <div className="w-full inline-flex flex-nowrap overflow-clip [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-0),transparent_100%)]">
//                 <ul className="flex items-center justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
//                   {" "}
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-11.png"
//                       alt="Harley"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-12.png"
//                       alt="John Deere"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-13.png"
//                       alt="Magic"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-14.png"
//                       alt="Masttro"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-15.png"
//                       alt="Metalsa"
//                     />
//                   </li>
//                 </ul>
//                 <ul
//                   className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
//                   aria-hidden="true"
//                 >
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-11.png"
//                       alt="Harley"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-12.png"
//                       alt="John Deere"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-13.png"
//                       alt="Magic"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-14.png"
//                       alt="Masttro"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-15.png"
//                       alt="Metalsa"
//                     />
//                   </li>
//                 </ul>
//               </div>

//               {/* //clients 2*/}
//               <div className="w-full inline-flex flex-nowrap overflow-clip">
//                 <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse">
//                   {" "}
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group.png"
//                         alt="bic"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-1.png"
//                         alt="Deacero"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-2.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-3.png"
//                         alt="Deacero"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-4.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-5.png"
//                         alt="Deacero"
//                       />
//                     </div>
//                   </li>
//                 </ul>
//                 <ul
//                   className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse"
//                   aria-hidden="true"
//                 >
//                   {" "}
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group.png"
//                         alt="bic"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-1.png"
//                         alt="Deacero"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-2.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-3.png"
//                         alt="Deacero"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-4.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-5.png"
//                         alt="Deacero"
//                       />
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               {/* //clients 3*/}
//               <div className="w-full inline-flex flex-nowrap overflow-clip [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-0),transparent_100%)]">
//                 <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-6.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-7.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-8.png"
//                       alt="bic"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-9.png"
//                       alt="Deacero"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-10.png"
//                       alt="Ducati"
//                     />
//                   </li>
//                 </ul>
//                 <ul
//                   className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
//                   aria-hidden="true"
//                 >
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-6.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <div className="flex place-content-center px-4">
//                       <img
//                         className="object-scale-down"
//                         src="/assets/logos/Group-7.png"
//                         alt="Ducati"
//                       />
//                     </div>
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-8.png"
//                       alt="bic"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-9.png"
//                       alt="Deacero"
//                     />
//                   </li>
//                   <li>
//                     <img
//                       className="object-scale-down"
//                       src="/assets/logos/Group-10.png"
//                       alt="Ducati"
//                     />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2 className="text-[100px] text-bold font-sf font-bold flex place-content-center ">
//           Shop{" "}
//         </h2>
//         <div className="h-96 w-screen md:hidden">
//           <Carousel>
//             <div className="flex place-content-center grid rows-auto">
//               <img
//                 className="object-scale-down h-56 w-auto"
//                 src="../assets/new_design/shop_0.png"
//               />
//               <h1 className="py-4 text-center sf-font font-bold text-wtfYellow">
//                 Shop 1
//               </h1>
//               <button className="flex place-self-center place-content-center bg-wtfYellow text-wtfBlack rounded-lg w-1/2">
//                 <h1 className="text-center sf-font font-bold text-wtfBlack">
//                   VISIT
//                 </h1>
//               </button>
//             </div>
//             <div className="flex place-content-center grid rows-auto">
//               <img
//                 className="object-scale-down h-56 w-auto"
//                 src="../assets/new_design/shop_1.png"
//               />
//               <h1 className="py-4 text-center sf-font font-bold text-wtfYellow">
//                 Shop 2
//               </h1>
//               <button className="flex place-self-center place-content-center bg-wtfYellow text-wtfBlack rounded-lg w-1/2">
//                 <h1 className="text-center sf-font font-bold text-wtfBlack">
//                   VISIT
//                 </h1>
//               </button>
//             </div>
//             <div className="flex place-content-center grid rows-auto">
//               <img
//                 className="object-scale-down h-56 w-auto"
//                 src="../assets/new_design/shop_3.png"
//               />
//               <h1 className="py-4 text-center sf-font font-bold text-wtfYellow">
//                 Shop 3
//               </h1>
//               <button className="flex place-self-center place-content-center bg-wtfYellow text-wtfBlack rounded-lg w-1/2">
//                 <h1 className="text-center sf-font font-bold text-wtfBlack">
//                   VISIT
//                 </h1>
//               </button>
//             </div>
//           </Carousel>
//         </div>

//         <div className="py-8" />

//         <RevealOnScroll>
//           <div>
//             <div className="">
//               <h2 className="text-[60px] flex place-content-center select-none font-sf font-bold ">
//                 Contact Us{" "}
//               </h2>

//               <h2 className="text-wtfYellow text-xl flex place-content-center select-none font-sf font-thin ">
//                 Let's create something together.{" "}
//               </h2>

//               <div className="py-8 md:px-24">
//                 <div className="">
//                   <form action={submitForm} className="space-y-8 px-8 ">
//                     <div className="md:grid md:grid-cols-2 md:gap-8">
//                       <div className="">
//                         <label
//                           htmlFor="email"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           <div className="text-white font-sf font-bold text-2xl">
//                             E-Mail
//                           </div>
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                           placeholder="about@wetheforce.com"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="subject"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           <div className="text-white font-sf font-bold text-2xl">
//                             SUBJECT
//                           </div>
//                         </label>

//                         <input
//                           type="text"
//                           id="subject"
//                           name="subject"
//                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                           placeholder="What should we know?"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="sm:col-span-2 md:grid md:grid-cols-2 md:pl-8">
//                       <label
//                         htmlFor="message"
//                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 md:mb-8"
//                       >
//                         <div className="text-white font-sf font-bold text-2xl md:text-[60px] md:w-1/2 md:text-center md:leading-[60px] md:place-self-center">
//                           WHAT'S ON YOUR MIND?
//                         </div>
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="6"
//                         className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
//                         placeholder="Tell us all about it..."
//                       ></textarea>
//                     </div>
//                     <div className="bottom-0 right-0 ">
//                       <button
//                         type="submit"
//                         className="md:px-24 absolute right-0 px-8 text-smfont-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                       >
//                         <img className=" md:h-6 " src="../assets/Send.png" />
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="py-8 px-8 flex place-content-center">
//               <img
//                 className="select-none "
//                 src="../assets/MobileDog.png"
//                 draggable="false"
//               />
//             </div>
//           </div>
//         </RevealOnScroll>
//       </div>
//       <ToastContainer position="bottom-center" />
//     </main>
//   );
// }
