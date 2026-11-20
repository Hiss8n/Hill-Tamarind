import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const NotFound = () => (
  <section className="page-shell grid place-items-center text-center">
    <div className="content-shell">
      <p className="text-7xl font-bold text-[var(--amber)]">404</p>
      <h1 className="mt-4 text-3xl font-bold text-[var(--ink)]">This page is not available.</h1>
      <p className="mt-3 text-[var(--slate)]">The page may have moved or the address may be incorrect.</p>
      <Link to="/" className="primary-button mt-8"><ArrowLeft size={16} /> Back to home</Link>
    </div>
  </section>
)
