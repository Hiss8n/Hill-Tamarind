import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import Sidebar from './Sidebar';
export const Navbar = ({handleClick}) => {

  const [showSideBar,setShowSideBar]=useState(false)
  return (
  <><nav className=" fixed z-50 left-0 top-0 bg-white shadow-md px-10 py-4 mx-auto w-full">
  <div className="max-w-7xl mx-auto flex items-center justify-between ">
    {/* <!-- Logo --> */}
    <div className="text-2xl font-bold text-blue-600 ml-1 ">
      <Link to='/' className='border-[3px] font-sans-serif border-blue-500 py-1 px-3  text-lg'>HT</Link>
    </div>

   {/*  */} {/* <!-- Nav Links --> */}
    <div className="space-x-6 hidden md:flex ">
        <div className=' relative inline-block group'>

        <Link to='/' className="text-poppins text-xs font-medium transition 
        flex justify-center items-center gap-2 focus:undeline
        
        ">
        <AiFillHome
        size={18}
       />
        Home
        </Link>
        </div>


        <Link to='/about' className="text-poppins text-xs font-medium transition 
               flex justify-center items-center gap-2 focus:undeline

        " >
        <FcAbout
        style={{fill:'#000',color:"#000"}}
        size={18}/>
         About
        </Link>
        <Link to='projects'  className="text-poppins text-xs font-medium transition  flex justify-center gap-2 focus:undeliner-[12]">
        <GoProjectSymlink
        size={18}/>
        Projects</Link>
    
          </div>

    {/* <!-- Mobile Menu Button (Optional) --> */}
    <div className="md:hidden">
      <button className="text-gray-600 focus:outline-none">
       {/*  <!-- Icon (3 lines) --> */}
        <svg 
        onClick={()=>setShowSideBar(!showSideBar)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</nav>
{
  showSideBar ? <Sidebar handleClick={handleClick}/> :null
}
 
</>
  )
}
