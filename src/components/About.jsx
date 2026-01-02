function About({ darkMode }) {
  return (
    <div className="grid grid-cols-5 gap-4 auto-rows-min">
      {/* About Section */}
      <div className={`col-span-3 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
        darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
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
      <div className={`row-span-2 col-span-2 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
        darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Front-end Developer Intern
            </h3>
            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              CALLBOX. INC • Jan 2025 - Present
            </p>
            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Callbox Avescor Motors Building, Second, M.H, Molo, Iloilo City
            </p>
            <ul className={`text-sm space-y-1 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Developed and optimized responsive web components, improving mobile usability across redesigned pages.</li>
              <li>• Redesigned key website sections, including the "Industries We Serve" and eBook pages, enhancing user engagement and visual consistency.</li>
              <li>• Implemented reusable front-end templates, making future page development more efficient.</li>
              <li>• Practiced mobile-first design principles, ensuring compatibility and seamless experience across devices.</li>
              <li>• Assisted in applying new templates and uploading content on WordPress.</li>
              <li>• Applied basic SEO techniques to improve site structure and on-page optimization.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className={`col-span-3 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
        darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">SKILLS</h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-base mb-2">Web Development:</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'SCSS', 'Tailwind', 'Bootstrap', 'Javascript', 'React'].map((skill) => (
                <span key={skill} className={`px-3 py-2 rounded text-sm ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-100 border border-gray-300'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-2">Database:</h3>
            <div className="flex flex-wrap gap-2">
              {['Firebase', 'MySQL'].map((skill) => (
                <span key={skill} className={`px-3 py-2 rounded text-sm ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-100 border border-gray-300'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-2">CMS:</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-2 rounded text-sm ${
                darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-100 border border-gray-300'
              }`}>
                Wordpress
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-2">Infrastructure & DevOps:</h3>
            <div className="flex flex-wrap gap-2">
              {['Vercel', 'Git', 'Github'].map((skill) => (
                <span key={skill} className={`px-3 py-2 rounded text-sm ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-100 border border-gray-300'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-2">Design & Prototyping:</h3>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'Canva'].map((skill) => (
                <span key={skill} className={`px-3 py-2 rounded text-sm ${
                  darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-100 border border-gray-300'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About