import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Baloon from "../components/Baloons";
import { Projects } from "./Projects";

import Pana from "../assets/pana.png";
import Graduate from "../assets/graduation.png";
import charity from "../assets/charity.png";
import school from "../assets/school.png";
import work from "../assets/work.png";

const HomePage = () => {
  const items=[
    {
      id:1,
      name:'SOLAR SYSTEM',
      about:'This is a simple lunar rotation on its axis',
      url:' https://hiss8n.github.io/Animation03/',
      image:Pana
    },
       {
      id:2,
      name:'LITE INSET',
      about:'cool light ring margin rimm,spectre',
      url:'https://hiss8n.github.io/Animation01-volume01/',
      image:school
    },
        {
      id:3,
      name:'EDUCATION',
      about:'School web site project',
      url:'https://hiss8n.github.io/backilla/',
      image:Graduate
    },
     
        {
      id:4,
      name:'LINKEDIN CLONE',
      about:'Mid level linkedIn UI',
      url:' https://hiss8n.github.io/LinkedIn-clone/',
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

  const [index, setIndex] = useState(0);
  const skills = ["Web development", "Video editing", "Whiteboard Animation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div>
      <div className="min-h-screen p-0 w-full h-[100vh] h-screen-full bg-slate-50">
        {/* LEFT */}

        <div className="w-3/5 bg-transparent-200 items-center grid place-items-center justify-center ">
          <div className="mt-20">
            <h3 className=' font-semibold text-slate-900 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" mt-20 ml-12 uppercase'>
              Creating software for business
              <br /> and individuals
            </h3>
          </div>

          <h2 className="m-10 sm:text-sm md:text-xl lg:text-xl xl:text-2xl text-blue-400 ml-12 font-Pacific ">
            Building sleek sites with cinematic flair.
            <br />
            <div className="mt-3">
              <span
                className=" text-bold sm:text-sm md:text-xl lg:text-3xl xl:text-3xl
            transition:duration-1000 opacity-100 bg-slate-50
               text-red-400 shadow-xl"
              >
                {skills[index]}
              </span>
            </div>
          </h2>
          <div className="p-8 ">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3  px-[12px] cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg
   shadow-lg hover:from-blue-600 hover:to-blue-400
   focus:outline-none focus:ring-blue-400 focus:ring-offset-2 focus:offset-gray-600
   cursor-pointer uppercase
   sm:text-xl md:text-xl lg:text-xl xl:text-xl
   "
              >
                Contuct Us
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="w-2/5 bg-transparent flex items-center justify-center">
          <Baloon
            color="bg-gradient-to-tl from-cyan-900 via-cyan-500 to-cyan-200 shadow-sm"
            left="30%"
            delay={0}
            top="-12%"
            size="w-[580px] h-[580px]"
          />
        </div>
      </div>

      <div>
        <div className="pt-20 max-w-6xl mx-auto  max-h-[250px] flex justify-center mt-6 bg-slate-50">
          <h2
            className=" mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold 
       text-blue-700 uppercase max-auto"
          >
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4 flex-flow overflow-x-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden w-[180px] h-[280px]"
            >
              <a href={item.url}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover hover:opacity-90 transition"
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm trancate mb-2">{item.about}</p>
              </div>

              <Baloon
                color="bg-gradient-to-br from-indigo-500 via-indigo-200 to-white-300 shadow-4xl"
                left="-45%"
                delay={10}
                top="50%"
                size="w-[480px] h-[480px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
