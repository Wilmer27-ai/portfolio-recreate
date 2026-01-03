import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import Chatbot from './components/Chatbot'

function Layout() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      {/* Outer Container - Adjustable max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-10 py-8">
        
        <ProfileHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Content Sections */}
        <div className="space-y-8">
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Footer darkMode={darkMode} />
          <ImageCarousel darkMode={darkMode} />
        </div>
        
      </div>
      
      {/* Chatbot - Fixed position */}
      <Chatbot darkMode={darkMode} />
    </div>
  )
}

export default Layout
