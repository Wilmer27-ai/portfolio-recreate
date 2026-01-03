// src/components/ImageCarousel.jsx
import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'

function ImageCarousel({ darkMode }) {
  const [carouselRef, carouselAnim] = useScrollAnimation('fade-in')
  
  const images = [
    { id: 1, src: image1, alt: 'image1' },
    { id: 2, src: image2, alt: 'image2' },
    { id: 3, src: image3, alt: 'image3' },
    { id: 4, src: image4, alt: 'image4' },
    { id: 5, src: image5, alt: 'image5' },
    { id: 6, src: image6, alt: 'image6' },
  ]

  return (
    <div ref={carouselRef} className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
      <div className="p-6">
        <h2 className="text-xl font-semibold">Gallery</h2>
      </div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((image) => (
            <div key={`first-${image.id}`} className="shrink-0 w-64 h-48 mx-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image) => (
            <div key={`second-${image.id}`} className="shrink-0 w-64 h-48 mx-4">
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