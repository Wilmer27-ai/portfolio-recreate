import profileImg from '../assets/profile.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function ProfileHeader({ darkMode, toggleDarkMode }) {
  const [profileRef, profileAnim] = useScrollAnimation('fade-in-left')
  const [detailsRef, detailsAnim] = useScrollAnimation('fade-in-up', 0.1, 200)
  const [buttonsRef, buttonsAnim] = useScrollAnimation('fade-in-right', 0.1, 300)

  return (
    <div className="flex justify-between items-start mb-12">
      {/* Left Side - Profile */}
      <div className="flex gap-6 items-start">
        {/* Profile Image */}
        <div 
          ref={profileRef}
          className={`animate-on-scroll ${profileAnim} w-40 h-48 overflow-hidden shrink-0 rounded-xl ${
            darkMode ? 'bg-gray-800 border-white' : 'bg-gray-200'
          }`}
        >
          <img 
            src={profileImg} 
            alt="Wilmer L. Suelo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div ref={detailsRef} className={`animate-on-scroll ${detailsAnim}`}>
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
            </svg>
            Bachelor of Science in Information Technology
          </p>
          <p className="text-lg mb-4">Full Stack Developer</p>

          {/* Buttons */}
          <div ref={buttonsRef} className={`animate-on-scroll ${buttonsAnim} flex gap-3 mt-4`}>
            <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              darkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              View Resume
            </button>
            <button className={`px-6 py-2 rounded-lg font-medium border transition-colors ${
              darkMode 
                ? 'border-white hover:bg-white hover:text-black' 
                : 'border-black hover:bg-black hover:text-white'
            }`}>
              Send Email
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Dark Mode Toggle */}
      <div className="flex items-center">
        <span className={`mr-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dark Mode</span>
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
                ? 'bg-blue-500 shadow-neumorphic-toggle-inset' 
                : 'bg-gray-300 shadow-neumorphic-toggle-outset'
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