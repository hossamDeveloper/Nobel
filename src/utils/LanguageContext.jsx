import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(() => {
    // تحميل اللغة المحفوظة من localStorage أو استخدام الإنجليزية كافتراضي
    const saved = localStorage.getItem('language')
    return saved === 'ar'
  })

  useEffect(() => {
    // حفظ اللغة في localStorage عند التغيير
    localStorage.setItem('language', isArabic ? 'ar' : 'en')
    
    // تغيير اتجاه الصفحة حسب اللغة
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.documentElement.lang = isArabic ? 'ar' : 'en'
  }, [isArabic])

  const toggleLanguage = () => {
    setIsArabic(!isArabic)
  }

  const value = {
    isArabic,
    toggleLanguage,
    language: isArabic ? 'ar' : 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 