import React from 'react'
import "./Whyus.scss"

import { LuClipboardEdit } from "react-icons/lu";

const Whyus = () => {
  return (
    <div className="whyus-container section-title">
                        <h1 className="main-title"><span>Why Us</span></h1>
                        <div className="whyus-wrapper">
                            <div className="whyus-card">
                            <LuClipboardEdit className='icon'/>
                            <h4>1:1 Guidance </h4>
                                <p>1:1 Career coaching Sessions with top industry professionals</p>

                            </div>

                            <div className="whyus-card">
                            <LuClipboardEdit className='icon'/>
                            <h4>Interviews</h4>
                                <p>Live mock interview with Industry Experts</p>

                            </div>


                            <div className="whyus-card">
                            <LuClipboardEdit className='icon'/>
                            <h4>Assessments</h4>
                                <p>Series of mock assessments and detailed interview prep sprints to ace top tech jobs</p>

                            </div>

                            <div className="whyus-card">
                            <LuClipboardEdit className='icon'/>
                            <h4>Profile Building</h4>
                                <p>Expert guidance to get your profile (GitHub,LikedIn, Resume) ready.</p>

                            </div>


                            <div className="whyus-card">
                            <LuClipboardEdit className='icon'/>
                            <h4>Career Opportunities</h4>
                                <p>Guidance to start applying to a diverse set of job opportunities inline with your career aspiration.</p>

                            </div>

                            
                        </div>

                    </div>
  )
}

export default Whyus