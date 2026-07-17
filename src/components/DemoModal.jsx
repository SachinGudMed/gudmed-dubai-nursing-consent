import { X } from 'lucide-react'

export default function DemoModal({ isOpen, onClose }) {

  const handleClose = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="bg-[#2E4168] px-6 py-6 rounded-t-2xl flex items-start justify-between">
          <div>
            <h2 className="text-white font-black text-xl leading-tight">
              See GudMed in Action
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Join hospitals automating nursing documentation
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors mt-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Book a personalized demo and see how GudMed eliminates manual nursing documentation and digitizes consent forms with AI.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-2">
                Hospital / Organization Name
              </label>
              <input
                type="text"
                placeholder="Your hospital name"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4f46e5] transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="your@hospital.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4f46e5] transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4f46e5] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2E4168] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-6 cursor-pointer"
            >
              Request Demo
            </button>
          </form>

          <p className="text-gray-400 text-xs text-center mt-4">
            We'll contact you within 24 hours to schedule your demo.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl border-t border-gray-100">
          <button
            onClick={handleClose}
            className="w-full text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
