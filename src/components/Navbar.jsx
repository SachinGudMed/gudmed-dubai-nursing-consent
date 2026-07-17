import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from "../assets/Gudmed1-removebg-preview.png";
import DemoModal from './DemoModal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <nav className="bg-gray-100 border-b border-white/10 sticky top-0 z-50">
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="GudMed"
            className="h-16 md:h-10 w-auto mt-2"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Nursing Notes', 'Consent Stock', 'Compliance'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2E4168] text-white text-sm font-semibold cursor-pointer px-5 py-2 rounded-lg flex items-center gap-1.5 transition-colors hover:bg-[#3d5277]"
          >
            Request Demo
          </button>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-200 border-t border-gray-400 px-6 py-4 flex flex-col gap-4">
          {['Nursing Notes', 'Consent Stock', 'Compliance'].map((link) => (
            <a key={link} href="#" className="text-gray-700 text-sm font-medium">
              {link}
            </a>
          ))}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2E4168] text-white text-sm font-semibold px-5 py-2 rounded-lg w-full hover:bg-[#3d5277] transition-colors"
          >
            Request Demo
          </button>
        </div>
      )}
    </nav>
  )
}
