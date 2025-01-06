 'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

 function About() {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          About DB UPVC & Lock Repairs Redditch
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Company Description */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              DB UPVC and Lock Repairs Redditch, Worcestershire have been in the industry 
              for over 30 years covering, lock repairs, UPVC windows and door repairs and 
              glazing repairs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take on all jobs, small and large and have built up a successful local 
              client base with mostly returning satisfied customers and work mainly on 
              recommendation.
            </p>
          </div>

          {/* Services Description */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              If your UPVC windows or doors are showing signs of wear or becoming difficult 
              to use, we can repair them so they are working 100%. If your requirement is 
              lock repair, door handle replacement or glazing repairs then we are the 
              company for you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Due to our long standing experience in the industry, we are confident that 
              most jobs can be rectified on our first visit.
            </p>
          </div>

          {/* Image Slider */}
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {/* Images */}
            <div className="relative h-full w-full">
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`UPVC Services ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={previousImage}
                className="p-2 rounded-full bg-white/80 hover:bg-white/90 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white/80 hover:bg-white/90 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImage === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

  export default About