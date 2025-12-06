import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const getback=()=>{
        redirect("/")
    }

  return (
    <div>
      <h1 className='bg-danger text-center text-light p-5'>Not Found Pages 404</h1>
      <Link to="/" className='btn btn-success'>Back to Home</Link>
      <button onClick={getback} className='btn btn-info'>Back ho home 2</button>
    </div>
  )
}

export default NotFound
