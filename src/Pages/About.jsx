const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About us
          </h1>
          <p className="text-gray-600 text-lg">
            Your trusted partner in engineering excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              NOBEL is a company which has been operating for more than 25 years in the aeraulic sector by producing various types of heavy-duty industrial fans which are completely manufactured and assembled in Egypt. NOBEL is the company that is able to provide inexpensive, reliable, and effective air ventilation solutions as our production department is equipped with modern technologies such as laser cutting, CNC punching machines, static and dynamic balancing, etc.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for companies worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Company Image</span>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To engineer and manufacture reliable, energy‑efficient air movement and ventilation solutions—made in Egypt—leveraging modern production technologies to deliver measurable performance, safety, and value for our customers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the benchmark in industrial ventilation across the region and beyond—recognized for quality, engineering excellence, and sustainable innovation that improves environments where people live and work.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Quality and reliability, customer focus, safety first, continuous innovation, integrity, and environmental responsibility—these principles guide every fan we design, build, and support.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Team
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Meet the talented professionals behind Nobel Engineering success
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Engineering Team</h3>
              <p className="text-gray-600 text-sm">Expert engineers with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Project Managers</h3>
              <p className="text-gray-600 text-sm">Dedicated project management professionals</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900">Support Staff</h3>
              <p className="text-gray-600 text-sm">Committed support and administrative team</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
