import { ArrowRight, Check } from 'lucide-react'

const bullets = [
  {
    bold: 'API Integration for HIS, LIS, EMR & RIS',
    text: ' — Securely integrate GudMed with your Hospital Information System (HIS), Electronic Medical Records (EMR), Laboratory Information System (LIS), and Radiology Information System (RIS) using standards-based APIs.'
  },
  { bold: 'ABDM & Ayushman Bharat Integration', text: ' — Securely exchange healthcare data with the Ayushman Bharat Digital Mission (ABDM), reducing manual uploads and supporting national digital health initiatives.' },
  { bold: 'Automatic Consent Record Synchronization', text: " — Every digitally signed patient consent is instantly saved to the patient's electronic medical record for quick access and compliance." },
  { bold: 'Fast Hospital Deployment', text: ' — Go live in as little as 14 days with guided implementation, minimal downtime, and dedicated onboarding support.' }
]


const flowInputs = ['Vitals & Observations', 'Medication Records', 'Voice-to-Text for Doctors', 'Consent Signatures']

const flowOutputs = [
  { label: 'HIS, EMR, LIS & RIS', sub: 'API Ready Integration' },
  { label: 'Doctor Ward', sub: 'Real-time physician view' },
  { label: 'Shift Report', sub: 'Auto-generated handover' },
  { label: 'Ayushman Bharat', sub: 'National health exchange' },
]

export default function Integration() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div className="text-xs font-bold text-[#2E4168] uppercase mb-3">
              LIS,RIS,HIS & EMR Integration
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2E4168] leading-tight mb-6">
              Connect GudMed to Your HIS, LIS, EMR & RIS
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              GudMed operates as an AI intelligence layer — taking inputs from nurses and clinicians, processing them, and writing structured data back into your existing Hospital Information System.
            </p>

            <ul className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#2E4168]" strokeWidth={3} />
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-gray-900">{b.bold}</span>
                    {b.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Data Flow */}
          <div className="flex-1">
            <div className="text-xs font-bold text-[#2E4168] tracking-widest uppercase mb-6">
              How GudMed Integrates with Hospital Systems
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              {/* Input node */}
              <div className="mb-4">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">
                  Nurse Input (Voice / Tablet)
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {flowInputs.map((inp) => (
                    <div key={inp} className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-700 font-medium">
                      {inp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-4 bg-gray-300" />
                  <ArrowRight size={14} className="text-gray-400 rotate-90" />
                </div>
              </div>

              {/* AI Processing node */}
              <div className="bg-[#2E4168] rounded-xl p-4 mb-4">
                <div className="text-[10px] font-bold text-white tracking-widest uppercase mb-2">
                  GudMed AI Processing
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['NLP Structuring', 'ICD-10 Coding', 'NABH Scoring', 'Audit Tagging'].map((t) => (
                    <span key={t} className="bg-white/10 text-white/70 text-[10px] font-medium px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-4 bg-gray-300" />
                  <ArrowRight size={14} className="text-gray-400 rotate-90" />
                </div>
              </div>

              {/* Output nodes */}
              <div>
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">
                  Writes To
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {flowOutputs.map((o) => (
                    <div key={o.label} className="bg-white border border-gray-200 rounded-xl px-3 py-2.5">
                      <div className="text-xs font-bold text-gray-900">{o.label}</div>
                      <div className="text-[10px] text-gray-400">{o.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
