import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaTimes, FaBars } from "react-icons/fa"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (

    <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-4 fixed w-full top-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        
        {/* <div>
           <a 
           href="#hero">
            <img 
            src="/src/assets/images/Purple and Blue Grdient Simple Minimalist Elegant Website Logo.png" 
            alt="Logo"
            className='h-20 w-auto'/>
           </a>
        </div> */}

        <h1 className="text-2xl font-bold">
          <a href="#hero">Portfolio</a>
        </h1>

        <div className='md:hidden'>
          <button
             onClick={toggleMenu}
             className='text-white hover:text-gray-400 transition-colors
             duration-200'
          > 
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}          
          </button>
        </div>

        <nav
         className={`${isOpen ?"block" : "hidden"}
         absolute top-16 left-0 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-center md:static md:block md:flex md:items-center md:justify-center`}
         >

          <ul className="space-y-4 md:space-y-0 md:flex 
          md:space-x-8 text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="hover:text-teal-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

    
        <div className=" hidden md:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/bernard-mokoana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Bernard-Mokoana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="bernardmokoana@gmail.com"
            className="text-pink-400 hover:text-pink-300 transition-colors duration-200"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar