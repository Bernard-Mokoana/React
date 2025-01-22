import React from "react";
import { FaFlask, FaLightbulb, FaUserGraduate } from "react-icons/fa";

function About() {
  return(
  <section id="about" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* <div>
            <img
              src="/src/assets/images/IMG_3953.JPG"
              alt="Profile Picture"
              className="w-48 h-48 mx-auto rounded-full border-4 border-blue-400 shadow-lg"
            />
          </div> */}
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi! I&apos;m a passionate <span className="text-yellow-400">Computer Science</span> and <span className="text-green-400">Chemistry</span> student dedicated to bridging the gap between technology and science. My expertise lies in building innovative solutions that merge computational power with chemical insights.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="text-center">
                <FaUserGraduate size={48} className="text-blue-400 mb-2" />
                <p className="text-lg">Student</p>
              </div>
              <div className="text-center">
                <FaLightbulb size={48} className="text-yellow-400 mb-2" />
                <p className="text-lg">Innovator</p>
              </div>
              <div className="text-center">
                <FaFlask size={48} className="text-green-400 mb-2" />
                <p className="text-lg">Scientist</p>
              </div>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              Outside of academics, I enjoy exploring new technologies, conducting chemical experiments, and creating meaningful projects that make an impact. Let&apos;s work together to create something amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  )

}







// function About() {
//   return (
//     <section id="about" className="py-16 px-8 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
//       <p className="text-center max-w-2xl mx-auto">
//         I am a final-year Computer Science and Chemistry student passionate about
//         software development and the intricacies of chemical processes. My projects
//         bridge the gap between technology and science, offering innovative solutions
//         in both fields.
//       </p>
//     </section>
//   );
// }

export default About;