import heroImage from "../assets/hero-image.jpg";
import Slider from "../Components/Slider";
import { categories } from "../data/products";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Slider />
      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Who Are <span className="text-blue-600">NOBEL</span> ?
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-8">
            NOBEL Builds Value In Air
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  NOBEL is a company which has been operating for more than 25
                  years in the aeraulic sector by producing various types of
                  heavy-duty industrial fans which are completely manufactured
                  and assembled in Egypt. NOBEL is the company that is able to
                  provide inexpensive, reliable, and effective air ventilation
                  solutions as our production department is equipped with modern
                  technologies such as laser cutting, CNC punching machines,
                  static and dynamic balancing, etc.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={heroImage}
                  alt="NOBEL Industrial Fans"
                  className="w-full max-w-2xl h-[23rem] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose NOBEL?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 14.77 4.22 16.7l.91-5.32L1.27 7.62l5.34-.78L10 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                25+ Years Experience
              </h3>
              <p className="text-blue-100">
                Over 25 years in the aeraulic sector
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 3h5.2L16 5h2a2 2 0 012 2v2h-2V7h-2l-1.4 2h-5.2L8 7H6v2H4V7a2 2 0 012-2h2l1.4-2zM4 15h2v2h2l1.4-2h5.2L16 17h2v-2h2v2a2 2 0 01-2 2h-2l-1.4 2H9.4L8 19H6a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
              <p className="text-blue-100">
                Laser cutting, CNC punching machines
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 20h18l-9-16-9 16zm9-5l3 5H9l3-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Made in Egypt</h3>
              <p className="text-blue-100">
                Completely manufactured and assembled in Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NOBEL Product Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of industrial ventilation and air
              movement solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white flex flex-col justify-between rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-center ">
                  <div>
                    <div className="w-full h-52 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={category.image || "/api/placeholder/300/200"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "/api/placeholder/300/200";
                        }}
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
                    {category.subcategories &&
                      category.subcategories.length > 0 && (
                        <p className="text-sm text-gray-500 mb-3">
                          {category.subcategories.length} subcategories
                        </p>
                      )}
                  </div>
                 
                </div>
                <div className="flex items-center justify-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    <span>View Products</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
              View All Products
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get In Touch
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
                Locate Us
              </h3>
              <p className="text-gray-600">
                14th helmy abd el aty st. eight zone nasr city cairo egypt
              </p>
              <a
                href="https://maps.app.goo.gl/HfM85CbHR6tw2Ajw6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-700 underline"
              >
                View location on Google Maps
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
                Open Hours
              </h3>
              <p className="text-gray-600">Sat To Fri 9:00 AM - 9:00 PM</p>
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
                Mail Us
              </h3>
              <p className="text-gray-600">nobeleng@yahoo.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
