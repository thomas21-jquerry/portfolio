"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Import menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10 flex items-center justify-between">
      {/* Left Side - Logo */}
      <a href="#about-me" className="flex items-center">
        <Image
          src="/logo7.png"
          alt="logo"
          width={40}
          height={40}
          className="cursor-pointer hover:animate-slowspin"
        />
        <span className="font-bold ml-2 hidden md:block text-gray-300">
          Thomas
        </span>
      </a>

      {/* Middle - Desktop Nav Links */}
      <div className="hidden md:flex items-center justify-between space-x-6 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
        <a href="#about-me" className="cursor-pointer">About</a>
        <a href="#skills" className="cursor-pointer">Skills</a>
        <a href="#projects" className="cursor-pointer">Projects</a>
      </div>

      {/* Right Side - Socials & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          {Socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014f7] backdrop-blur-md flex flex-col items-center py-5 space-y-5 text-white md:hidden">
          <a href="#about-me" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

          {/* Socials in Mobile Menu */}
          <div className="flex gap-4">
            {Socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
