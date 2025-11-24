// components/Why.tsx
import WhyText from "../data/Why"

const Why = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#d39b53]">Drive-Safari</span>?
            </h1>
            <div className="w-20 h-1 bg-[#d39b53] mx-auto rounded-full mb-8"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 transform hover:shadow-xl transition-all duration-300">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {WhyText}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#d39b53]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#d39b53] text-xl">🚗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#d39b53]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#d39b53] text-xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Success</h3>
              <p className="text-gray-600 text-sm">High pass rates and student satisfaction</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#d39b53]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#d39b53] text-xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">Comprehensive safety-focused training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why