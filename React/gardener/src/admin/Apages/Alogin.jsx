import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Token : setItem , getItem,removeItem

function Alogin() {

    const redirect = useNavigate()

    // effect
    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
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

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            // email match
            if(res.data.length === 0){
                console.log("Email does not match..")
                toast.error('Email Does not match..')
                return false
            }

            const admin = res.data[0]
            console.log(admin)

            if(admin.password != password){
                console.log("password does not match")
                toast.error('password does not match')
                return false
            }
            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            redirect("/dash")
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

                        <form action="" onSubmit={submitdata}>
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                        Login
                                    </MDBBtn>

                                </MDBCardBody>
                            </MDBCard>
                        </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Alogin
