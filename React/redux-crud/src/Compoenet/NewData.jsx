import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NewUser } from '../SliceData/userSlice'
import { useNavigate } from 'react-router-dom'

function NewData() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch  = useDispatch()

    const getsubmit =(e)=>{
        e.preventDefault()
        dispatch(NewUser(form))
        setform({
             id: "",
        name: "",
        email: "",
        password: ""
        })
        redirect("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form onSubmit={getsubmit}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter your name</label>
                                <input type="text" value={form.name} onChange={getchange} name='name' className="form-control" id="Name" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={form.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={form.password} onChange={getchange} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewData
