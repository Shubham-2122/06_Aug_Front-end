import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditUser } from '../SliceData/userSlice'

function Editdata() {

  const rediret = useNavigate()

  const {id} = useParams()
  console.log(id)

  const {users,loading} = useSelector((state)=>state.users)

  const [form,setform] = useState({
    id:"",
    name:"",
    password:"",
    email:""
  })

  useEffect(()=>{
    const singleuser = users.filter((data,index)=> data.id === id)
    console.log(singleuser[0])
    setform(singleuser[0])

  },[])

  const dispatch = useDispatch()

  const getchange=(e)=>{
    setform({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const getsubmit=(e)=>{
    e.preventDefault()
    dispatch(EditUser(form))
    rediret("/")
  }


  return (
    <div>
      <div className="container">
        <h1>Hello this Update Form</h1>
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Enter your name</label>
                <input type="text" value={form && form.name} onChange={getchange} name='name' className="form-control" id="Name" />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={form && form.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={form && form.password} onChange={getchange} name='password' className="form-control" id="exampleInputPassword1" />
              </div>

              <button onClick={getsubmit} type="submit" className="btn btn-primary">Update data</button>
            </form >

          </div>
        </div>
      </div>
    </div>
  )
}

export default Editdata
