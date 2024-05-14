import React from 'react';
// import { Link } from 'react-router-dom';
import register_login from "../../assets/images/register-login.png";

import shape_26 from "../../assets/images/shape/shape-26.png"
// import login_img from "../../assets/images/register-login.png"
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {auth,db} from "../../auth";
// import {setDoc,doc} from "firebase/firestore"
import "./Signup.scss"
// import { toast } from 'react-toastify';
const Signup = () => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // // const [confirmpass, setConfirmpass]=useState("")
    // const [name, setName] = useState("")


    // const handleRegister= async (e) => {
    //     e.preventDefault();
    //     try{
    //        await createUserWithEmailAndPassword(auth, email, password)
    //        const user= auth.currentUser;
    //        console.log(user);
    //        if(user){
    //            await setDoc (doc(db,"Users",user.uid),{
    //                email:user.email,
    //                userName:name,
    //             });
    //         }
    //         console.log("user Registered Successfully");
    //         toast.success("User created successfully",{position:"top-center"})
        
    //     }catch(error){
    //         console.log(error.message)
    //         toast.success(error.message,{position:"top-center"})
        
    //     }
    // }
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
                                <h3 className="title">Sign Up <span>Now</span></h3>

                                <div className="form-wrapper">
                                    <form action="#top">
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="name" placeholder=" Name"/>
                                        </div>

                                        <div className="single-form">
                                            <input type="email" placeholder=" Email"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="password" placeholder="Password"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <button className="btn btn-primary btn-hover-dark w-100">Create an account</button>
                                            <a className="btn btn-secondary btn-outline w-100" href="#top">Sign Up with Google</a>
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
        
    );
};

export default Signup;