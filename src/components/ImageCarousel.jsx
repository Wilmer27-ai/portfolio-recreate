// src/components/ImageCarousel.jsx
import React from 'react'
import profileImg from '../assets/profile.jpg'

function ImageCarousel({ darkMode }) {
  // Using the same profile image multiple times for demonstration
  const images = [
    { id: 1, src: profileImg, alt: 'Image 1' },
    { id: 2, src: profileImg, alt: 'Image 2' },
    { id: 3, src: profileImg, alt: 'Image 3' },
    { id: 4, src: profileImg, alt: 'Image 4' },
    { id: 5, src: profileImg, alt: 'Image 5' },
    { id: 6, src: profileImg, alt: 'Image 6' },
  ]

  return (
    <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <div className="p-6">
        <h2 className="text-xl font-semibold">Gallery</h2>
      </div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((image) => (
            <div key={`first-${image.id}`} className="flex-shrink-0 w-64 h-48 mx-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image) => (
            <div key={`second-${image.id}`} className="flex-shrink-0 w-64 h-48 mx-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-6"></div> {/* Bottom padding */}
    </div>
  )
}

export default ImageCarousel