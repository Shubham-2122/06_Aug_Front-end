import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ServiceAdd() {

    const redirect = useNavigate()

    const [service, setservice] = useState({
        id: "",
        name: "",
        img: "",
        logo: "",
        desc: ""
    })

    const getchage = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(service)
    }

    const submitedSer = async (e) => {
        e.preventDefault();

        if(service.name == "" || service.img == "" || service.logo == "" || service.desc == ""){
            console.log("pls field data..");
            toast.error('pls field data..')
            return false;
        }

        const res = await axios.post("http://localhost:3000/services", service)
        redirect("/serviceMange")
        setservice({
            id: "",
            name: "",
            img: "",
            logo: "",
            desc: ""
        })
        toast.success('service add succssfully');
    }

    // Crud : r : all product : c : new data 

    return (
        <div>
            <Aheader />
            <Apages title="Service Add" data="Service Add" />
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <p className="fs-2 text-center fw-bold text-primary">Service Add</p>
                        <form onSubmit={submitedSer}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" value={service.name} onChange={getchage} name='name' className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input type="url" value={service.img} onChange={getchage} name='img' className="form-control" id="image" placeholder="your images" />
                                        <label htmlFor="image">your images</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input type="url" value={service.logo} onChange={getchage} name='logo' className="form-control" id="logo" placeholder="your logo" />
                                        <label htmlFor="logo">your logo</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" onChange={getchage} name='desc' value={service.desc} placeholder="your descrition" id="message" style={{ height: 100 }} defaultValue={""} />
                                        <label htmlFor="message">your descrition</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary py-3 px-4" type="submit">Service Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAdd
