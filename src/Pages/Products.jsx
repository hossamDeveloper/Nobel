import { products, categories, getProductsByCategory, getProductsBySubcategory, getCategories, getAllProducts, getProductsByCategoryLocalized, getProductsBySubcategoryLocalized } from "../data/products";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { resolveAsset } from "../utils/assetResolver";
import { useLanguage } from "../utils/LanguageContext";
import { getTranslation } from "../utils/translations";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, isArabic } = useLanguage();

  // Initialize from URL once on mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    const subcategoryFromUrl = searchParams.get('subcategory');
    const searchFromUrl = searchParams.get('search');

    if (categoryFromUrl) setSelectedCategory(categoryFromUrl);
    if (subcategoryFromUrl) setSelectedSubcategory(subcategoryFromUrl);
    if (searchFromUrl) setSearchTerm(searchFromUrl);

    // Clear the search param from URL after consuming it
    if (searchFromUrl) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete('search');
      setSearchParams(newSearchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const localizedCategories = useMemo(() => getCategories(isArabic), [isArabic]);

  const getFilteredProducts = () => {
    let baseList;
    if (selectedCategory !== "all") {
      if (selectedSubcategory) {
        baseList = getProductsBySubcategoryLocalized(selectedCategory, selectedSubcategory, isArabic);
      } else {
        baseList = getProductsByCategoryLocalized(selectedCategory, isArabic);
      }
    } else {
      baseList = getAllProducts(isArabic);
    }

    // Always hide main products from display - only show series
    let filtered = baseList.filter(product => !product.isMainProduct);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.parentProduct && product.parentProduct.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const currentCategory = localizedCategories.find(cat => cat.id === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory("");
    setSelectedProduct(null);
    
    // Update URL parameters (preserve existing search term)
    const newSearchParams = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', categoryId);
    }
    newSearchParams.delete('subcategory');
    setSearchParams(newSearchParams);
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    setSelectedProduct(null);
    
    // Update URL parameters (preserve existing search term)
    const newSearchParams = new URLSearchParams(searchParams);
    if (subcategoryId === "") {
      newSearchParams.delete('subcategory');
    } else {
      newSearchParams.set('subcategory', subcategoryId);
    }
    setSearchParams(newSearchParams);
  };

  const dirAlign = isArabic ? 'text-right' : 'text-left';

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getTranslation('productsPageTitle', language)}</h1>
          <p className="text-gray-600 text-lg">{getTranslation('productsPageSubtitle', language)}</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder={getTranslation('searchSeriesPlaceholder', language)}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full px-4 ${isArabic ? 'pl-10 pr-4' : 'pr-10'} py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${dirAlign}`}
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className={`absolute inset-y-0 ${isArabic ? 'left-2' : 'right-2'} px-1 text-gray-400 hover:text-gray-600`}
                    aria-label={getTranslation('clearSearch', language)}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">{getTranslation('allCategories', language)}</option>
                {localizedCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {currentCategory && currentCategory.subcategories && currentCategory.subcategories.length > 0 && (
              <div className="lg:w-64">
                <select
                  value={selectedSubcategory}
                  onChange={(e) => handleSubcategoryChange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{`${getTranslation('allPrefix', language)} ${currentCategory.name}`}</option>
                  {currentCategory.subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-600 mb-4">
            {getTranslation('showing', language)} {filteredProducts.length} {getTranslation('productSeriesLower', language)}
            {selectedCategory !== "all" && (
              <span> {getTranslation('inLower', language)} {currentCategory?.name}</span>
            )}
            {selectedSubcategory && (
              <span> - {currentCategory?.subcategories?.find(sub => sub.id === selectedSubcategory)?.name}</span>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg flex flex-col justify-between shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Product Image */}
              <div>
              <div className="relative h-48 bg-gray-200">
                {product.image ? (
                  <img
                    src={resolveAsset(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100" style={{display: product.image ? 'none' : 'flex'}}>
                  <div className="text-6xl text-gray-400">{product.icon}</div>
                </div>
                <div className={`absolute top-4 ${isArabic ? 'left-4' : 'right-4'} flex flex-col gap-2`}>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {localizedCategories.find(cat => cat.id === product.category)?.name}
                  </span>
                  <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">
                    {getTranslation('seriesLabel', language)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                {product.parentProduct && (
                  <p className="text-sm text-blue-600 mb-2">{getTranslation('partOfLabel', language)} {product.parentProduct}</p>
                )}
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{product.description}</p>
                
                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{getTranslation('keySpecifications', language)}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    {product.specifications && product.specifications.wheelSizes && (
                      <div className="flex justify-between">
                        <span>{getTranslation('wheelSizesLabel', language)}</span>
                        <span className="font-medium text-xs">{product.specifications.wheelSizes}</span>
                      </div>
                    )}
                    {product.specifications && product.specifications.volume && (
                      <div className="flex justify-between">
                        <span>{getTranslation('volumeLabel', language)}</span>
                        <span className="font-medium text-xs">{product.specifications.volume}</span>
                      </div>
                    )}
                    {product.specifications && product.specifications.volumeFlow && (
                      <div className="flex justify-between">
                        <span>{getTranslation('volumeFlowLabel', language)}</span>
                        <span className="font-medium text-xs">{product.specifications.volumeFlow}</span>
                      </div>
                    )}
                    {product.specifications && product.specifications.pressure && (
                      <div className="flex justify-between">
                        <span>{getTranslation('pressureLabel', language)}</span>
                        <span className="font-medium text-xs">{product.specifications.pressure}</span>
                      </div>
                    )}
                    {product.specifications && product.specifications.temperature && (
                      <div className="flex justify-between">
                        <span>{getTranslation('temperatureLabel', language)}</span>
                        <span className="font-medium text-xs">{product.specifications.temperature}</span>
                      </div>
                    )}
                  </div>
                </div>

                
              </div>
              </div>

              <div className="p-6">
              <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  {getTranslation('viewDetails', language)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{getTranslation('noResultsTitle', language)}</p>
            <p className="text-gray-400 text-sm mt-2">{getTranslation('noResultsHint', language)}</p>
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                    <div className="flex gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {localizedCategories.find(cat => cat.id === selectedProduct.category)?.name}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {getTranslation('productSeriesLabel', language)}
                      </span>
                    </div>
                    {selectedProduct.parentProduct && (
                      <p className="text-sm text-blue-600">{getTranslation('partOfLabel', language)} {selectedProduct.parentProduct}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Product Image in Modal */}
                <div className="mb-6">
                  <div className="relative h-[800px] bg-gray-200 rounded-lg overflow-hidden">
                    {selectedProduct.image ? (
                      <img
                        src={resolveAsset(selectedProduct.image)}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        loading="eager"
                        decoding="async"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100" style={{display: selectedProduct.image ? 'none' : 'flex'}}>
                      <div className="text-8xl text-gray-400">{selectedProduct.icon}</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{selectedProduct.description}</p>

                {/* Main Specifications */}
                {selectedProduct.specifications && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{getTranslation('specificationsLabel', language)}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 capitalize mb-2">
                            {key.replace(/([A-Z])/g, ' ').trim()}
                          </h4>
                          <p className="text-gray-600">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    {getTranslation('close', language)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default Products;
