import heroImage from "../assets/about.jpeg";
import Slider from "../Components/Slider";
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
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {getTranslation('discoverWhoAreNobel', language)}
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-8">
            {getTranslation('nobelBuildsValueInAir', language)}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {getTranslation('nobelDescription', language)}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={heroImage}
                  alt={getTranslation('nobelIndustrialFansAlt', language)}
                  className="w-full max-w-2xl h-[23rem] object-cover rounded-lg"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {getTranslation('whyChooseNobel', language)}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-28 h-28 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
               <img src="src/assets/experience.jpg" className="rounded-lg" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {getTranslation('yearsExperience', language)}
              </h3>
              <p className="text-blue-100">
                {getTranslation('yearsExperienceDesc', language)}
              </p>
            </div>
            <div className="text-center">
              <div className="w-28 h-28 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img src="src/assets/tech.png" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {getTranslation('modernTechnology', language)}
              </h3>
              <p className="text-blue-100">
                {getTranslation('modernTechnologyDesc', language)}
              </p>
            </div>
            <div className="text-center">
              <div className="w-28 h-28 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src="src/assets/made-in.png" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {getTranslation('madeInEgypt', language)}
              </h3>
              <p className="text-blue-100">
                {getTranslation('madeInEgyptDesc', language)}
              </p>
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
