import React from 'react'
import Baloon from '../components/Baloons'
import Footer from '../components/footer'
import Pana from '../assets/pana.png';
import Graduate from '../assets/graduation.png';
import charity from '../assets/charity.png';
import school from '../assets/school.png';
import work from '../assets/work.png'

export const Projects = () => {
  const items=[
    {
      id:1,
      name:'Tunda Hotel',
      about:'This is and sample of Hotel website',
      url:'https://tunda-hotel.vercel.app/',
      image:Pana
    },
        {
      id:2,
      name:'EDUCATION IN NGO SET UP',
      about:'This is my second ever project',
      url:'https://vision-rise.vercel.app/
      image:Graduate
    },
        {
      id:3,
      name:'LITE INSET',
      about:'Vision rise is an NGO website for community development',
      url:'https://vision-rise.vercel.app/',
      image:school
    },
        {
      id:4,
      name:'LINKEDIN CLONE',
      about:'Mid level linkedIn UI',
      url:'https://hiss8n.github.io/LinkedIn-clone/',
      image:work
    },
        {
      id:5,
      name:'CHARITY WEBSITE',
      about:'Personal web for NGO',
      url:" https://hiss8n.github.io/Gyned/",
      image:charity
    },
  ]
  return(<div> 

   
  <div className='pt-20 max-w-6xl mx-auto  max-h-[250px] flex justify-center mt-6 bg-slate-50'>
    <h2 className=' mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold 
    text-blue-700 uppercase max-auto'>Projects</h2></div>
 {/*  <div className='max-w-7xl flex flex-cols w-[100%] h-[60vh]'> */}
    
    
  <div className="flex flex-wrap justify-start gap-4 p-4 flex-flow overflow-x-auto">
     <Baloon color="bg-gradient-to-br from-red-600 via-red-300 to-white-100 shadow-xl"left="6%"delay={0}top="-13%"size="w-[440px]h-[440px]"/>
   
    
    
      {items.map((item) => (

        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden w-[300px] h-[280px]">
          <a href={item.url}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover hover:opacity-90 transition"
            />
          </a>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.about}</p>
          </div>
        </div>



      ))   }
    </div>
    </div>
  
   /*  </div> */)



}

