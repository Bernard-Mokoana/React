import 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
<footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-xl font-bold mb-4">Let&apos;s Connect</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/Bernard-Mokoana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/bernard-mokoana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="bernardmokoana@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope size={28} />
          </a>

        </div>
        <p className="text-sm text-gray-400">
          © 2025 Bernard Mokoana. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer