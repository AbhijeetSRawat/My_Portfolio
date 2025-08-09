import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/core/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className='bg-[rgba(14,12,12,0.9)] min-h-screen'>
      <div className='lg:flex min-h-screen overflow-x-hidden'>
        
        <Navbar/>

        {/* Main content area with proper spacing for navbar */}
        <div className='bg-[rgba(14,12,12,0.9)] text-white w-full min-h-screen 
                        
                        overflow-y-auto scrollbar-hide 
                        translate-y-[-100%] opacity-0 
                        transition-all duration-500 ease-out 
                        animate-[slide-in_1.5s_forwards]'>
          <Routes>
              <Route path='/' element={<Dashboard/>}/>  
              <Route path='/about' element={<About/>}/>  
              <Route path='/projects' element={<Projects/>}/>  
              <Route path='/contact' element={<Contact/>}/>  
          </Routes>
        </div>
     
      </div>
    </div>
  )
}