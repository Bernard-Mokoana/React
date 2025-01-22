// components/Skills.jsx
import React from "react";
import { FaCode, FaDatabase, FaFlask, FaJava, FaTools } from "react-icons/fa";
import {  SiCplusplus, SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss  } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <p className="text-lg mb-12">
          Combining expertise in <span className="text-yellow-400">Computer Science</span> and <span className="text-green-400">Chemistry</span> to create innovative and impactful solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center ">
            <FaCode size={48} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">Programming Languages</h3>
          <div className="flex space-x-4 mt-4">
            <SiHtml5 size={24} className="text-indigo-400"/>
            <SiCss3 size={24} className="text-blue-400" />
            <SiJavascript size={24} className="text-yellow-400" />
            <SiPython size={24} className="text-blue-400" />
            <SiCplusplus size={24} className="text-green-400" />
            <FaJava size={24}className="text-blue-400" />
          </div>
          <p className="text-sm mt-2 text-gray-300">Proficient in Html, Css, javaScript,
          Python,C++ and Java</p>
          </div>

          <div className="flex flex-col items-center">
            <FaDatabase size={48} className="text-green-400 mb-4" />
            <h3 className="text-xl font-semibold">Databases</h3>
            <div className="flex space-x-4 mt-4">
              <SiMongodb size={26} className="text-green-400"/>
              <SiMysql size={26} className="text-blue-400" />
              <SiPostgresql size={26} className="text-yellow-400"/>
            </div>
            <p className="text-sm mt-2 text-gray-300">Experience with MongoDB, SQL, and PostgreSQL.</p>
          </div>

          <div className="flex flex-col items-center">
            <FaTools size={48} className="text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold">Tools & Frameworks</h3>
            <div className="flex space-x-4 mt-4"> 
            <SiReact size={24} className="text-blue-400" />
            <SiNodedotjs size={24} className="text-green-400" />
            <SiTailwindcss size={24} className="text-teal-400"/>
            <SiExpress size={24} className="text-white"/>
            <SiPostman size={24} className="text-orange-400" />
            <SiGit size={24} className="text-red-400" />
            <SiGithub size={24}  />
            </div>
            <p className="text-sm mt-2 text-gray-300">Hands-on with React, Node.js, express.js, TailwindCss, Git, Github, and Postman</p>
          </div>


          <div className="flex flex-col items-center">
            <FaFlask size={48} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold">Chemistry</h3>
            <p className="text-sm mt-2 text-gray-300">Skilled in laboratory analysis and chemical modeling.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
