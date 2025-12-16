import React from 'react'
import Pages from '../Coman/Pages'
import { NavLink } from 'react-router-dom'

function Not() {
    return (
        <div>
            <Pages title="404 Error" data="404 Error" />
            {/* 404 Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <NavLink to="/" className="btn btn-primary py-3 px-4" >Go Back To Home</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}

        </div>
    )
}

export default Not
