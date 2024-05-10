import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import shape_26 from "../../assets/images/shape/shape-26.png"
import login_img from "../../assets/images/register-login.png"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from "../../auth";
import {setDoc,doc} from "firebase/firestore"
import "./Signup.scss"
import { ToastContainer, toast } from 'react-toastify';
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass]=useState("")
    const [name, setName] = useState("")


    const handleRegister= async (e) => {
        e.preventDefault();
        try{
           await createUserWithEmailAndPassword(auth, email, password)
           const user= auth.currentUser;
           console.log(user);
           if(user){
               await setDoc (doc(db,"Users",user.uid),{
                   email:user.email,
                   userName:name,
                });
            }
            console.log("user Registered Successfully");
            toast.success("User created successfully",{position:"top-center"})
        
        }catch(error){
            console.log(error.message)
            toast.success(error.message,{position:"top-center"})
        
        }
    }
    return (
        
        <div className="">
            <div className="container">
                <div className="register-login-wrapper">
                    <div className="row align-items-center">
                        
                            <div className="register-login-images">
                                <div className="shape-1">
                                    <img src={shape_26 } alt="Shape" />
                                </div>
                                <div className="images">
                                    <img src={login_img} alt="Register Login" />
                                </div>
                            </div>
                       
                        
                            <div className="register-login-form">
                                <h3 className="title">Registration <span>Now</span></h3>
                                <div className="form-wrapper">
                                    <form action="#" onSubmit={handleRegister}>
                                      
                                        <div className="single-form">
                                            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                                        </div>
                                        <div className="single-form">
                                            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                        </div>
                                        <div className="single-form">
                                            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                        </div>
        
                                        <div className="single-form">
                                            <button type="submit" className="btn btn-primary btn-hover-dark w-100">Create an account</button>
                                            <Link className="btn btn-secondary btn-outline w-100" to="#">Sign up with Google</Link>
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

export default Signup;