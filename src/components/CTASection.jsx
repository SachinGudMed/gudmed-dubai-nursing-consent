import { ArrowRight, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import DemoModal from './DemoModal'

const bottomStats = [
  { value: '3 hrs', label: 'Nursing time saved per ward daily' },
  { value: 'Zero', label: 'Lost or misplaced consent forms' },
  { value: '100%', label: 'Audit trail completeness' },
  { value: '14 days', label: 'To go live in your hospital' },
]

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Stats row */}
      <section className="bg-[#2E4168] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {bottomStats.map((s) => (
            <div key={s.value} className="px-6 first:pl-0 last:pr-0 text-center">
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-white/50 text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#2E4168] leading-tight mb-4">
            See How AI Nursing Documentation Works in Your Hospital.
          </h2>
          <p className="text-[#2E4168] text-sm leading-relaxed mb-10">
            Schedule a personalized demo with our healthcare specialists and discover how GudMed automates AI nursing documentation, digital consent management, and EMR integration. We'll tailor the demonstration to your hospital's workflows and clinical documentation needs.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#2E4168] border border-[#2E4168] rounded-xl px-4 py-3 text-sm text-white placeholder-white focus:outline-none focus:border-[#4f46e5] transition-colors"
            />
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2E4168] text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer flex items-center justify-center gap-2 transition-colors whitespace-nowrap hover:bg-[#3d5277]"
            >
              Request Demo <ArrowRight size={15} />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[#2E4168] text-xs">
            <a href="mailto:cs@gudmed.in" className="flex items-center gap-1.5">
              <Mail size={13} />
              cs@gudmed.in
            </a>
            <a href="tel:+971529422420" className="flex items-center gap-1.5">
              <Phone size={13} />
             +91-9999196828
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
