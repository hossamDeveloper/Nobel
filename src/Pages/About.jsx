import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

const About = () => {
  const { language } = useLanguage()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getTranslation('aboutUs', language)}
          </h1>
          <p className="text-gray-600 text-lg">
            {getTranslation('trustedPartnerInEngineering', language)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {getTranslation('ourStory', language)}
            </h2>
            <p className="text-gray-600 mb-4">
              {getTranslation('nobelDescription', language)}
            </p>
            <p className="text-gray-600">
              {getTranslation('ourCommitment', language)}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">{getTranslation('companyImage', language)}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{getTranslation('ourMission', language)}</h3>
            <p className="text-gray-600">
              {getTranslation('ourMissionDesc', language)}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{getTranslation('ourVision', language)}</h3>
            <p className="text-gray-600">
            {getTranslation('ourVisionDesc', language)}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{getTranslation('ourValues', language)}</h3>
            <p className="text-gray-600">
            {getTranslation('ourValuesDesc', language)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {getTranslation('ourTeam', language)}
          </h2>
          <p className="text-gray-600 text-center mb-8">
          {getTranslation('meetTalentedProfessionals', language)}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">{getTranslation('engineeringTeam', language)}</h3>
              <p className="text-gray-600 text-sm">{getTranslation('engineeringTeamDesc', language)}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">{getTranslation('projectManagers', language)}</h3>
              <p className="text-gray-600 text-sm">{getTranslation('projectManagersDesc', language)}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">{getTranslation('supportStaff', language)}</h3>
              <p className="text-gray-600 text-sm">{getTranslation('supportStaffDesc', language)}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
