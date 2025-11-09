import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { products } from "../data/products";
import { useLanguage } from "../utils/LanguageContext";
import { getTranslation } from "../utils/translations";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isArabic, toggleLanguage, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const desktopInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const sections = [
    { name: getTranslation("home", language), path: "/" },
    { name: getTranslation("products", language), path: "/products" },
    { name: getTranslation("applications", language), path: "/applications" },
    {
      name: getTranslation("certifications", language),
      path: "/certifications",
    },
    { name: getTranslation("clients", language), path: "/clients" },
    { name: getTranslation("about", language), path: "/about" },
    { name: isArabic ? "المدونة" : "Blog", path: "/blog" },
  ];

  const contactInfo = {
    address: "14th Helmy Abd El Aty St. Eight Zone, Nasr City, Cairo, Egypt",
    phone: "(00202)22718121 - (00202)22718125",
    customerService: "(+2) 01065000130 – (+2) 01065000128",
    email: "nobeleng@yahoo.com",
    workingHours: {
      weekdays: getTranslation("weekdays", language),
      saturday: getTranslation("saturday", language),
      sunday: getTranslation("sunday", language),
    },
  };

  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSuggestions([]);
      return;
    }
    const filtered = products
      .filter((p) => !p.isMainProduct)
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.parentProduct && p.parentProduct.toLowerCase().includes(q))
      )
      .slice(0, 8)
      .map((p) => ({ id: p.id, name: p.name }));
    setSuggestions(filtered);
  }, [searchQuery]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/products");
    }
  };

  const handleSelectSuggestion = (name) => {
    setSearchQuery(name);
    setShowDropdown(false);
    navigate(`/products?search=${encodeURIComponent(name)}`);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الصف الأول: اللوجو والبحث ورقم التواصل */}
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={logo}
                alt={getTranslation("logoAlt", language)}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex max-w-md relative">
            <form onSubmit={handleSearch} className="w-full" autoComplete="off">
              <div className="relative">
                <input
                  ref={desktopInputRef}
                  type="text"
                  placeholder={getTranslation("searchPlaceholder", language)}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => suggestions.length && setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                  className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setShowDropdown(false);
                        desktopInputRef.current?.focus();
                      }}
                      className="px-1 text-gray-400 hover:text-gray-600"
                      aria-label={getTranslation("clearSearch", language)}
                    >
                      ×
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex items-center"
                    aria-label={getTranslation("submitSearch", language)}
                  >
                    <svg
                      className="h-5 w-5 text-gray-400 hover:text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            {showDropdown && suggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                <ul className="max-h-72 overflow-auto">
                  {suggestions.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelectSuggestion(s.name)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* رقم التواصل وزر الترجمة */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Software Button */}
            <a
              href="https://software.nobeleng.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {getTranslation("software", language)}
            </a>

            {/* زر الترجمة */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              title={getTranslation("switchToArabic", language)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="text-sm font-medium">
                {isArabic ? "EN" : "عربي"}
              </span>
            </button>

            {/* رقم الهاتف */}
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                +2 01065000130
              </span>
            </div>
          </div>

          {/* Mobile Search and Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => {
                setIsSearchVisible(!isSearchVisible);
                setIsMobileMenuOpen(false);
              }}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label={getTranslation("toggleSearch", language)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile Software Button */}
            <a
              href="https://software.nobeleng.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-blue-600 rounded-md text-sm"
            >
              {getTranslation("software", language)}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsSearchVisible(false);
              }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={getTranslation("toggleMenu", language)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* الصف الثاني: الصفحات مع ContactUs */}
        <div className="py-2">
          <nav className="hidden md:flex justify-center items-center space-x-1">
            {sections.map((section, index) => (
              <Link
                key={index}
                to={section.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === section.path
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {section.name}
              </Link>
            ))}

            {/* External Software Link (Desktop secondary row)
            <a
              href="https://software.nobeleng.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200"
            >
              {getTranslation('software', language)}
            </a> */}

            {/* ContactUs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowContactDropdown(!showContactDropdown)}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1"
              >
                <span>{getTranslation("contactUs", language)}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showContactDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showContactDropdown && (
                <div className={`absolute top-full ${isArabic? 'right-0':'left-0'} mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-30 overflow-hidden`}>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {getTranslation("contactInformation", language)}
                    </h3>

                    {/* Address with Google Maps */}
                    <div className="flex items-start space-x-3 mb-4">
                      <svg
                        className="h-5 w-5 text-red-600 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700">
                          {getTranslation("address", language)}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {contactInfo.address}
                        </p>
                        <a
                          href="https://maps.app.goo.gl/HfM85CbHR6tw2Ajw6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <svg
                            className="h-3 w-3 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {getTranslation("viewOnGoogleMaps", language)}
                        </a>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {getTranslation("telFax", language)}
                          </p>
                          <p className="text-sm text-gray-600">
                            {contactInfo.phone}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {getTranslation("customerService", language)}
                          </p>
                          <p className="text-sm text-gray-600">
                            {contactInfo.customerService}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3 mb-4">
                      <svg
                        className="h-5 w-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {getTranslation("email", language)}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contactInfo.email}
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start space-x-3">
                      <svg
                        className="h-5 w-5 text-orange-600 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          {getTranslation("workingHours", language)}
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>{contactInfo.workingHours.weekdays}</p>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Search Bar */}
        {isSearchVisible && (
          <div className="md:hidden pb-4 relative">
            <form onSubmit={handleSearch} autoComplete="off">
              <div className="relative">
                <input
                  ref={mobileInputRef}
                  type="text"
                  placeholder={getTranslation("searchPlaceholder", language)}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => suggestions.length && setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                  className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setShowDropdown(false);
                        mobileInputRef.current?.focus();
                      }}
                      className="px-1 text-gray-400 hover:text-gray-600"
                      aria-label={getTranslation("clearSearch", language)}
                    >
                      ×
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex items-center"
                    aria-label={getTranslation("submitSearch", language)}
                  >
                    <svg
                      className="h-5 w-5 text-gray-400 hover:text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            {showDropdown && suggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                <ul className="max-h-72 overflow-auto">
                  {suggestions.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelectSuggestion(s.name)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav id="mobile-nav" className="md:hidden pb-4">
            <ul className="space-y-1">
              {sections.map((section, index) => (
                <li key={index}>
                  <Link
                    to={section.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === section.path
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
        

              {/* Mobile Software Link
              <li>
                <a
                  href="https://software.nobeleng.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  {getTranslation("software", language)}
                </a>
              </li> */}

                    {/* زر الترجمة */}
                    <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                title={getTranslation("switchToArabic", language)}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {isArabic ? "EN" : "عربي"}
                </span>
              </button>

              {/* Mobile Contact Info */}
              <li>
                <div className="px-3 py-2">
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    {getTranslation("contactInformation", language)}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <svg
                        className="h-4 w-4 text-red-600 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-1">
                          {contactInfo.address}
                        </p>
                        <a
                          href="https://maps.app.goo.gl/HfM85CbHR6tw2Ajw6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-800"
                        >
                          {getTranslation("viewOnGoogleMaps", language)}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-gray-600">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        {contactInfo.customerService}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-4 w-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-600">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg
                        className="h-4 w-4 text-orange-600 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="text-gray-600">
                        <p className="font-medium">
                          {getTranslation("workingHours", language)}:
                        </p>
                        <p>{contactInfo.workingHours.weekdays}</p>
                        <p>{contactInfo.workingHours.saturday}</p>
                        <p>{contactInfo.workingHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
