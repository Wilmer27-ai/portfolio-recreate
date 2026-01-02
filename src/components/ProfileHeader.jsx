import profileImg from '../assets/profile.jpg'

function ProfileHeader({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex justify-between items-start mb-12">
      {/* Left Side - Profile */}
      <div className="flex gap-6 items-start">
        {/* Profile Image */}
        <div className={`w-40 h-48 overflow-hidden shrink-0 rounded-xl ${
          darkMode ? 'bg-gray-800 border-white' : 'bg-gray-200'
        }`}>
          <img 
            src={profileImg} 
            alt="Wilmer L. Suelo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Wilmer L. Suelo</h1>
          <p className="text-lg mb-1">
            <svg className="inline w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Western Visayas
          </p>
          <p className="text-lg mb-1">
            <svg className="inline w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Bachelor of Science in Information Technology
          </p>
          <p className="text-xl font-semibold mb-4">Full Stack Developer</p>
          
          {/* Buttons */}
          <div className="flex gap-3">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className={`px-4 py-2 rounded-lg transition text-sm ${
                darkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              View Resume
            </a>
            <a 
              href="mailto:your.email@example.com"
              className={`border-2 px-4 py-2 rounded-lg transition text-sm ${
                darkMode 
                  ? 'border-white hover:bg-white hover:text-black' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Dark Mode Toggle */}
      <div className="flex items-center">
        <span className={`mr-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input 
              type="checkbox" 
              id="toggle" 
              className="sr-only" 
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className={`block w-14 h-8 rounded-full transition-all duration-300 ease-in-out ${
              darkMode 
                ? 'bg-blue-500 shadow-inner' 
                : 'bg-gray-300 shadow-md'
            }`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
              darkMode ? 'translate-x-6' : ''
            }`}></div>
          </div>
        </label>
      </div>
    </div>
  )
}

export default ProfileHeader