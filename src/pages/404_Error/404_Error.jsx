import React from "react"
import { Link } from "react-router-dom"

import "./404_Error.scss"
import error_img from "../../assets/images/error.png"

const Error404 = () => {
    return(
        <div className="section section-padding mt-n10">
            <div className="container">
                <div className="error-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="error-images">
                                <img src={error_img} alt="Error" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="error-content">
                                <h5 className="sub-title">This Page is Not Found.</h5>
                                <h2 className="main-title">We are very sorry for error. We <span> can’t find this</span> page.</h2>
                                <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                                <Link to="/" className="btn btn-primary btn-hover-dark">Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404;
