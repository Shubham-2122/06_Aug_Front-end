import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

    const redirect = useNavigate()

    // effect
    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitdata = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = form;

            if(email == "" || password == ""){
                console.log("pls field a dat...")
                toast.error('pls Feild a Data..')
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            // email match
            if(res.data.length === 0){
                console.log("Email does not match..")
                toast.error('Email Does not match..')
                return false
            }

            const users = res.data[0]
            console.log(users)

            if(users.password != password){
                console.log("password does not match")
                toast.error('password does not match')
                return false
            }
            localStorage.setItem("Uid",users.id)
            localStorage.setItem("Uname",users.name)
            redirect("/")
            toast.success("Successfully login..")
            console.log("Succfully login..")

        } catch (error) {
            console.log("Api data not Found..", error)
            toast.error('Api data not Found..')
        }
    }
  return (
    <div>
      <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
          <form action="">
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' value={form.email} name='email' onChange={getchange} label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' value={form.password} name='password' onChange={getchange} label='Password' id='formControlLg' type='password' size="lg"/>

              <h5>New Account <Link  to="/newdata">Sign up </Link></h5>

              <MDBBtn onClick={submitdata} size='lg'>
                Login
              </MDBBtn>

            

            </MDBCardBody>
          </form>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Login
