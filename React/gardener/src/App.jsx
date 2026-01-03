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
import ServiceAdd from './admin/Apages/ServiceAdd'
import { Bounce, ToastContainer } from 'react-toastify'
import TeamManage from './admin/Apages/TeamManage'
import TeamAdd from './admin/Apages/TeamAdd'
import Alogin from './admin/Apages/Alogin'
import Login from './website/Pages/Login'
import Register from './website/Pages/Register'

function App() {
  return (
    <BrowserRouter>
      <div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

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
          <Route path='/login' element={<Login />} />
           <Route path='/newdata' element={<Register />} />

          <Route path='*' element={<Not />} />

          {/* admin  */}

          <Route path='/dash' element={<Dashboard />} />
          <Route path='/serviceMange' element={<ServiceMange />} />
          <Route path='/serviceadd' element={<ServiceAdd />} />
          <Route path='/teammanage' element={<TeamManage />} />
          <Route path='/teamadd' element={<TeamAdd />} />
          <Route path='/alogin' element={<Alogin />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
