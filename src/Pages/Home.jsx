import Slider from "../Components/Slider";
import heroImage from "../assets/about.jpeg";
import exper from '../assets/experience.jpg';
import tech from '../assets/tech.png';
import madeIn from '../assets/made-in.png'
import { categories, getCategories } from "../data/products";
import { useNavigate } from "react-router-dom";
import { resolveAsset } from "../utils/assetResolver";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useLanguage } from "../utils/LanguageContext";
import { getTranslation } from "../utils/translations";

const Home = () => {
  const navigate = useNavigate();
  const { language, isArabic } = useLanguage();
  const [imgLoaded, setImgLoaded] = useState({});

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  const localizedCategories = getCategories(isArabic);

  return (
    <div className="min-h-screen bg-gray-50">
      <Slider />
      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Discover Who Are NOBEL Section - Redesigned */}
        <div className="mb-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-3xl -z-10" />
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header Section */}
            <div className="relative bg-gradient-to-br from-[#eb5a0c] via-[#ff7c35] to-[#f58c53] px-8 md:px-12 lg:px-16 py-12 md:py-16">
              <div className="absolute inset-0 bg-black/10" />
              <div className={`relative z-10 ${isArabic ? 'text-right' : 'text-left'}`}>
                <div className="inline-block mb-4">
                  <span className="text-blue-200 text-sm md:text-base font-semibold uppercase tracking-wider">
                    {getTranslation('aboutUs', language) || 'About Us'}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {getTranslation('discoverWhoAreNobel', language)}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200">
                  {getTranslation('nobelBuildsValueInAir', language)}
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className={`space-y-6 ${isArabic ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        {getTranslation('nobelDescription', language)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-6">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {isArabic ? 'جودة عالية' : 'Premium Quality'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {isArabic ? 'معايير صناعية عالمية' : 'International standards'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {isArabic ? 'كفاءة عالية' : 'High Efficiency'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {isArabic ? 'أداء محسّن' : 'Optimized performance'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {isArabic ? 'ابتكار مستمر' : 'Continuous Innovation'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {isArabic ? 'تقنيات حديثة' : 'Modern technologies'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {isArabic ? 'دعم فني' : 'Expert Support'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {isArabic ? 'فريق محترف' : 'Professional team'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`relative ${isArabic ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
                    <img
                      src={heroImage}
                      alt={getTranslation('nobelIndustrialFansAlt', language)}
                      className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                      decoding="async"
                      fetchpriority="high"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-blue-600/20 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
                  </div>
                  
                  {/* Floating Stats Card */}
                  <div className={`absolute ${isArabic ? 'left-4' : 'right-4'} -bottom-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100`}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                      <div className="text-sm text-gray-600 font-medium">
                        {isArabic ? 'سنة خبرة' : 'Years Experience'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose NOBEL Section - Redesigned */}
        <div className="mb-20 relative">
          <div className="relative bg-gradient-to-br from-[#eb5a0c] via-[#ff7c35] to-[#f58c53] rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16">
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block mb-4">
                  <span className="text-blue-200 text-sm md:text-base font-semibold uppercase tracking-wider">
                    {isArabic ? 'مميزاتنا' : 'Our Advantages'}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {getTranslation('whyChooseNobel', language)}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 - Experience */}
                <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                      <img 
                        src={resolveAsset(exper)} 
                        className="rounded-2xl  object-cover relative z-10" 
                        alt={getTranslation('yearsExperience', language)}
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                      {getTranslation('yearsExperience', language)}
                    </h3>
                    <p className="text-blue-100 text-center leading-relaxed">
                      {getTranslation('yearsExperienceDesc', language)}
                    </p>
                    {/* Decorative Icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Technology */}
                <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                      <img 
                        src={resolveAsset(tech)} 
                        className="rounded-2xl object-cover relative z-10" 
                        alt={getTranslation('modernTechnology', language)}
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                      {getTranslation('modernTechnology', language)}
                    </h3>
                    <p className="text-blue-100 text-center leading-relaxed">
                      {getTranslation('modernTechnologyDesc', language)}
                    </p>
                    {/* Decorative Icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Made in Egypt */}
                <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                      <img 
                        src={resolveAsset(madeIn)} 
                        className="rounded-2xl object-cover relative z-10" 
                        alt={getTranslation('madeInEgypt', language)}
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                      {getTranslation('madeInEgypt', language)}
                    </h3>
                    <p className="text-blue-100 text-center leading-relaxed">
                      {getTranslation('madeInEgyptDesc', language)}
                    </p>
                    {/* Decorative Icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 text-blue-200">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-white" />
                  <span className="text-sm font-medium">
                    {isArabic ? 'نحن نقدم الأفضل دائماً' : 'We Always Deliver Excellence'}
                  </span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {getTranslation('nobelProductCategories', language)}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {getTranslation('exploreOurRange', language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {localizedCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white flex flex-col justify-between rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-center ">
                  <div>
                    <div className="w-full h-52 mb-4 rounded-lg overflow-hidden relative">
                      {!imgLoaded[category.id] && (
                        <Skeleton className="absolute inset-0" width="100%" height="100%" />
                      )}
                      <img
                        src={resolveAsset(category.image) || "/api/placeholder/300/200"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "/api/placeholder/300/200";
                        }}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        onLoad={() => setImgLoaded((p) => ({ ...p, [category.id]: true }))}
                        style={{ opacity: imgLoaded[category.id] ? 1 : 0, transition: 'opacity 300ms ease' }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {category.description}
                      </p>
                    )}
                    
                  </div>
                 
                </div>
                <div className="flex items-center justify-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    <span>{getTranslation('viewProducts', language)}</span>
                    <svg
                      className={`w-4 h-4 ${isArabic ? 'rotate-180 mr-1 mt-1' : ''} ml-1 group-hover:translate-x-1 transition-transform duration-300`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/products")}
              className="bg-gray-800 text-white py-4 px-10 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-lg font-medium"
            >
              {getTranslation('viewAllProducts', language)}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {getTranslation('getInTouch', language)}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {getTranslation('locateUs', language)}
              </h3>
              <p className="text-gray-600">
                {getTranslation('locateUsAddress', language)}
              </p>
              <a
                href="https://maps.app.goo.gl/HfM85CbHR6tw2Ajw6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-700 underline"
              >
                {getTranslation('viewLocationOnGoogleMaps', language)}
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {getTranslation('openHours', language)}
              </h3>
              <p className="text-gray-600">
                {getTranslation('openHoursTime', language)}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {getTranslation('mailUs', language)}
              </h3>
              <p className="text-gray-600">
                {getTranslation('mailUsEmail', language)}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Software Button */}
      <a
        href="https://software.nobeleng.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isArabic ? 'left-6' : 'right-6'} z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white text-sm`}
      >
        {getTranslation('software', language)}
      </a>
    </div>
  );
};

export default Home;
