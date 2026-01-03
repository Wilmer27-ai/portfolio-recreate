import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects({ darkMode }) {
  const [selectedCert, setSelectedCert] = useState(null)
  const [projectsRef, projectsAnim] = useScrollAnimation('fade-in-left')
  const [certsRef, certsAnim] = useScrollAnimation('fade-in-right', 0.1, 100)

  const projects = [
    {
      title: 'Peso Management System',
      tech: 'React, Vite, Tailwind CSS, Firebase',
      description: 'DTC-JobFair is a PESO management system for handling job fair applicants and interview results with real-time updates and a responsive interface.',
      link: 'https://dtc-jobfair.vercel.app/login',
      github: 'Not-available-to-public'
    },
    {
      title: 'Tech4ED-Monitoring-System',
      tech: 'React, Vite, Tailwind CSS, Firebase, React Native',
      description: 'Web application for foot monitoring in the DICT DTC Tech4ED Coworking Space, tracking user access and services with a companion mobile app.',
      link: 'https://dtc-jobfair.vercel.app/login',
      github: 'Not-available-to-public'
    },
    {
      title: 'Copy Cat',
      tech: 'HTML, CSS, JavaScript, Firebase',
      description: 'Practice project simulating an online document printing service. Users upload PDFs, choose print options, and connect with nearby print shops.',
      link: 'https://copy-cat-mu.vercel.app/',
      github: 'Not-available-to-public'
    },
    {
      title: 'Charlzinn Hotel',
      tech: 'HTML, SCSS, CSS, JavaScript',
      description: 'Hotel website featuring responsive design showcasing rooms, amenities, and booking details with clean design and smooth user experience.',
      link: 'https://charlzinnhotel.vercel.app/',
      github: 'https://github.com/Wilmer27-ai/charlzinnhotel'
    },
    {
      title: 'Trash Trade',
      tech: 'JavaScript, Bootstrap, Firebase',
      description: 'Admin dashboard for "Gamified Proper Waste Disposal System" managing users, transactions, and rewards in real time using Firestore.',
      link: 'https://wilmer27-ai.github.io/trashtradeAdmin/log-sign/index.html',
      github: 'Not-available-to-public'
    },
    {
      title: 'Callbox Ebooks page',
      tech: 'SCSS, PHP, HTML, CSS, WordPress',
      description: 'Developed during OJT at Callbox with multiple layout options for the main website, applying mobile-first approach and WordPress integration.',
      link: 'https://staging.callboxinc.com/wilmer-ebook-template/#',
      github: 'https://github.com/Wilmer27-ai/callbox-ebook-page'
    },
    {
      title: 'Callbox Industries We Serve page',
      tech: 'HTML, CSS, PHP, WordPress',
      description: 'Redesigned the Industries We Serve page during OJT at Callbox to enhance structure, visual appeal, and functionality.',
      link: 'https://staging.callboxinc.com/wilmer-v2/#',
      github: 'Not-available-to-public'
    },
    {
      title: 'Bogs Glass Store Website',
      tech: 'HTML, CSS',
      description: 'My first website that introduced me to web development and sparked my passion for front-end design.',
      link: 'https://wilmer27-ai.github.io/bogs-glass-store/#section1',
      github: 'https://github.com/Wilmer27-ai/bogs-glass-store'
    }
  ]

  const certifications = [
    {
      name: 'Certification Name 1',
      organization: 'Issuing Organization',
      date: 'January 2025',
      image: '/path-to-certificate1.jpg'
    },
    {
      name: 'Certification Name 2',
      organization: 'Issuing Organization',
      date: 'December 2024',
      image: '/path-to-certificate2.jpg'
    },
    {
      name: 'Certification Name 3',
      organization: 'Issuing Organization',
      date: 'November 2024',
      image: '/path-to-certificate3.jpg'
    }
  ]

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Projects */}
        <div ref={projectsRef} className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Recent Projects</h2>
          <div className={`space-y-4 max-h-150 overflow-y-auto pr-2 ${darkMode ? 'dark-scrollbar' : ''}`}>
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className={`border-b pb-3 last:border-b-0 p-2 rounded transition ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <h3 className={`font-bold text-base mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.tech}
                </p>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 transition"
                  >
                    Preview →
                  </a>
                  {project.github !== 'Not-available-to-public' && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm transition ${
                        darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                      }`}
                    >
                      Github →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Certifications */}
        <div ref={certsRef} className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Recent Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCert(cert)}
                className={`block w-full text-left border-b pb-3 last:border-b-0 p-2 rounded transition cursor-pointer ${
                  darkMode ? 'hover:bg-gray-800 border-gray-700' : 'hover:bg-gray-50 border-gray-200'
                }`}
              >
                <h3 className={`font-bold text-base hover:text-blue-600 transition ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.name} 🔍
                </h3>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.organization}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Issued: {cert.date}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className={`relative max-w-4xl w-full rounded-lg p-4 ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
            <button
              onClick={() => setSelectedCert(null)}
              className={`absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center transition ${
                darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              ✕
            </button>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">{selectedCert.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedCert.organization} • {selectedCert.date}
              </p>
            </div>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.name}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Projects