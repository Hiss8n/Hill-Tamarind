import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Sidebar = ({ onNavigate }) => (
  <div className="fixed left-0 right-0 top-[68px] z-40 border-b border-[var(--wash)] bg-[var(--mist)] px-5 py-3 shadow-lg md:hidden">
    <nav className="mx-auto flex max-w-6xl flex-col">
      {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([to, label]) => (
        <Link
          key={to}
          to={to}
          onClick={onNavigate}
          className="flex items-center justify-between border-b border-[var(--wash)] py-3 text-sm font-semibold text-[var(--ink)] last:border-0"
        >
          {label}<ChevronRight size={16} />
        </Link>
      ))}
    </nav>
  </div>
)

export default Sidebar

