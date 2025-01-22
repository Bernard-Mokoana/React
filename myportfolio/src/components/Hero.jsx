// components/Hero.jsx
import React from "react";
import { FaFlask, FaAtom, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white flex items-center justify-center px-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        {/* Picture Section */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white overflow-hidden border-4 border-gray-600 shadow-lg flex-shrink-0">
          <img
            src="/src/assets/images/IMG_3953.JPG" 
            alt="Your Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m Bernard Mokoana
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate <span className="text-yellow-400">Computer Science</span> & <span className="text-green-400">Chemistry</span> student
            blending technology and science to create innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <div className="flex items-center space-x-2">
              <FaCode size={24} className="text-blue-400" />
              <span>Developer</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaFlask size={24} className="text-green-400" />
              <span>Chemistry Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaAtom size={24} className="text-pink-400" />
              <span>Innovator</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="bernardmokoana@gmail.com" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaEnvelope size={28} />
            </a>
            <a href="0711519377" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaPhone size={28} />
            </a>
            <a href="https://www.linkedin.com/in/bernard-mokoana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/Bernard-Mokoana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
