import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Pages from '../Coman/Pages'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Team() {


    const [team, setteam] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        console.log(res.data)
        setteam(res.data)
    }

    return (
        <div>
            <Header />
            <Pages title="Our Team" data="Our Team" />
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <p className="fs-5 fw-bold text-primary">Our Team</p>
                        <h1 className="display-5 mb-5">Dedicated &amp; Experienced Team Members</h1>
                    </div>
                    <div className="row g-4">
                        {
                            team && team.map((data, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="team-item rounded">
                                            <img className="img-fluid" src={data.img} style={{ height: "350px" }} alt />
                                            <div className="team-text">
                                                <h4 className="mb-0">{data.name}</h4>
                                                <p className="text-primary">{data.role}</p>
                                                <div className="team-social d-flex">
                                                    <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                                    <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                                                    <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-instagram" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* Team End */}

            <Footer />

        </div>
    )
}

export default Team
