import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
        <h1 className='bg-info p-5'>Hello this About pages</h1>
        <Link className='btn btn-success mx-2' to="/about/about1" >About1</Link>
        <Link className='btn btn-success mx-2' to="/about/about2" >About 2</Link>
        <Outlet />
      <Footer />
    </div>
  )
}

export default About
