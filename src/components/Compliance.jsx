import { Award, Building2, Database, Globe, Lock, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Building2,
    title: 'NABH Standards',
    desc: 'Nursing documentation structured to meet National Accreditation Board for Hospitals clinical record standards. Mandatory fields auto-completed. Zero compliance gaps.',
    badge: 'NABH Accredited',
    badgeColor: 'bg-[#E8B84B]/15',
  },
  {
    icon: Globe,
    title: 'ABDM Integration & Digital Health Standards',
    desc: "Support India's Ayushman Bharat Digital Mission (ABDM) with standardized clinical documentation and interoperable healthcare records.",
    badge: 'ABDM Compliant',
    badgeColor: 'bg-[#E8B84B]/15',
  },
  {
    icon: Award,
    title: 'Healthcare Quality Standards',
    desc: 'Nursing documentation supports all quality assurance requirements. Audit evidence generated in one click. Ready for facility accreditation.',
    badge: 'Quality Assured',
    badgeColor: 'bg-[#E8B84B]/15',
  },
  {
    icon: Lock,
    title: 'India Digital Health Law',
    desc: 'Digital records and digital signatures comply with Indian Information Technology Act 2000 and Bharatiya Nyaya Sanhita. e-signatures legally binding in India.',
    badge: 'ISO Certified',
    badgeColor: 'bg-[#E8B84B]/15',
  },
  // {
  //   icon: Database,
  //   title: 'India Data Compliance',
  //   desc: 'All clinical and consent data stored within Indian borders on secure, compliant servers. Patient data protection per Indian healthcare regulations.',
  //   badge: 'Data Compliant',
  //   badgeColor: 'bg-teal-500',
  // },
  {
    icon: Lock,
    title: 'DPDP Act 2023',
    desc: 'Patient health information is handled with privacy-first principles aligned with the Digital Personal Data Protection (DPDP) Act, helping hospitals safeguard sensitive medical records.',
    badge: 'DPDP Compliant',
    badgeColor: 'bg-[#E8B84B]/15',
  },
  {
    icon: Database,
    title: 'SNOMED CT & ICD-10',
    desc: 'Supports SNOMED CT clinical terminology and ICD-10 diagnosis coding to standardize patient documentation, improve interoperability, and enable accurate clinical reporting across healthcare systems.',
    badge: 'Coding Standards',
    badgeColor: 'bg-[#E8B84B]/15',
  },
]

export default function Compliance() {
  return (
    <section id="compliance" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs font-bold text-[#2E4168] uppercase mb-4">
          Regulatory Compliance for Hospitals
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E4168] leading-tight max-w-lg">
            Built for NABH, ABDM, and Indian Healthcare Compliance
          </h2>
          <p className="text-[#2E4168] text-sm leading-relaxed max-w-sm">
            GudMed is designed from the ground up to support NABH accreditation, ABDM integration, ISO standards, and secure healthcare documentation. Every nursing note, consent form, and patient record is created with compliance, audit readiness, and data security built in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc, badge, badgeColor }) => (
            <div
              key={title}
              className="bg-[#2E4168] border border-[#2E4168] rounded-2xl p-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2E4168] flex items-center justify-center mb-4 transition-colors">
                <Icon size={18} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">{desc}</p>
              <span className={`inline-block ${badgeColor} text-[#E8B84B] border border-[#E8B84B]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full`}>
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
