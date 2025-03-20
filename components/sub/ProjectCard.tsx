import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

interface Props {
  src: string;
  title: string;
  description: string;
  github: string;
  link: string;
}

const ProjectCard = ({ src, title, description, github, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4 z-999">
      <Image
        src={src}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Buttons for GitHub and Live Site */}
        <div className="flex justify-center mt-4 flex gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white text-3xl rounded-md hover:bg-gray-900 transition"
            >
              🚀
            </a>
          )}
          {github && (
            <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white rounded-md hover:bg-gray-900 transition flex items-center gap-2"
            >
              <FaGithub size={30} /> {/* GitHub icon */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
