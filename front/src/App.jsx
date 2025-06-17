import React from "react";
import './index.css'
import {  HashRouter, Route, Routes } from "react-router-dom";
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
  <HashRouter> 
<Routes>
  
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 </HashRouter>
{/*   <HomePage/> */}
  <Footer/>
    </>
  )
}

export default App
