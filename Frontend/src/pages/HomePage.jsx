import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold text-center text-gray-800 mb-2">
          Build stronger digital connections
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Use our URL shortener and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the URL Shortener Connections Platform.
        </p>

        <div className="bg-white p-8 rounded-lg w-full">
          <h1 className="text-2xl font-bold text-center mb-6">Short Link</h1>
          <UrlForm />
        </div>
      </div>
    </div>
  )
}

export default HomePage