import './App.css'
import { Suspense } from 'react'
import Bottles from './components/Bottles/Bottles'

const bottlePromise = fetch('bottles.json').then(res => res.json());

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              💧 AquaStore
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium Water Bottles for Every Lifestyle - Stay Hydrated in Style
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">Loading our amazing bottles...</p>
            </div>
          </div>
        }>
          <Bottles bottlePromise={bottlePromise} />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 AquaStore. Stay hydrated, stay healthy!</p>
        </div>
      </footer>
    </div>
  )
}

export default App
