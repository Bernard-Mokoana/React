import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Interactive Periodic Table",
    description: "A web app that allows users to explore elements with detailed chemical data, built using React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Online Ticketing System",
    description: "A full-stack application for buying and selling event tickets, built with Node.js, Express, and MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills, featuring animations and a responsive design.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id='projects' className="bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-900 text-white py-16">
      <motion.div 
        className="max-w-6xl mx-auto px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center space-x-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-400 underline hover:text-blue-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


export default Projects