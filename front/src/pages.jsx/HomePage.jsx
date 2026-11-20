import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Cpu, Smartphone, Workflow } from "lucide-react";
import photo from "../assets/photo2.png";

const HomePage = () => {
  const skills = [
    {
      title: "Web development",
      description: "Fast, responsive websites and modern web applications.",
      icon: Code2,
    },
    {
      title: "Mobile app development",
      description: "Intuitive mobile experiences for Android and iOS.",
      icon: Smartphone,
    },
    {
      title: "Business automation",
      description: "Reliable workflows that connect tools and remove repetitive tasks.",
      icon: Workflow,
    },
    {
      title: "AI agents",
      description: "AI assistants integrated into your website to support users and automate work.",
      icon: Bot,
    },
  ];

  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const rotatingSkills = [
    "Web & app development",
    "Mobile app development",
    "Workflow Automations",
    "AI agents Integrations",
  ];

  useEffect(() => {
    const currentText = rotatingSkills[index];
    let timeout;

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 75);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setIndex((current) => (current + 1) % rotatingSkills.length);
      }, 1800);
    }

    return () => clearTimeout(timeout);
  }, [typedText, index, rotatingSkills.length]);

  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden pt-[18px]">
        <div
          className="absolute right-[-8%] top-24 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--amber)" }}
        />
        <div
          className="absolute bottom-[-12rem] left-[-10rem] h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--amber)" }}
        />

        <div className="content-shell grid min-h-[520px] items-center gap-8 py-8 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Software development studio</p>
            <h1 className="max-w-3xl text-[30px] leading-[1.35] font-bold text-[var(--ink)] sm:text-[20px] lg:text-[30px]">
              Building{" "}
              <span className="text-[var(--amber)]">Apps,AI Agents & Automations</span> 
              
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[var(--slate)]">
              I develop web and mobile applications, build workflow automations, and
              create AI agents that integrate directly into your website.
            </p>

            <div className="mt-5 h-8 text-lg font-semibold text-[var(--amber)]">
              {typedText}<span className="ml-1 animate-pulse">|</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="primary-button">
                Start a project{" "}
                <ArrowRight size={17} />
              </Link>
              <Link to="/projects" className="secondary-button">
                View my work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative hidden min-h-[470px] lg:block"
          >
            <div
              className="absolute inset-10 rotate-3 rounded-[1.5rem]"
              style={{ background: "var(--wash)" }}
            />
           {/*  <div className="absolute inset-x-20 bottom-10 top-20 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur-md">
               <div className="grid h-full place-items-center text-center">
                <div>
                   <div
                    className="mx-auto grid h-20 w-20 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ background: "var(--blue)" }}
                  >
                   
                  </div>  
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[var(--teal)]">
                    Ideas into intelligent products
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--slate)]">
                    Purposeful web and mobile apps, automated workflows, and AI agents designed around real business needs.
                  </p>
                </div>
              </div> 
            </div> */}
            <div
              className="absolute right-4 top-16 grid h-20 w-20 place-items-center rounded-xl text-[var(--ink)]"
              style={{ background: "var(--amber)" }}
            >
              <Code2 size={24} strokeWidth={1.8} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-x-24 bottom-16 top-16 overflow-hidden rounded-[2rem] border border-[var(--wash)] bg-[var(--wash)] p-2">
                <img
                  src={photo}
                  alt="Tamarind AI consultancy"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--mist)] py-20">
        <div className="content-shell">
          <div className="mb-8">
            <p className="eyebrow">My expertise</p>
            <h2 className="section-title">Skills</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-[var(--wash)] bg-[var(--wash)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-[var(--ink)]" style={{ background: "var(--amber)" }}>
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--slate)]">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--wash)] p-7 text-center" style={{ background: "var(--wash)" }}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--amber)]">Ideas into intelligent products</p>
            <p className="mx-auto mt-3 max-w-2xl text-[20px] leading-8 text-[var(--ink)]">
              From a first idea to a connected digital product, I build practical software that saves time and creates better experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
