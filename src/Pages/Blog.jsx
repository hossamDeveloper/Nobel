import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../utils/LanguageContext'
import { categories } from '../data/products'
import { resolveAsset } from '../utils/assetResolver'
import { blogPosts, getBlogPostsByCategory } from '../data/blogPosts'

const Blog = () => {
  const { isArabic, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = getBlogPostsByCategory(selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return isArabic 
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#eb5a0c] via-[#ff7c35] to-[#f58c53]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/30">
                {isArabic ? 'المعرفة والخبرة' : 'Knowledge & Expertise'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {isArabic ? 'المدونة' : 'Blog'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {isArabic 
                ? 'اكتشف مقالات شاملة عن المراوح الصناعية وأنظمة التهوية من خبراء NOBEL'
                : 'Discover comprehensive articles about industrial fans and ventilation systems from NOBEL experts'}
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-lg font-medium">{blogPosts.length} {isArabic ? 'مقالة' : 'Articles'}</span>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 rotate-180">
          <svg className="w-full h-12 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        {/* Category Filter - Redesigned */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className={`text-lg font-bold text-gray-900 mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              {isArabic ? 'تصفية حسب الفئة' : 'Filter by Category'}
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-[#eb5a0c] to-[#ff7c35] text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent hover:border-gray-300'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isArabic ? 'الكل' : 'All'}
                  {selectedCategory === 'all' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                {selectedCategory === 'all' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#eb5a0c] to-[#ff7c35] text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.name}
                    {selectedCategory === category.id && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid - Redesigned */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => {
            const category = categories.find(c => c.id === post.category)
            return (
              <article
                key={post.id}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#eb5a0c]/10 to-transparent rounded-bl-full z-0" />
                
                {/* Image Container */}
                <Link to={`/blog/${post.id}`} className="block relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                  <img
                    src={resolveAsset(post.image)}
                    alt={post.title[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/300'
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-[#eb5a0c] to-[#ff7c35] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                      {category?.name || 'General'}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime[language]}
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 relative z-10">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 text-[#eb5a0c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#eb5a0c] transition-colors duration-300 leading-tight">
                      {post.title[language]}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                    {post.excerpt[language]}
                  </p>

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#eb5a0c] font-bold hover:text-[#ff7c35] transition-all duration-300 group/btn"
                  >
                    <span>{isArabic ? 'اقرأ المزيد' : 'Read More'}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 ${isArabic ? 'rotate-180' : ''}`}
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
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-[#eb5a0c] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200">
              <div className="w-24 h-24 bg-gradient-to-br from-[#eb5a0c] to-[#ff7c35] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {isArabic ? 'لا توجد مقالات' : 'No Articles Found'}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {isArabic ? 'لا توجد مقالات في هذه الفئة حالياً' : 'No articles found in this category at the moment'}
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-gradient-to-r from-[#eb5a0c] to-[#ff7c35] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'عرض جميع المقالات' : 'View All Articles'}
              </button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 mb-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#eb5a0c] mb-2">
                {blogPosts.length}
              </div>
              <div className="text-gray-700 font-semibold">
                {isArabic ? 'مقالة متاحة' : 'Available Articles'}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#eb5a0c] mb-2">
                {categories.length}
              </div>
              <div className="text-gray-700 font-semibold">
                {isArabic ? 'فئة مختلفة' : 'Different Categories'}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#eb5a0c] mb-2">
                25+
              </div>
              <div className="text-gray-700 font-semibold">
                {isArabic ? 'سنة خبرة' : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog
