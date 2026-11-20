import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Pana from '../assets/pana.png'
import Graduate from '../assets/graduation.png'
import charity from '../assets/charity.png'
import school from '../assets/school.png'
import work from '../assets/work.png'

export const Projects = () => {
  const items = [
    { id: 1, name: 'Konexio Hackathon Project', about: 'Konexio Africa Hackathon 2026.This a group project of 10 people among them were other two developer.', url: 'https://konexio-connect-360.vercel.app/', image: Pana },
    { id: 2, name: 'Online food Store with AI Agent', about: "An online foodstore. It has and AI agent for tracking and placing new order.The Agent is from Google's Dialogflow.", url: 'https://tamarind-store.vercel.app/', image: Graduate },
    { id: 3, name: 'Community Bulletin Platform', about: 'Community Bulletin Platform. You can sign in as a user or as and organisaton or Business.You can see or even chat with and AI to get what services and bussiness or recreation service are availabel in Kakuma Refugee camp', url: 'https://julia-c2n3.vercel.app/login/', image: school },
    { id: 4, name: 'NGO Website', about:"NGO web site.It is showcase what is the NGO'S mission and activities they are running.", url: 'https://vision-rise-git-main-hiss8ns-projects.vercel.app/', image: work },
    { id: 5, name: 'Hotel Website', about: 'Build this website for a local hotels that has rooms and food services', url: 'https://tunda-hotel.vercel.app/', image: charity },
  ]

  return (
    <section className="page-shell">
      <div className="content-shell">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h1 className="section-title">Projects designed to inform, connect, and perform.</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-[var(--wash)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 overflow-hidden bg-[var(--wash)]">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div><h2 className="font-bold text-[var(--ink)]">{item.name}</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">{item.about}</p></div>
                <ArrowUpRight className="mt-1 shrink-0 text-[var(--teal)] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

