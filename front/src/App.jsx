import React from "react";
import './index.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages.jsx/HomePage";
import { AboutPage } from "./pages.jsx/AboutPage";
import { Projects } from "./pages.jsx/Projects";
import { NotFound } from "./pages.jsx/NotFound";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Contact } from "./pages.jsx/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[var(--deep-navy)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
