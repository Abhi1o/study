import React from 'react'
import profile from "../../assets/images/author/Ellipse 14.png"
import { SiTata } from "react-icons/si";
import "./Mentor.scss"

const Mentor = () => {
  return (
    
    <div className="mentor-container section-title ">
                        <h1 className="main-title">Mentor Details</h1>
                        <div className="mentor-wrapper">
                            
                                <div className="mentor-card">
                                    <img src={profile} alt='not found'/>
                                    <div className="mentor_name">
                                        <h5>Vidya</h5>
                                        <p>Mtech</p>
                                    </div>
                                    <SiTata  className='company-logo'/>

                                </div>
                                <div className="mentor-card">
                                    <img src={profile} alt='not found'/>
                                    <div className="mentor_name">
                                        <h5>Vidya</h5>
                                        <p>Mtech</p>
                                    </div>
                                    <SiTata  className='company-logo'/>

                                </div>
                                <div className="mentor-card">
                                    <img src={profile} alt='not found'/>
                                    <div className="mentor_name">
                                        <h5>Vidya</h5>
                                        <p>Mtech</p>
                                    </div>
                                    <SiTata  className='company-logo'/>

                                </div>
                                <div className="mentor-card">
                                    <img src={profile} alt='not found'/>
                                    <div className="mentor_name">
                                        <h5>Vidya</h5>
                                        <p>Mtech</p>
                                    </div>
                                    <SiTata  className='company-logo'/>

                                </div>
                           
                        </div>


                    </div>
  )
}

export default Mentor   