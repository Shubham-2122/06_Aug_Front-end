import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function TeamAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        role: "",
        img: ""
    })

    const getchage = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getdata = async (e) => {
        e.preventDefault();

        if (form.name == "" || form.role == "" || form.img == "") {
            toast.error('pls feild team member');
            return false
        }
        try {
            const res = await axios.post("http://localhost:3000/team", form)
            console.log(res.data)
            setform({
                id: "",
                name: "",
                role: "",
                img: ""
            })
            redirect("/teammanage")

        } catch (error) {
            console.log("Api data not Found...", error)
            toast.error('Api data not Found')
        }
    }


    return (
        <div>
            <Aheader />
            <Apages title="Team add" data="Team add" />
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <p className="fs-2 text-center fw-bold text-primary">Team Add</p>
                        <form onSubmit={getdata}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" onChange={getchage} value={form.name} name='name' className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" onChange={getchage} value={form.role} name='role' className="form-control" id="role" placeholder="Your Role" />
                                        <label htmlFor="role">Your role</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="url" onChange={getchage} value={form.img} name='img' className="form-control" id="image" placeholder="your images" />
                                        <label htmlFor="image">your images</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-4" type="submit">Team Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamAdd
