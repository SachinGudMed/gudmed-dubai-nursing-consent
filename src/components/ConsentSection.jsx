import { CheckCircle, Fingerprint, Phone, Shield, ShieldCheck, TriangleAlert } from 'lucide-react'

const consentTypes = [
  {
    title: 'Surgical Consent',
    desc: 'Procedure details, risks, alternatives, and surgeon declaration — all structured and legally correct.',
    badges: ['NABH Compliant', 'ISO Certified'],
  },
  {
    title: 'Anaesthetic Consent',
    desc: 'Pre-anaesthetic assessment, agent disclosure, risk stratification, and complication — standardised to Indian healthcare guidelines and ABDM standards.',
    badges: ['ABDM Compliant'],
  },
  {
    title: 'Radiology & Imaging Consent',
    desc: 'Contrast use, radiation exposure, invasive procedure risks — plus pre-procedure checklist auto-generated per modality.',
    badges: ['ISO Aligned'],
  },
  {
    title: 'General Administration Consent',
    desc: 'Financial agreements, data sharing, treatment authority — complete digital consents delivered to patient\'s phone. Must-have for any accredited Indian facility.',
    badges: ['Document Ready'],
  },
]

const steps = [
  {
    num: '1',
    icon: ShieldCheck,
    title: 'Order Triggers Consent',
    desc: 'When doctor orders a procedure, GudMed auto identifies the consent forms required and pre-populates patient data.',
  },
  {
    num: '2',
    icon: Phone,
    title: 'Patient Receives on Phone',
    desc: 'Consent form sent to patient\'s mobile in preferred language. Hindi/English consent forms auto-translated in seconds.',
  },
  {
    num: '3',
    icon: Fingerprint,
    title: 'E-Sign & Biometric Verification',
    desc: 'Patient signs digitally with biometric authentication. Witness signature captured. Timestamp and IP address logged for legal validity.',
  },
  {
    num: '4',
    icon: Shield,
    title: 'Stored & Audit-Ready',
    desc: 'Complete document, signed and stored. Accessible for all. Audit compliance built in. Available for NABH, ISO inspection at a single click.',
  },
  {
    num: '5',
    icon: TriangleAlert,
    title: 'Procedure Cannot Proceed Without It',
    desc: 'System blocks procedure confirmation until consent is obtained. Safety guardrail built into the workflow, no consent — no proceed.',
  },
]

const badgeColor = (b) => {
  if (b === 'NABH Compliant') return 'bg-blue-50 text-blue-700'
  if (b === 'ABDM Compliant') return 'bg-purple-50 text-purple-700'
  if (b === 'ISO Certified' || b === 'ISO Aligned') return 'bg-amber-50 text-amber-700'
  return 'bg-emerald-50 text-emerald-700'
}

export default function ConsentSection() {
  return (
    <section id="consent-stock" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs font-bold text-[#2E4168] uppercase mb-3">
          Digital Consent Forms
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left — consent cards */}
          <div className="w-full lg:w-[48%] shrink-0">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              No More Paper Consents.
              <br />No More Lost Signatures.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              GudMed digitises every consent form in your hospital — surgical, anaesthetic, procedural, research — with e-signature, biometric verification, and complete audit trail.
            </p>

            <div className="flex flex-col gap-4">
              {consentTypes.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm mb-1">{c.title}</div>
                      <p className="text-gray-500 text-xs leading-relaxed mb-3">{c.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.badges.map((b) => (
                          <span key={b} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor(b)}`}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — how it works flow */}
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">
              How Consent Works With GudMed
            </div>

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.num} className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-[#2E4168] text-[#6366f1] flex items-center justify-center text-xs font-black shrink-0">
                        {step.num}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 bg-gray-200 flex-1 my-1" style={{ minHeight: '32px' }} />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-6">
                      <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                        <Icon size={14} className="text-[#4f46e5]" />
                        {step.title}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
