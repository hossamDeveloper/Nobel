const Certifications = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      issuer: "International Organization for Standardization"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      issuer: "International Organization for Standardization"
    },
    {
      name: "ASME Certification",
      description: "American Society of Mechanical Engineers",
      issuer: "ASME"
    },
    {
      name: "IEEE Standards",
      description: "Institute of Electrical and Electronics Engineers",
      issuer: "IEEE"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h1>
          <p className="text-gray-600 text-lg">
            Our certifications and accreditations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Certifications 