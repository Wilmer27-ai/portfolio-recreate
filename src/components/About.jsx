import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About({ darkMode }) {
  const [aboutRef, aboutAnim] = useScrollAnimation('fade-in-left')
  const [experienceRef, experienceAnim] = useScrollAnimation('fade-in-right', 0.1, 100)
  const [skillsRef, skillsAnim] = useScrollAnimation('fade-in-up', 0.1, 200)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 auto-rows-min">
      {/* About Section */}
      <div 
        ref={aboutRef}
        className={`animate-on-scroll ${aboutAnim} lg:col-span-3 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
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
        className={`animate-on-scroll ${experienceAnim} lg:row-span-2 lg:col-span-2 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Experience</h2>
        
        {/* Scrollable Timeline Container */}
        <div className={`max-h-[860px] overflow-y-auto pr-2 ${darkMode ? 'dark-scrollbar' : ''}`}>
          <div className="relative pl-8">
            {/* Timeline Line */}
            <div className={`absolute left-[0.6rem] top-0 bottom-0 w-[2px] ${
              darkMode ? 'bg-gradient-to-b from-green-500 via-blue-500 to-transparent' : 'bg-gradient-to-b from-green-600 via-blue-600 to-transparent'
            }`}></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {/* DICT Experience */}
              <div className="relative">
                {/* Timeline Dot with Ring */}
                <div className="absolute -left-[1.85rem] top-0">
                  <div className={`w-5 h-5 rounded-full border-[3px] ${
                    darkMode ? 'bg-gray-900 border-green-500' : 'bg-white border-green-600'
                  }`}>
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
                      darkMode ? 'bg-green-500' : 'bg-green-600'
                    }`}></div>
                  </div>
                </div>
                
                <div className="pb-1">
                  <h3 className={`font-bold text-base mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Department of Information and Communications Technology (DICT)
                  </h3>
                  <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    Government Internship Program (GIP) – Tech4ED
                  </p>
                  <p className={`text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Present • 4 Months
                  </p>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Developed and maintained web-based management systems using React, Vite, Tailwind CSS, and Firebase</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Built the PESO Management System (DTC Job Fair) to manage job fair applicants and interview results</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Designed and implemented a mobile-first, responsive UI</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Created the Tech4ED Monitoring System to track foot traffic and service usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Integrated Firebase for real-time database management and authentication</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Developed a companion mobile application using React Native</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Implemented reusable front-end components for development efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-green-400' : 'bg-green-600'
                      }`}></span>
                      <span>Collaborated with supervisors to gather requirements and deploy updates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CALLBOX Experience */}
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[1.85rem] top-0">
                  <div className={`w-5 h-5 rounded-full border-[3px] ${
                    darkMode ? 'bg-gray-900 border-blue-500' : 'bg-white border-blue-600'
                  }`}></div>
                </div>
                
                <div>
                  <h3 className={`font-bold text-base mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Front-end Developer Intern
                  </h3>
                  <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    CALLBOX INC
                  </p>
                  <p className={`text-xs mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Callbox Avescor Motors Building, Second, M.H, Molo, Iloilo City
                  </p>
                  <p className={`text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Jan 2025 - Mar 2025 • 3 Months
                  </p>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>Developed and optimized responsive web components, improving mobile usability across redesigned pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>Redesigned key website sections, including the "Industries We Serve" and eBook pages, enhancing user engagement and visual consistency</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>Implemented reusable front-end templates, making future page development more efficient</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>Practiced mobile-first design principles, ensuring compatibility and seamless experience across devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>Assisted in applying new templates and uploading content on WordPress</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>Applied basic SEO techniques to improve site structure and on-page optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div 
        ref={skillsRef}
        className={`animate-on-scroll ${skillsAnim} lg:col-span-3 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
        
        <div className="space-y-6">
          {/* Web Development */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>HTML</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>CSS</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>SCSS</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Tailwind</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Bootstrap</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>JavaScript</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>React</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>React Native</span>
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Database</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Firebase</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>MySQL</span>
            </div>
          </div>

          {/* CMS */}
          <div>
            <h3 className="font-semibold text-lg mb-3">CMS</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>WordPress</span>
            </div>
          </div>

          {/* Infrastructure & DevOps */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Infrastructure & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Vercel</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Git</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>GitHub</span>
            </div>
          </div>

          {/* Design & Prototyping */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Design & Prototyping</h3>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Figma</span>
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
              }`}>Canva</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About