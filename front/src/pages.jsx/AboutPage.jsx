import React from 'react'
import bout from '../assets/bout.png';
import {motion} from 'framer-motion'
import Baloon from '../components/Baloons';
import { Loader } from 'lucide-react';
import mockupvid from '../assets/animie.mp4';
import about from '../assets/bout.png';
export const AboutPage = () => {

  const services=[
    {
      id:1,
      title:'WhiteBoard animation',
      description:'We create interactive and informative animation vidoes',
      price:'$ 15 per hour'
    },
     {
      id:2,
      title:'Web site',
      description:'Our web site are responsive, made with pridee and efficient call to action navigations',
      price:'$ 75'
    },
     {
      id:3,
      title:'Systems and E-comerce',
      description:'Our team create CRM and user friendly E-commerce web applications',
      price:'from $ 1500- $ 3,000'
    },
  ]
  return (
    <motion.div className='max-w-7xl  justify-center w-full mt-12 mb-12 bg-slate-50'>
      <div> 
        <img
        src={about}
        />
{/* 
    <video
      autoPlay
      loop
      muted
      playsInline
      controls
    className="w-full max-w-2xl mx-auto">
  <source src="../assets/animie.mp4" type="video/mp4" />
</video>
 */}

     {/*  <video
      autoplay 
      loop 
      muted 
      playsinline 
      className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
          
      >
        <source src={mockupvid} type="video/mp4" />

      </video> */}

      </div>

      <div className=' flex flex-wrap justify-center gap-4 mx-auto items-center flex-start md:justify-center base:flex-col base:items-center '>
           <Baloon
            color="bg-gradient-to-br from-violet-700 via-violet-500 to-white-300 shadow-4xl"
            left="-13%"
            delay={0}
            top="-42%"
            size="w-[480px] h-[480px]"
          />
           <Baloon
            color="bg-gradient-to-br from-green-700 via-green-500 to-white-300 shadow-4xl"
            left="53%"
            delay={0}
            top="72%"
            size="w-[480px] h-[480px]"
          />
       {
        
        services && services.length>0 ? services.map((item,index)=><div className='w-[200px] h-[320px]  shadow-xl px-2 justify-center' key={index+1}>
        
        <div className='justify-center mt-3'>
          <h3 className='text-3xl font-Crimson'>{item.title}</h3>
          <span className='text-sm'>{item.description}</span>
          <div className='p-4'><span className='font-xl text-green-500'>{item.price}</span></div>
          
        </div>

        </div>) :<h3> <Loader className='animate-spin' size={24} color='blue'/></h3>
       }

      
      </div>
    </motion.div>
  )
}
