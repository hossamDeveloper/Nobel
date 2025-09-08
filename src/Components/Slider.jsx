import { useState, useEffect } from 'react'
import slider1 from '../assets/50-D3T6-8eR.jpg'
import slider2 from '../assets/slider-2.jpg'
import slider3 from '../assets/hero-image.jpg'
import Skeleton from 'react-loading-skeleton'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState([false, false, false])
  
  const slides = [
    {
      image: slider3,
      title: "NOBEL Engineering Excellence",
      subtitle: "25+ Years of Innovation in Industrial Fans",
      description: "Leading manufacturer of heavy-duty industrial fans, completely manufactured and assembled in Egypt."
    },
    {
      image: slider2,
      title: "Advanced Technology Solutions",
      subtitle: "Modern Manufacturing Excellence",
      description: "Equipped with laser cutting, CNC punching machines, and state-of-the-art production facilities."
    },
    {
      image: slider1,
      title: "Advanced Technology Solutions",
      subtitle: "Modern Manufacturing Excellence",
      description: "Equipped with laser cutting, CNC punching machines, and state-of-the-art production facilities."
    }
  ]

  // Preload the first slide image as early as possible and prefetch the rest in the background
  useEffect(() => {
    // Preload first image
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = slides[0].image
    document.head.appendChild(link)

    // Prefetch remaining images
    slides.slice(1).forEach((s, idx) => {
      const img = new Image()
      img.decoding = 'async'
      img.fetchPriority = 'low'
      img.onload = () => {
        setLoaded((prev) => {
          const copy = [...prev]
          copy[idx + 1] = true
          return copy
        })
      }
      img.src = s.image
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleImgLoad = (index) => {
    setLoaded((prev) => {
      const copy = [...prev]
      copy[index] = true
      return copy
    })
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {!loaded[index] && (
              <Skeleton className="absolute inset-0" width="100%" height="100%" baseColor="#111827" highlightColor="#1f2937" />
            )}
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchpriority={index === 0 ? 'high' : 'low'}
              sizes="(max-width: 768px) 100vw, 100vw"
              onLoad={() => handleImgLoad(index)}
              style={{ opacity: loaded[index] ? 1 : 0, transition: 'opacity 300ms ease' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-300">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider


