import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import shape_26 from "../../assets/images/shape/shape-26.png"
import login_img from "../../assets/images/register-login.png"
import "./Login.scss"
import { ToastContainer, toast } from 'react-toastify';
import {auth } from "../../auth"
const Login = () => {


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    const handleSubmit = async(e)=>{
        e.preventDefault();

    }
    return (
        <div className=" ">
            <div className="container">
                <div className="register-login-wrapper">
                    <div className="row align-items-center">
                        
                            <div className="register-login-images">
                                <div className="shape-1">
                                    <img src={shape_26} alt="Shape" />
                                </div>
                                <div className="images">
                                    <img src={login_img} alt="Register Login" />
                                </div>
                            </div>
                        
                        
                            <div className="register-login-form">
                                <h3 className="title">Login <span>Now</span></h3>
                                <div className="form-wrapper">
                                    <form action="#" onSubmit={handleSubmit}>
                                        <div className="single-form">
                                            <input type="email" placeholder="Username or Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className="single-form">
                                            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                        </div>
                                        <div className="single-form">
                                            <button className="btn btn-hover-dark ">Login</button>
                                            <Link className="google-btn btn-secondary btn-outline w-100" to="#">Login with Google</Link>
                                            <p>
                                                Don't have an account ? <Link to="/signup" ><span>Signup</span></Link>
                                            </p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
