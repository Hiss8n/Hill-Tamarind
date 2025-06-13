

import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import {motion} from 'framer-motion'



const Sidebar = () => {
    const [display,setDisplay]=useState(true)

  return (<div className=' md:hidden animate transition-all duration-300 ease-out transform translate-x-0 pt-[76px] '>
    {display ? (<motion.div className='flex flex-col '>
   <ul className="menu bg-white-200 shadow-md w-full [&_li>*]:rounded-none p-0  flex flex-end font-gray-500 text-xl gap-4 pt-3 pb-3">

  <Link to='/about' className='flex justify-between items-between text-sm mx-4 shadow-sm' onClick={()=>setDisplay(!display)}  ><h3>About</h3> <ChevronRight   size={16}/></Link>
  <Link to='/projects'  className='flex justify-between items-between text-sm mx-4 shadow-sm'  onClick={()=>setDisplay(!display)}  ><h3>Project</h3> <ChevronRight size={16}/></Link>
  <Link to='/contact' className='flex justify-between items-between text-sm mx-4' onClick={()=>setDisplay(!display)}  ><h3>Contact</h3> <ChevronRight  size={16} fontFamily='sans-serif'/></Link>
  </ul>
</motion.div>):(null)}
</div>


)
}
export default Sidebar

