import React from 'react'
import UserData from './Compoenet/UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewData from './Compoenet/NewData'
import Navabar from './Compoenet/Navabar'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navabar />
      <Routes>
        <Route path='/' element={<UserData />} />
        <Route path='/new' element={<NewData />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
