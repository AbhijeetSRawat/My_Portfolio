import React from 'react'
import logo from '../../assets/portfolio logo.jpg'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        
        

        <div className='h-16 relative bg-black flex p-2 justify-around text-white text-xl items-center lg:flex-col lg:w-20 lg:justify-center lg:gap-10 lg:h-full'>

            <img src={logo} className=' lg:absolute top-5 left-3 h-14 w-14 lg:h-14 lg:w-14 rounded-full' alt="Abhijeet" />
        

            <NavLink to="/" className='relative text-xl font-semibold rounded-full h-11 w-11 flex justify-center group items-center bg-[#4e4e4e] hover:bg-yellow-500 lg:h-14 lg:w-14 transition-all duration-1000 ease-in-out'>
                
                <IoHome />
                <div className="absolute gap-6 left-0 top-0 w-[100px] rounded-full h-14 bg-yellow-500 opacity-0 invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-1000 ease-in-out lg:group-hover:translate-x-16 transform lg:group-hover:scale-100  flex pl-[18px] gap-4 items-center">
                 HOME
                </div>
                
            </NavLink>
            
    

            <NavLink to="/about" className='relative text-xl font-semibold rounded-full h-11 w-11 flex justify-center group items-center bg-[#4e4e4e] hover:bg-yellow-500 lg:h-14 lg:w-14 transition-all duration-1000 ease-in-out'>
                
                <FaUser />
                <div className="absolute gap-6 left-0 top-0 w-[145px] rounded-full h-14 bg-yellow-500 opacity-0 invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-1000 ease-in-out transform lg:group-hover:scale-100 lg:group-hover:translate-x-16 flex pl-[18px] gap-4 items-center">
                 ABOUT ME
                </div>
                
            </NavLink>

            <NavLink to="/projects" className='relative text-xl font-semibold rounded-full h-11 w-11 flex justify-center group items-center bg-[#4e4e4e] hover:bg-yellow-500 lg:h-14 lg:w-14 transition-all duration-1000 ease-in-out'>
                
                <FaBriefcase />
                <div className=" absolute gap-6 left-0 top-0 w-[170px] rounded-full h-14 bg-yellow-500 opacity-0 invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-1000 ease-in-out transform lg:group-hover:scale-100 lg:group-hover:translate-x-16 flex pl-[18px] gap-4 items-center">
                 MY PROJECTS
                </div>
                
            </NavLink>

            <NavLink to="/contact" className='relative text-xl font-semibold rounded-full h-11 w-11 flex justify-center group items-center bg-[#4e4e4e] hover:bg-yellow-500 lg:h-14 lg:w-14 transition-all duration-1000 ease-in-out'>
                
                <FaEnvelopeOpen />
                <div className="absolute gap-6 left-0 top-0 w-[170px] rounded-full h-14 bg-yellow-500 opacity-0 invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-1000 ease-in-out transform lg:group-hover:scale-100 lg:group-hover:translate-x-16 flex pl-[18px] gap-4 items-center">
                 CONTACT ME
                </div>
                
            </NavLink>
        </div>

    </div>
  )
}

export default Navbar
