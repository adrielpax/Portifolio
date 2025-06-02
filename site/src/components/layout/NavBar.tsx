// components/NavBar.tsx
import { FaUser, FaCode, FaEnvelope } from 'react-icons/fa'

type Props = {
  currentSection: number
  onNavigate: (index: number) => void
}

export default function NavBar({ currentSection, onNavigate }: Props) {
  const navItems = [
    { icon: <FaUser className={`transition text-white hover:text-[#00ffc3]`}
 />, index: 0 },
    { icon: <FaCode className={`transition text-white hover:text-[#00ffc3]`}
 />, index: 1 },
    { icon: <FaEnvelope className={`transition text-white hover:text-[#00ffc3]`}
 />, index: 2 },
     { icon: <FaEnvelope className={`transition text-white hover:text-[#00ffc3]`}
 />, index: 3 },
  ]

  return (
    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {navItems.map((item) => (
        <button
          key={item.index}
          onClick={() => onNavigate(item.index)}
          className={`text-white transition hover:text-blue-500 ${
            currentSection === item.index ? 'text-blue-500' : ''
          }`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  )
}
