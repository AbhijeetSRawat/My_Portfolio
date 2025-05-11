import React from "react";
import studynotion from "../assets/studynotion.png";
import { Link } from "react-router-dom";
import pennytrack from "../assets/pennytrack.png";
import kisandiary from "../assets/kisandiary.png";
const Projects = () => {
  return (
    <div className="flex flex-col w-full items-center mt-5 mb-20 translate-y-[-100%] transition-all duration-500 ease-out animate-[slide-in_1.5s_forwards]">
      <div className="w-[full] relative h-[10vh] flex justify-center items-center lg:h-[20vh]  ">
        <div className="text-7xl lg:text-9xl font-extrabold text-gray-700">
          PROJECTS
        </div>
        <div className="absolute text-4xl lg:text-6xl font-bold">
          MY <span className="text-yellow-500 ">WORK</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  items-center hover:scale-105 lg:justify-center w-[100vw] lg:w-[90vw] gap-4 lg:gap-10 my-10">
        <div className="w-[90vw] lg:w-[40vw] relative border-4 border-yellow-500 rounded-xl shadow-2xl shadow-white translate-x-[-100%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
          <div className="absolute text-6xl font-bold top-3 left-5 text-yellow-500">
            1
          </div>
          <img src={studynotion} alt="project 1" className="rounded-xl" />
        </div>
        <div className="w-[90vw] lg:w-[40vw] flex flex-col gap-2 lg:gap-6 translate-x-[200%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
          <div className="text-2xl text-yellow-500 font-medium lg:text-5xl">
            StudyNotion - The Ed-Tech Website
          </div>
          <Link
            to="https://final-yr-project-nine.vercel.app"
            target="_plank1"
            className="text-blue-400 text-2xl lg:text-3xl"
          >
            {" "}
            Click -Here- to visit
          </Link>
          <div className="text-sm lg:text-base text-green-300">
            StudyNotion is a full-stack Ed-Tech platform built with the MERN
            stack (MongoDB, Express.js, React, Node.js) that provides a seamless
            learning experience with role-based access control for students and
            instructors, enabling course creation, enrollment, progress
            tracking, and secure payment integration (Razorpay) while delivering
            a responsive, user-friendly interface powered by Tailwind CSS for
            optimal accessibility across devices.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row hover:scale-105 items-center lg:justify-center w-[100vw] lg:w-[90vw] gap-4 lg:gap-10 my-10">
        <div className="w-[90vw] lg:w-[40vw] relative border-4 border-yellow-500 rounded-xl shadow-2xl shadow-white translate-x-[-100%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
          <div className="absolute text-6xl font-bold top-3 left-5 text-yellow-500">
            2
          </div>
          <img src={pennytrack} alt="project 2" className="rounded-xl" />
        </div>
        <div className="w-[90vw] lg:w-[40vw] flex flex-col gap-2 lg:gap-6 translate-x-[200%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
          <div className="text-2xl text-yellow-500 font-medium lg:text-5xl">
            PennyTrack - The Finance Tracker
          </div>
          <Link
            to="https://finance-tracker-nine-phi.vercel.app/"
            target="_plank2"
            className="text-blue-400 text-2xl lg:text-3xl"
          >
            {" "}
            Click -Here- to visit
          </Link>
          <div className="text-sm lg:text-base text-green-300">
            PennyTrack is a finance tracker web app built with React, Firebase,
            and Tailwind CSS that helps users manage expenses in real-time,
            featuring Firebase authentication, CSV import/export, search/filter
            functionality, and Google Sign-In for seamless financial tracking.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row hover:scale-105 items-center lg:justify-center w-[100vw] lg:w-[90vw] gap-4 lg:gap-10 my-10">
        <div className="w-[90vw] lg:w-[40vw] relative border-4 border-yellow-500 rounded-xl shadow-2xl shadow-white translate-x-[-100%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards] ">
          <div className="absolute text-6xl font-bold top-3 left-5 text-yellow-500">
            3
          </div>
          <img src={kisandiary} alt="project 3" className="rounded-lg" />
        </div>
        <div className="w-[90vw] lg:w-[40vw] flex flex-col gap-2 lg:gap-6 translate-x-[200%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
          <div className="text-2xl text-yellow-500 font-medium lg:text-5xl">
            Kisan E-Portal - The Farmer's Guide
          </div>
          <Link
            to="https://kisan-diary-xi5k.vercel.app/"
            target="_plank3"
            className="text-blue-400 text-2xl lg:text-3xl"
          >
            {" "}
            Click -Here- to visit
          </Link>
          <div className="text-sm lg:text-base text-green-300">
            Kisan E-Portal is a farmer-centric React app designed for the
            Agricultural Science Congress, offering 50+ crop guides, real-time
            weather updates, and government scheme information to enhance
            farming productivity through an intuitive, mobile-friendly
            interface.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
