import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"
import { GoProjectSymlink } from "react-icons/go"
import { Mail } from 'lucide-react'
import Sidebar from './Sidebar'

export const Navbar = ({handleClick}) => {
  const [showSideBar, setShowSideBar] = useState(false)

  const links = [
    { to: '/', label: 'Home', icon: <AiFillHome size={16} /> },
    { to: '/about', label: 'About', icon: <FcAbout size={17} /> },
    { to: '/projects', label: 'Projects', icon: <GoProjectSymlink size={17} /> },
  ]

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[var(--wash)] bg-[rgba(11,20,36,0.94)] px-5 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to='/' className="grid h-11 w-11 place-items-center rounded-xl text-lg font-bold text-[#14213D] shadow-sm" style={{ background: 'var(--amber)' }}>
            HT
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-[var(--amber)] text-[#14213D]' : 'text-[var(--slate)] hover:bg-[var(--wash)] hover:text-[var(--ink)]'}`}
              >
                {link.icon}{link.label}
              </NavLink>
            ))}
            <Link to='/contact' className="ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[#C9892F]" style={{ background: 'var(--amber)' }}>
              <Mail size={16} /> Let&apos;s talk
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={showSideBar}
            onClick={() => setShowSideBar(!showSideBar)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--wash)] bg-[var(--wash)] text-[var(--ink)] md:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {showSideBar && <Sidebar onNavigate={() => setShowSideBar(false)} />}
    </>
  )
}
