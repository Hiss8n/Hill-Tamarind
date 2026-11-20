import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Monitor, Smartphone, Workflow } from 'lucide-react'
import about from '../assets/bout.png'

export const AboutPage = () => {
  const services = [
    { title: 'Web & app development', description: 'Modern, scalable web applications and software tailored to your users and business goals.', icon: Monitor, tone: 'var(--blue)' },
    { title: 'Mobile app development', description: 'Responsive, intuitive mobile experiences built for reliable use across devices.', icon: Smartphone, tone: 'var(--amber)' },
    { title: 'Business automations', description: 'Automated workflows that reduce repetitive work and connect your tools and processes.', icon: Workflow, tone: 'var(--teal)' },
    { title: 'AI agents', description: 'Intelligent AI agents that integrate into websites to support users and automate tasks.', icon: Bot, tone: 'var(--periwinkle)' },
  ]

  return (
    <motion.section className="page-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="content-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About the studio</p>
            <h1 className="section-title">Practical software for smarter business.</h1>
            <p className="mt-5 max-w-xl leading-7 text-[var(--slate)]">
              I develop web and mobile applications, build powerful automations, and integrate AI agents into websites to help businesses work faster and serve customers better.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--wash)] bg-white p-3 shadow-xl">
            <img src={about} alt="About Hill Tamarind" className="max-h-[420px] w-full object-cover rounded-[1.5rem]" />
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">What I offer</p>
          <h2 className="section-title">Software solutions built around your goals</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon, tone }) => (
              <article key={title} className="rounded-2xl border border-[var(--wash)] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: tone }}><Icon size={23} /></div>
                <h3 className="mt-5 text-xl font-bold text-[var(--ink)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--slate)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
