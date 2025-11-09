import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../utils/LanguageContext'
import { getBlogPostById, blogPosts } from '../data/blogPosts'
import { categories } from '../data/products'
import { resolveAsset } from '../utils/assetResolver'

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isArabic, language } = useLanguage()
  const post = getBlogPostById(id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isArabic ? 'المقال غير موجود' : 'Post Not Found'}
          </h1>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find(c => c.id === post.category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return isArabic 
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const formatContent = (content) => {
    // Simple markdown-like formatting
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        )
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        )
      }
      if (line.startsWith('- ') || line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700">
            {line.replace(/^[-1-5]\.?\s/, '')}
          </li>
        )
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
        <img
          src={resolveAsset(post.image)}
          alt={post.title[language]}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/api/placeholder/1200/500'
          }}
        />
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                {category?.name || 'General'}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {post.title[language]}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime[language]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <svg className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
        </button>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
              {formatContent(post.content[language])}
            </div>
          </div>

          {/* Keywords */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {isArabic ? 'الكلمات المفتاحية' : 'Keywords'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isArabic ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resolveAsset(relatedPost.image)}
                      alt={relatedPost.title[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/400/300'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title[language]}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {formatDate(relatedPost.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isArabic ? 'هل تحتاج مساعدة في اختيار المروحة المناسبة؟' : 'Need Help Choosing the Right Fan?'}
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            {isArabic 
              ? 'اتصل بفريقنا الخبير للحصول على استشارة مجانية'
              : 'Contact our expert team for a free consultation'}
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {isArabic ? 'عرض المنتجات' : 'View Products'}
          </Link>
        </div>
      </main>
    </div>
  )
}

export default BlogDetails

