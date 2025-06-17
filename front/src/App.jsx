import React from "react";
import './index.css'
import {  Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages.jsx/HomePage";
import { AboutPage } from "./pages.jsx/AboutPage";
import { Projects } from "./pages.jsx/Projects";
import { NotFound } from "./pages.jsx/NotFound";
import { Navbar } from "./components/Navbar";
import Baloon from "./components/Baloons";
import Footer from "./components/footer";
import { Contact } from "./pages.jsx/Contact";

function App() {
 

  return (
   <>
   <Navbar/>
  
   
  <div className="min-h-screen bg-white-100 flex-cols justify-center items-center overflow-hidden relative">
    <Baloon color="bg-gradient-to-br from-yellow-600 via-yellow-300 to-white-100 shadow-xl"left="-16%"delay={5}top="-13%"size="w-[440px]h-[440px]"/>
    <Baloon color="bg-gradient-to-br from-blue-600 via-blue-300 to-white-100 shadow-xl"left="76%"delay={5}top="-13%"size="w-[440px]h-[440px]"/>
    <Baloon color="bg-gradient-to-br from-pink-600 via-pink-300 to-white-100 shadow-xl"left="6%"delay={0}top="-13%"size="w-[440px]h-[440px]"/>
   
   
   

<Routes>
  
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound/>}/>
 
  
</Routes>

    </div>
     <HomePage/>
    <Footer/>
    </>
  )
}

export default App
