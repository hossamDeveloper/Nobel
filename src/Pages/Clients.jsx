import React from 'react'
import { clients, otherClients } from '../data/clients'

const Clients = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Clients
          </h1>
          <p className="text-gray-600 text-lg">Trusted by leading brands and institutions</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col items-center justify-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center overflow-hidden rounded-lg bg-white border border-gray-100">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-28 md:max-h-32 object-contain "
                  onError={(e) => {
                    e.currentTarget.src = '/src/assets/logo.png'
                  }}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-800 text-center line-clamp-2">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Clients</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {otherClients.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.consultant && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        Consultant: {item.consultant}
                      </span>
                    )}
                    {item.scope && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                        {item.scope}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Clients