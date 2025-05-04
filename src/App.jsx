import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Navbar from './components/core/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    
     <div className='lg:flex w-[100vw] h-[100vh]'>

        <Navbar/>

        <div>
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
