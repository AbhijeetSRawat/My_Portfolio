import React from 'react'
import { Link} from 'react-router-dom'
import portfolio from '../assets/portfoliopic.png'
import { FaArrowRightLong } from "react-icons/fa6";

import portfoliosm from '../assets/portfoliopicsm.png'
export default function Dashboard() {
  return (
    <div className=' text-white lg:w-full lg:h-full flex lg:justify-between flex-col lg:flex-row items-center lg:p-5 lg:pl-16'>
        <div className='w-[65vw] h-[65vw] lg:w-[33vw] lg:h-[82vh] mt-10 flex justify-center items-center bg-yellow-500 rounded-full lg:rounded-3xl shadow-lg'>
          {/* the image div */}
              <img className='rounded-full w-[60vw] h-[60vw] lg:hidden lg:opacity-0 ' src={portfoliosm} alt="Abhijeet" />
              <img className='hidden opacity-0 lg:flex lg:opacity-100 rounded-3xl w-[30vw] h-[75vh] shadow-lg  translate-x-[-100%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards] ' src={portfolio} alt="Abhijeet" />
        </div>
        <div className='mt-10  flex flex-col items-center lg:items-start lg:w-[50vw] lg:pl-5 translate-x-[200%] opacity-0 transition-all duration-500 ease-out animate-[slide-in_1.5s_forwards] '>

            <div className='text-2xl font-bold text-yellow-500 lg:text-5xl lg:font-semibold  lg:mb-5'>
              I'M ABHIJEET SINGH RAWAT.
            </div>
            <div className='text-2xl font-bold my-2 lg:text-5xl lg:font-semibold lg:mb-5'>
              FULL-STACK WEB DEVELOPER
            </div>
            <div className='text-center px-3 mt-1 mb-5 lg:text-2xl lg:mb-16 lg:text-start  '>
              I am a Full-Stack Web Developer focused on crafting clean and user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me. 
            </div>
            
            <Link to="/about" className=''>
                <div className='flex pl-10 justify-between items-center h-[8vh] w-[70vw] lg:w-[20vw] font-semibold rounded-full border-2 border-yellow-500'>
                  <div className=''>
                  MORE ABOUT ME
                    </div> 

                  <div className='h-[8vh] w-[8vh] flex justify-center items-center bg-yellow-500 rounded-full'>
                   <Link to="/about">
                       <FaArrowRightLong className='transition-all duration-200  
                          motion-safe:animate-[slide_1s_linear_infinite]
                          ' />
                   </Link>
                  </div>
                </div>
            </Link>

        </div>
    </div>
  )
}
