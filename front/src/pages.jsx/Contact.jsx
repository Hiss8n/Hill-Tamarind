import React, { useState } from 'react'
import Footer from '../components/footer'
import {motion} from 'framer-motion'
import { LockIcon, MailCheck, User2 } from 'lucide-react';
import { useNavigate, useNavigation} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Baloon from '../components/Baloons';

export const Contact = () => {
  const [isLoading,setIsLoading]=useState(false);
  const navigate=useNavigate()

  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    message:''
  })


  const handleSumbit=async(e)=>{
    e.preventDefault()
    console.log(formData)
    
     setFormData([""])
     toast.success('Message sent successfully, Thank you 😀')
    setTimeout(()=>{
      navigate('/')
      
    },2000)
   

  }
  return (



    <>
    <div className='w-screen max-h-auto flex items-center justify-center bg-slate-100'>
          <Baloon
            color="bg-gradient-to-br from-pink-800 via-pink-400 to-white-100 shadow-2xl"
            left="14%"
            delay={2}
            top="-12%"
            size="w-[480px] h-[480px]"
          />
      <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    className="max-w-md w-full bg-blue-600 bg-opacity-80 mt-20 backdrop-filter backdrop-blur-3xl rounded-xl shadow-xl"
    
    >
<div className="p-6">
    <h2 className="text-2xl mb-3 text-bold text-center  pink-800 text-slate-700 shadow-2xl">Send Us A Message</h2>
<form onSubmit={handleSumbit}>
<div> 
  <label className='text-lg mb-1 text-white font-Crimson'>Name</label>
  <div className='flex justify-center items-center bg-gray-200 w-full  mb-2 rounded-xl pl-1'>
    <User2
    size={24}
    />
    <input
    type='text'
    
    onChange={(e)=>setFormData({
      ...formData,
      username:[e.target.value]
    })}
    value={formData.username}
    placeholder='full name'
    className='py-1 w-full rounded-full bg-gray-200 shadow-sm text-sm m-2 
    ml-2 px-2 text-Crimson border focus:ring-0 focus:outline-none'
    
    />

    </div>
    </div>

<div>
   <label className='text-lg mb-1 text-white font-Crimson'>Email</label>
    <div className='flex justify-center items-center bg-gray-200  bg-gray-200  mb-2 rounded-xl w-full py-1 pl-1'>
      <MailCheck
      size={24}/>
        <input
        type='email'
    
    onChange={(e)=>setFormData({
      ...formData,
      email:[e.target.value]
    })}
    value={formData.email}
    placeholder='email address'
    className='w-full rounded-xl bg-gray-200 shadow-sm text-sm m-2 ml-2 px-2  text-Crimson focus:outline-none'
    
    />
    </div>
     </div>


<div> 
   <label className='text-lg mb-1 text-white font-Crimson'>Message</label>
    <div className='flex justify-center items-center  m-2 rounded-xl bg-gray-200 w-full py-1 pl-1'>
     
   
    <textarea 
      placeholder='Enter message...'
      onChange={(e)=>setFormData({
        ...formData,
        message:[e.target.value]
      })}
      value={formData.message}
    className='h-full w-[440px] rounded-xl bg-gray-200 shadow-sm text-sm mb-2 ml-2  px-2 text-Crimson h-[20vh] focus:outline-none'
      
      >

    </textarea>
     </div>
     </div>
      
      




    <motion.button
    className="mt-8 w-full py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white
    font-bold text-2xl text-white rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-500 
    focus:outline-none focus:ring-2 focus:ring-pink-400 focus:offset-2
    focus:ring-offset-gray-500 transition duration-200"
    whileHover={{scale:1.02}}
    whileTap={{scale:0.98}}
    type="submit"
    disabled={isLoading}
    >
   {isLoading ? <Loader className=" animate-spin mx-auto " size={24}/>:"Send"}
    </motion.button>

</form>
</div>

    </motion.div>
    </div>
    </>
   
  )
}
