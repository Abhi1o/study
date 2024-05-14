import React from 'react';
import "./Login.scss";
import register_login from "../../assets/images/register-login.png";
import shape_26 from "../../assets/images/shape/shape-26.png"
const Login = () => {
  return (
    <div className='main-wrapper'>
      <div className="section login-section-padding">
        <div className='login-main'>
            <div className="container">

                {/* Register & Login Wrapper Start */}
                <div className="register-login-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">

                            {/* Register & Login Images Start */}
                            <div className="register-login-images">
                                <div className="shape-1">
                                    <img src={shape_26} alt="Shape"/>
                                </div>


                                <div className="images">
                                    <img src={register_login} alt="Register Login"/>
                                </div>
                            </div>
                            {/* Register & Login Images End */}

                        </div>
                        <div className="col-lg-6">

                            {/* Register & Login Form Start */}
                            <div className="register-login-form">
                                <h3 className="title">Login <span>Now</span></h3>

                                <div className="form-wrapper">
                                    <form action="#top">
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="email" placeholder="Username or Email"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="password" placeholder="Password"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <button className="btn btn-primary btn-hover-dark w-100">Login</button>
                                            <a className="btn btn-secondary btn-outline w-100" href="#top">Login with Google</a>
                                        </div>
                                        {/* Single Form End */}
                                    </form>
                                </div>
                            </div>
                            {/* Register & Login Form End */}

                        </div>
                    </div>
                </div>
                {/* Register & Login Wrapper End */}

            </div>
        </div>
    </div>
    </div>
  )
}

export default Login