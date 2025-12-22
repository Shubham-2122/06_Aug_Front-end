import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Pages from '../Coman/Pages'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Service() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/services")
        console.log(res.data)
        setservice(res.data)
    }

    return (
        <div>
            <Header />
            <Pages title="Services" data="Services" />
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <p className="fs-5 fw-bold text-primary">Our Services</p>
                        <h1 className="display-5 mb-5">Services That We Offer For You</h1>
                    </div>
                    <div className="row g-4">
                        {
                            service && service.map((data, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                        <div className="service-item rounded d-flex h-100">
                                            <div className="service-img rounded">
                                                <img className="img-fluid" src={data.img} alt />
                                            </div>
                                            <div className="service-text rounded p-5">
                                                <div className="btn-square rounded-circle mx-auto mb-3" style={{overflow:"hidden"}}>
                                                    <img className="img-fluid"  src={data.logo} alt="Icon" />
                                                </div>
                                                <h4 className="mb-3">{data.name}</h4>
                                                <p className="mb-4">{data.desc}</p>
                                                <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* Service End */}
            <Footer />

        </div>
    )
}

export default Service
