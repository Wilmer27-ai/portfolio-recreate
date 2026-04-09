// src/components/ImageCarousel.jsx
import React, { useState, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'

function ImageCarousel({ darkMode }) {
  const [carouselRef, carouselAnim] = useScrollAnimation('fade-in')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragTranslate, setDragTranslate] = useState(0)
  const flexRef = useRef(null)
  
  const images = [
    { id: 1, src: image1, alt: 'image1' },
    { id: 2, src: image2, alt: 'image2' },
    { id: 3, src: image3, alt: 'image3' },
    { id: 4, src: image4, alt: 'image4' },
    { id: 5, src: image5, alt: 'image5' },
    { id: 6, src: image6, alt: 'image6' },
  ]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - dragStart
    setDragTranslate(diff)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setDragTranslate(0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setDragTranslate(0)
  }

  return (
    <>
      <div ref={carouselRef} className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
        <div className="p-6">
          <h2 className="text-xl font-semibold">Gallery</h2>
        </div>
        
        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={flexRef}
            className={`flex ${isDragging ? '' : 'animate-scroll-seamless'}`}
            style={isDragging ? { transform: `translateX(${dragTranslate}px)` } : {}}
          >
            {/* First set of images */}
            {images.map((image) => (
              <div key={`first-${image.id}`} className="shrink-0 w-64 h-48 mx-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(image.src)}
                  className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image) => (
              <div key={`second-${image.id}`} className="shrink-0 w-64 h-48 mx-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(image.src)}
                  className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-6"></div> {/* Bottom padding */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl max-h-[80vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center z-10 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCarousel