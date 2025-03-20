import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            check out more projects from my github
          </h1>
      </div>
         
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project1.png"
          title="Flight Booker"
          github="https://github.com/thomas21-jquerry/flight_booking_frontend"
          link="https://flight-booking-frontend-pi.vercel.app/"
          description="This is an end to end  flight management platform a user can come and book flights with recommendations."
        />
        <ProjectCard
          src="/colosseum.jpeg"
          title="Challenge Arena"
          description="This is a blockchain application where users play against each other to win prizes like a tournament system using ethereum."
          github="https://github.com/thomas21-jquerry/Tournament-Web3"
          link=""
        />
        <ProjectCard
          src="/project3.webp"
          title="Sudoku Solver"
          description="This is a website where you can come and play sudoku. If you want to give up dont worry let the system find the answer for you ;)"
          github="https://github.com/thomas21-jquerry/sudoku_solver"
          link="https://sudoku-solver-iota-vert.vercel.app/"
        />
      </div>
      
    </div>
  );
};

export default Projects;