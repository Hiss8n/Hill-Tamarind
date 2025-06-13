import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex flex-wrap justify-center gap-3 p-3 max-w-7xl justify-between items-center bg-slate-200 max-h-full mx-auto px-12'>


        <div>
            
            <h4 className='flex max-auto text-blue-600 mb-2 justiyf-center'>Skills</h4>
            <ul className='mt-2 grid grid-grow gap-2 text-sm text-gray-600  hover:cursor-pointer'>
                <li>Software Development</li>
                <li>Animation</li>
                <li>Video Editing</li>
            </ul>
        </div>

         <div>
            <h4 className='flex max-auto text-blue-600 mb-2 justiyf-center'>Experience</h4>
            <ul className='mt-2 grid grid-grow gap-2 text-sm text-gray-600   hover:cursor-pointer'>
                <li>IT Support Assistant - iamtheCODE</li>
                <li>Teacher- finn Church Aid- Maths & Chemistry O Level</li>
                <li>Personal projects - Coursera</li>
                
                
            </ul>
        </div>

         <div>
            <h4 className='flex max-auto text-blue-600 mb-2 justiyf-center'>Our services</h4>
            <ul className='mt-2 grid grid-grow gap-2 text-sm text-gray-600  hover:cursor-pointer'>
                <li>Web development</li>
                <li>Whiteboard animation</li>
                <li>IT Support</li>
                
            </ul>
        </div>
        </div>
      

      <div className='py-2 bg-slate-200'>
        <p className='flex justify-center items-center font-sm text-sm'>All rights reserved. &copy;<span>{new Date(Date.now()).getFullYear()}</span></p>
        </div>
        </>
  )
}

export default Footer