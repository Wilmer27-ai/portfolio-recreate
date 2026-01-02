import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About({ darkMode }) {
  const [aboutRef, aboutAnim] = useScrollAnimation('fade-in-left')
  const [experienceRef, experienceAnim] = useScrollAnimation('fade-in-right', 0.1, 100)
  const [skillsRef, skillsAnim] = useScrollAnimation('fade-in-up', 0.1, 200)

  return (
    <div className="grid grid-cols-5 gap-4 auto-rows-min">
      {/* About Section */}
      <div 
        ref={aboutRef}
        className={`animate-on-scroll ${aboutAnim} col-span-3 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">About</h2>
        <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I'm Wilmer Suelo, a passionate web developer with a background in Information Technology, majoring in Software Technology from West Visayas State University – Main Campus. With a keen eye for design and a strong commitment to clean, efficient code, I specialize in creating websites that are not only visually compelling but also high-performing and user-centric.
        </p>
        <br />
        <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          What began as a spark of curiosity has grown into a professional pursuit of excellence in web development. I'm driven by the ever-evolving nature of technology and continuously seek to learn new tools, frameworks, and best practices to deliver innovative, future-ready solutions.
        </p>
      </div>

      {/* Experience Section */}
      <div 
        ref={experienceRef}
        className={`animate-on-scroll ${experienceAnim} row-span-2 col-span-2 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Front-end Developer Intern
            </h3>
            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              CALLBOX. INC • Jan 2025 - Present
            </p>
            <ul className={`list-disc list-inside space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Developed responsive web applications using React and modern JavaScript</li>
              <li>Collaborated with design team to implement pixel-perfect UI components</li>
              <li>Optimized application performance and improved load times</li>
              <li>Participated in code reviews and agile development practices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div 
        ref={skillsRef}
        className={`animate-on-scroll ${skillsAnim} col-span-3 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
        
        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>React</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>JavaScript</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>HTML5</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>CSS3</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Tailwind CSS</span>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Node.js</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Express</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>PHP</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>MySQL</span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Git</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>VS Code</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Vite</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About