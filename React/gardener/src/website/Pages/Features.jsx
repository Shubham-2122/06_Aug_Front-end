import React from 'react'
import Header from '../Coman/Header'
import Pages from '../Coman/Pages'
import Footer from '../Coman/Footer'

function Features() {
    return (
        <div>
            <Header />
            <Pages title="Feature" data="Feature" />
            <div>
                {/* Feature Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row gx-0">
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                            <i className="fa fa-times text-primary" />
                                        </div>
                                        <div className="ps-3">
                                            <h4>No Hidden Cost</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                            <i className="fa fa-users text-primary" />
                                        </div>
                                        <div className="ps-3">
                                            <h4>Dedicated Team</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-white shadow d-flex align-items-center h-100 px-5" style={{ minHeight: 160 }}>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                            <i className="fa fa-phone text-primary" />
                                        </div>
                                        <div className="ps-3">
                                            <h4>24/7 Available</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End */}
                {/* Facts Start */}
                <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                                <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}
            </div>

            <Footer />


        </div>
    )
}

export default Features
