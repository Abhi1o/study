import React,{useState} from 'react'
import "./Course_timeline.scss"
import { FiBookOpen } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { HiStar } from "react-icons/hi2";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const Course_timeline = () => {

    const [showDetails,setShowDetails]=useState(false)

    const toggleDetails=()=>{
        setShowDetails(!showDetails)
    }
  return (
    
    <div className='course_timeline section-title'>
            <h1 className='main-title'>Course Timeline</h1>
            <div className="timeline-container">
                <div className='timeline-nav'>
                    <p>I know</p>
                    <ul>
                        <li className='active'>Nothing</li>
                        <li>Basic</li>
                        <li>Move on Sui</li>
                    </ul>
                </div>
                <div className="timeline">
                    
                    <div className="timeline-container">
                         <hr className='timeline-hr-left'/>
                        <div className="timeline-content-right">
                            <div className="timeline-title">
                                <p>understand the Fundamental of Move on Sui</p>
                            </div>

                            <div className="timeline-card">
                                <div className="timeline-card-content">
                                    <div className="timeline-card-image">
                                        <img src="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/JSPGKSpV4iOq62WKy32NGwbuhkI8eQynzfAQC7VT.png" alt="" className="src" />
                                    </div>
                                    <div className="timeline-card-description">
                                        <div>
                                        <span>Beginner</span>
                                        <h1>Learn Everything About Sui, its Concepts and Protocols</h1>
                                        <div className='timeline-card-feature'>
                                            <div className='timeline-card-feature-left'>
                                                 <FiBookOpen color='#000' className='book-icon'/>
                                                <p>7 Lessons .</p>
                                            </div>

                                            <div className='timeline-card-feature-middle'>
                                                <BsStars color='#f2b200' className='star-icon'/>
                                                <p>2950 XP .</p>
                                            </div>

                                            <div className='timeline-card-feature-right'>
                                                <HiStar color='#f2b200' className='star-icon'/>
                                                <p>4.8(70 Reviews)</p>
                                            </div>

                                        </div>
                                        </div>
                                        

                                    <button className="btn btn-primary btn-hover-dark">Get Started</button>
                                    </div>


                                </div>
                                <div className='timeline-card-detail'>
                                    {showDetails && 
                                    <div className='timeline-card-detail-content timeline-card-detail-visible'>
                                        <h4>What you"ll learn</h4>
                                        <div className='timeline-card-detail-context'>
                                        <p><IoCheckmarkDoneSharp color='#00ed2'/> Intro to Sui blockchain</p>
                                        <p><IoCheckmarkDoneSharp color='#00ed2'/>  Understand Sui architecture</p>
                                        <p><IoCheckmarkDoneSharp color='#00ed2'/> Learn Sui use cases</p>
                                        <p><IoCheckmarkDoneSharp color='#00ed2'/> Explore Sui key features</p>
                                        </div>
                                        </div>
                                    }
                                    <div className='timeline-card-detail-button' onClick={toggleDetails}>
                                        <p>show Details</p>
                                        <span className='arrow-icon'>{showDetails ? " ^ ":" > "}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Course_timeline