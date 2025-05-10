import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/core/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    
     <div className='lg:flex w-[360px] lg:w-[100vw] min-h-[100vh] overflow-x-hidden '>
        
        <Navbar/>

        <div className='bg-[rgba(14,12,12,0.9)] h-[100vh] text-white w-full overflow-y-auto scrollbar-hide translate-y-[-100%] opacity-0 transition-all duration-500 ease-out animate-[slide-in_1.5s_forwards] '>
          <Routes>
              <Route path='/' element={<Dashboard/>}/>  
              <Route path='/about' element={<About/>}/>  
              <Route path='/projects' element={<Projects/>}/>  
              <Route path='/contact' element={<Contact/>}/>  
          </Routes>
        </div>
     
    </div>
  )
}
