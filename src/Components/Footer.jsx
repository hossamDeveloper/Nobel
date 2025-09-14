import logo from '../assets/logo.png'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

const Footer = () => {
  const { language, isArabic } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt={getTranslation('logoAlt', language)} className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {getTranslation('trustedPartner', language)}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.6 8.6 0 01-2.71 1.05 4.26 4.26 0 00-7.26 3.88A12.1 12.1 0 013 4.79a4.25 4.25 0 001.32 5.67 4.2 4.2 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18c-.47.13-.97.2-1.49.08a4.27 4.27 0 003.98 2.96A8.55 8.55 0 012 19.54a12.07 12.07 0 006.54 1.92c7.85 0 12.15-6.5 12.15-12.13 0-.19 0-.37-.01-.56A8.57 8.57 0 0022.46 6z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.4 0-4.6.1-1 .1-1.6.2-2 .3-.5.2-.8.4-1.1.8-.3.3-.6.6-.8 1.1-.1.4-.2 1-.3 2-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 1 .2 1.6.3 2 .2.5.4.8.8 1.1.3.3.6.6 1.1.8.4.1 1 .2 2 .3 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1-.1 1.6-.2 2-.3.5-.2.8-.4 1.1-.8.3-.3.6-.6.8-1.1.1-.4.2-1 .3-2 .1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1-.2-1.6-.3-2-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.6-1.1-.8-.4-.1-1-.2-2-.3-1.2-.1-1.5-.1-4.6-.1m0 3.3a5.6 5.6 0 110 11.2 5.6 5.6 0 010-11.2m0 2a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2m5.7-1.1a1.3 1.3 0 110 2.7 1.3 1.3 0 010-2.7z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-wider uppercase text-gray-400 mb-4">
              {getTranslation('quickLinks', language)}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition">{getTranslation('home', language)}</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition">{getTranslation('products', language)}</a></li>
              <li><a href="/applications" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition">{getTranslation('applications', language)}</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition">{getTranslation('about', language)}</a></li>
              <li><a href="/clients" className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition">{getTranslation('clients', language)}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm tracking-wider uppercase text-gray-400 mb-4">
              {getTranslation('contact', language)}
            </h4>
            <div className="text-sm text-gray-300 space-y-3">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
                <span>{getTranslation('locateUsAddress', language)}</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.7 3.1 4.5 5.9 7.6 7.6l2.5-2.5c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C9.6 22.3 1.7 14.4 1.7 4.3 1.7 3.6 2.3 3 3 3h3.6c.7 0 1.3.6 1.3 1.3 0 1 .2 2.1 .5 3.1 .1 .4 0 .9-.3 1.2l-2.5 2.5z"/></svg>
                <span>{getTranslation('telFax', language)}: (00202)22718121 - (00202)22718125</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.7 3.1 4.5 5.9 7.6 7.6l2.5-2.5c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C9.6 22.3 1.7 14.4 1.7 4.3 1.7 3.6 2.3 3 3 3h3.6c.7 0 1.3.6 1.3 1.3 0 1 .2 2.1 .5 3.1 .1 .4 0 .9-.3 1.2l-2.5 2.5z"/></svg>
                <span>{getTranslation('customerService', language)}: (+2) 01065000130 – (+2) 01065000128</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1 .9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 3l-7 4.5L5 7V6l7 4.5L19 6v1z"/></svg>
                <span>{getTranslation('email', language)}: <a href="mailto:nobeleng@yahoo.com" className="underline hover:text-white">nobeleng@yahoo.com</a></span>
              </p>
              <div className="pt-2">
                <p className="font-semibold text-gray-300 mb-2">{getTranslation('workingHours', language)}</p>
                <ul className="space-y-1">
                  <li className="flex items-center justify-between text-gray-300">
                    <span className="text-sm">{getTranslation('weekdays', language)}</span>
                    <span className="text-xs bg-white/10 text-gray-100 px-2 py-1 rounded-md">7:00 AM – 6:00 PM</span>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 pb-6 text-center text-gray-500">
          <p>{getTranslation('copyright', language)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
