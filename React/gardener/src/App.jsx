import React from 'react'
import Home from './website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/Pages/About'
import Service from './website/Pages/Service'
import Projects from './website/Pages/Projects'
import Features from './website/Pages/Features'
import Quota from './website/Pages/Quota'
import Not from './website/Pages/Not'
import Team from './website/Pages/Team'
import Test from './website/Pages/Test'
import Contact from './website/Pages/Contact'
import Dashboard from './admin/Apages/Dashboard'
import ServiceMange from './admin/Apages/ServiceMange'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/featur' element={<Features />} />
          <Route path='/qut' element={<Quota />} />
          <Route path='/team' element={<Team />} />
          <Route path='/test' element={<Test />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='*' element={<Not />} />

          {/* admin  */}

          <Route path='/dash' element={<Dashboard />} />
            <Route path='/serviceMange' element={<ServiceMange />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
