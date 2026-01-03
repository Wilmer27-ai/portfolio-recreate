import React, { useState } from 'react'

function Chatbot({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Button - Matches dark mode toggle style */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 hover:shadow-xl z-50 font-medium ${
            darkMode
              ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-neumorphic-toggle-inset'
              : 'bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-neumorphic-toggle-outset'
          }`}
        >
          <svg className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>Chat with me</span>
        </button>
      )}

      {/* Chat Window with animation */}
      {isOpen && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 w-[calc(100%-2rem)] max-w-96 h-[600px] max-h-[70vh] rounded-lg shadow-2xl overflow-hidden z-50 animate-fade-in-up bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition z-10 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <iframe
            src="https://app.thinkstack.ai/bot/index.html?chatbot_id=695867857c648a4a37fb9470&type=inline"
            className="w-full h-full border-0"
            title="AI Assistant"
            allow="clipboard-read; clipboard-write"
          />
        </div>
      )}
    </>
  )
}

export default Chatbot