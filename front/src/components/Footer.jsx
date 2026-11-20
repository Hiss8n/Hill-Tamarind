import React from 'react'

const Footer = () => (
  <footer className="border-t border-[var(--wash)] bg-[var(--mist)]">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--amber)]">Skills</h4>
        <ul className="space-y-2 text-sm text-[var(--slate)]">
          <li>Web &amp; App Development</li>
          <li>Mobile Applications</li>
          <li>AI &amp; Automation</li>
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--amber)]">Experience</h4>
        <ul className="space-y-2 text-sm text-[var(--slate)]">
          <li>IT Support Assistant — iamtheCODE</li>
          <li>Maths &amp; Chemistry Tutor — Finn Church Aid</li>
          <li>Personal Projects — Coursera</li>
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--amber)]">Services</h4>
        <ul className="space-y-2 text-sm text-[var(--slate)]">
          <li>Custom Software</li>
          <li>Workflow Automation</li>
          <li>Website AI Agents</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-[var(--wash)] py-4 text-center text-xs text-[var(--slate)]">
      © {new Date().getFullYear()} Tamarind AI Consultancy. All rights reserved.
    </div>
  </footer>
)

export default Footer