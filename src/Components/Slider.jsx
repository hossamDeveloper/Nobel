import { useState, useEffect } from 'react'
import slider1 from '../assets/slider3.jpg'
import slider2 from '../assets/slider22.jpeg'
import slider3 from '../assets/slider1.jpg'
import slider4 from '../assets/slider4.jpeg'
import slider5 from '../assets/slider5.jpeg'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

const Slider = () => {
  const { language, isArabic } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState([false, false, false, false, false])
  
  const slides = [
    {
      image: slider1,
      title: getTranslation('nobelEngineeringExcellence', language),
      subtitle: getTranslation('yearsOfInnovation', language),
      description: getTranslation('leadingManufacturer', language)
    },
    {
      image: slider2,
      title: getTranslation('advancedTechnologySolutions', language),
      subtitle: getTranslation('modernManufacturingExcellence', language),
      description: getTranslation('equippedWithTechnology', language)
    },
    {
      image: slider3,
      title: getTranslation('globalTrust', language),
      subtitle: getTranslation('sustainableSolutions', language),
      description: getTranslation('commitmentQuality', language)
    },
    {
      image: slider4,
      title: isArabic ? 'مراوح محورية خطية عالية الكفاءة' : 'High-Efficiency Inline Axial Fans',
      subtitle: isArabic ? 'تدفق قوي وتركيب موفّر للمساحة' : 'Powerful airflow, space‑saving installs',
      description: isArabic
        ? 'تجمع بين تدفق هواء قوي وتصميم موفّر للمساحة لأنظمة التهوية الحديثة.'
        : 'Combining powerful airflow with space-saving design for modern ventilation systems.'
    },
    {
      image: slider5,
      title: isArabic ? 'Fan Section صندوقية مزدوجة المدخل' : 'Smoke Fire Rated',
      subtitle: isArabic ? 'عزل صوتي ممتاز وكفاءة تهوية عالية' : 'Superior acoustic insulation, high‑efficiency airflow',
      description: isArabic
        ? 'مراوح عالية الأداء مصممة للعمل في ظروف الدخان والحرائق، مما يضمن السلامة والموثوقية في أنظمة التهوية الطارئة.'
        : 'High-performance fans designed to operate under smoke and fire conditions, ensuring safety and reliability in emergency ventilation systems.'
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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleImgLoad = (index) => {
    setLoaded((prev) => {
      const copy = [...prev]
      copy[index] = true
      return copy
    })
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden group">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {!loaded[index] && (
              <Skeleton 
                className="absolute inset-0" 
                width="100%" 
                height="100%" 
                baseColor="#111827" 
                highlightColor="#1f2937" 
              />
            )}
            <div className="relative w-full h-full">
              <img 
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                  index === currentSlide ? 'scale-100' : 'scale-110'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchpriority={index === 0 ? 'high' : 'low'}
                sizes="(max-width: 768px) 100vw, 100vw"
                onLoad={() => handleImgLoad(index)}
                style={{ opacity: loaded[index] ? 1 : 0, transition: 'opacity 500ms ease' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className={`absolute inset-0 flex items-center justify-center z-20 ${
              isArabic ? 'text-right' : 'text-left'
            }`}>
              <div className={`text-white px-4 md:px-8 lg:px-12 max-w-6xl w-full ${
                isArabic ? 'text-right' : 'text-left'
              }`}>
                <div className={`space-y-4 md:space-y-6 transform transition-all duration-700 delay-300 ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  {/* Subtitle */}
                  <div className="inline-block">
                    <span className="text-sm md:text-base font-semibold text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                    isArabic ? 'text-right' : 'text-left'
                  }`}>
                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className={`text-base md:text-lg lg:text-xl max-w-3xl opacity-95 leading-relaxed ${
                    isArabic ? 'text-right ml-auto' : 'text-left'
                  }`}>
                    {slide.description}
                  </p>

                  {/* Button */}
                  <div className={`pt-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                    <button className="group/btn relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 overflow-hidden shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105">
                      <span className="relative z-10 flex items-center gap-2">
                        {getTranslation('learnMore', language)}
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 ${
                            isArabic ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className={`absolute top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 ${
          isArabic ? 'right-4 md:right-6' : 'left-4 md:left-6'
        }`}
        aria-label="Previous slide"
      >
        <svg 
          className={`w-6 h-6 md:w-8 md:h-8 ${isArabic ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className={`absolute top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 ${
          isArabic ? 'left-4 md:left-6' : 'right-4 md:right-6'
        }`}
        aria-label="Next slide"
      >
        <svg 
          className={`w-6 h-6 md:w-8 md:h-8 ${isArabic ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 md:gap-3 ${
        isArabic ? 'flex-row-reverse' : ''
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 md:w-12 bg-white shadow-lg shadow-white/50' 
                : 'w-2 md:w-3 bg-white/50 hover:bg-white/75'
            }`} />
            {index === currentSlide && (
              <div className="absolute inset-0 -m-1 rounded-full bg-white/20 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-5000 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: 'progress 5s linear'
          }}
        />
      </div>
    </div>
  )
}

export default Slider
