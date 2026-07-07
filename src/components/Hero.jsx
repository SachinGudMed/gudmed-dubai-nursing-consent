import { ArrowRight, Sparkles } from 'lucide-react'
import DemoModal from './DemoModal'
import { useState } from 'react'

const stats = [
  { value: '3 hrs', label: 'Documentation Time Saved Daily' },
  { value: '10+', label: 'Years of Healthcare Experience' },
  { value: '100%', label: 'Digital & Secure Consent Forms' },
  { value: 'Zero', label: 'Lost Patient Consent Records' },
  // { value: 'JCI', label: 'Audit ready at all times' },
]

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="text-[#2E4168]">
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2E4168] border border-[#2E4168] rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={13} className="text-white" />
          <span className="text-xs font-medium text-white tracking-wide">
            AI Clinical Documentation for Indian Hospitals
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
          AI Nursing Documentation & Digital Consent Forms for Hospitals
          {/* <span className="text-[#6366f1] italic">Automated.</span> */}
        </h1>

        <p className="text-[#2E4168] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Nurse speak and fill the nurse notes and EMR — GudMed eliminates the two biggest documentation burdens in Indian hospital wards — nursing shift notes and consent form management — with AI that works in the background while your staff focuses on patients.
        </p>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl">
          <div className="bg-[#2E4168] border border-[#2E4168] rounded-2xl p-5 transition-colors">
            <div className="text-[10px] font-bold text-[#6366f1] tracking-widest mb-2 uppercase">Product 1</div>
            <h3 className="text-white font-bold text-base mb-2">AI Nursing Documentation</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Auto-generates shift notes with symptoms, vitals, medication administration records, and ICU scoring — structured and NABH-compliant.
            </p>
          </div>
          <div className="bg-[#2E4168] border border-[#2E4168] rounded-2xl p-5 transition-colors">
            <div className="text-[10px] font-bold text-[#6366f1] tracking-widest mb-2 uppercase">Product 2</div>
            <h3 className="text-white font-bold text-base mb-2">Smart Digital Consent Forms</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Create, manage, e-sign, and securely store surgical, anesthesia, and treatment consent forms with biometric verification and complete audit trails for regulatory compliance.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2E4168] text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer hover:bg-[#3d5277] transition-colors"
          >
            Request a Demo
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/10 bg-[#2E4168]">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.value} className="px-6 first:pl-0 last:pr-0">
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-white/50 text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
