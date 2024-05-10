import React from 'react'
import "./Home.scss"
import google_play from "../../assets/images/google-play.png"
import app_store from "../../assets/images/app-store.png"
// import course01_img from "../../assets/images/courses/courses-01.jpg"
// import author01_img from "../../assets/images/author/author-01.jpg"
// import author03_img from "../../assets/images/author/author-03.jpg"
// import author06_img from "../../assets/images/author/author-06.jpg"
// import author07_img from "../../assets/images/author/author-07.jpg"
import slider_01 from "../../assets/images/slider/slider-1.png"
import shape_06 from "../../assets/images/shape/shape-6.png"
import shape_07 from "../../assets/images/shape/shape-7.png"
import shape_05 from "../../assets/images/shape/shape-5.png"
import shape_08 from "../../assets/images/shape/shape-8.png"
import shape_09 from "../../assets/images/shape/shape-9.png"
import shape_10 from "../../assets/images/shape/shape-10.png"
import shape_12 from "../../assets/images/shape/shape-12.png"
// import shape_13 from "../../assets/images/shape/shape-13.png"
import shape_14 from "../../assets/images/shape/shape-14.png"
import shape_15 from "../../assets/images/shape/shape-15.png"
import shape_16 from "../../assets/images/shape/shape-16.png"
import shape_17 from "../../assets/images/shape/shape-17.png"
import scholarship_image from "../../assets/images/icon/scholarship-img.png"
// import { FaCaretRight } from "react-icons/fa";
// import Marquee from 'react-fast-marquee'
// import profile_img from "../../assets/images/author/Ellipse 14.png"
// import { SiTata } from "react-icons/si";
// import { LuClipboardEdit } from "react-icons/lu";
import { Link } from 'react-router-dom'
import Success from "../../components/Success/Success"
import Whyus from "../../components/Whyus/Whyus"
import Company from '../../components/Company/Company'
import Feedback from '../../components/FeedBack/Feedback'

const Home = () => {

    const achieves = [
        {
            "number": "95%",
            "title": "of students placed ",
        },
        {
            "number": "3.5 - 6 LPA",
            "title": "Average ",
        },
        {
            "number": "18 - 20 LPA",
            "title": "Highest Package",
        }, 
        {
            "number": "81%",
            "title": "Average Salary Hike",
        },
    ]

    return (
        <div className=''>
            <div className="section slider-section">

                {/* <!-- Slider Shape Start --> */}
                <div className="slider-shape">
                    <img className="shape-1 animation-round" src={shape_08} alt="Shape" />
                </div>
                {/* <!-- Slider Shape End --> */}

                <div className="container">

                    {/* <!-- Slider Content Start --> */}
                    <div className="slider-content">
                        <h4 className="sub-title">Start your favourite course</h4>
                        <h2 className="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2>
                        <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                        <button className="btn" to="#">Start Course</button>
                    </div>
                    {/* <!-- Slider Content End --> */}

                </div>

                {/* <!-- Slider Courses Box Start --> */}
                <div className="slider-courses-box">

                    <img className="shape-1 animation-left" src={shape_05} alt="Shape" />

                    <div className="box-content">
                        <div className="box-wrapper">
                            <i className="flaticon-open-book"></i>
                            <span className="count">1,235</span>
                            <p>courses</p>
                        </div>
                    </div>

                    <img className="shape-2" src={shape_06} alt="Shape" />

                </div>
                {/* <!-- Slider Courses Box End --> */}

                {/* <!-- Slider Rating Box Start --> */}
                <div className="slider-rating-box">

                    <div className="box-rating">
                        <div className="box-wrapper">
                            <span className="count">4.8 <i className="flaticon-star"></i></span>
                            <p>Rating (86K)</p>
                        </div>
                    </div>

                    <img className="shape animation-up" src={shape_07} alt="Shape" />

                </div>
                {/* <!-- Slider Rating Box End --> */}

                {/* <!-- Slider Images Start --> */}
                <div className="slider-images">
                    <div className="images">
                        <img src={slider_01} alt="Slider" />
                    </div>
                </div>
                {/* <!-- Slider Images End --> */}

                {/* <!-- Slider Video Start --> */}
                <div className="slider-video">
                    <img className="shape-1" src={shape_09} alt="Shape" />

                    <div className="video-play">
                        <img src={shape_10} alt="Shape" />
                        <Link to="https://www.youtube.com/watch?v=BRvyWfuxGuU" className="play video-popup"><i className="flaticon-play"></i></Link>
                    </div>
                </div>
                {/* <!-- Slider Video End --> */}

            </div>


            <div className="section ">
                <div className="container">


                    {/* Achievements */}
                    <div className="achieve-container section-title">
                        {/* <h1 className="main-title">Achievements <span>of Divisor</span></h1> */}
                        <div className='achieve-wrapper'>
                            {achieves.map((achieve, index) => {
                                return (<div className='achieve-card' key={index}>
                                    <h1>{achieve.number}</h1>
                                    <p>{achieve.title}</p>
                                    {/* <hr className='line'/> */}
                                </div>)

                            })}



                        </div>

                    </div>

                    <Success />


                


                    

                    


                    {/* carrier path links */}

                    <div className="carrier_container section-title">
                        <h1 className='main-title'><span>Carrier</span> Path</h1>
                        <div className="carrier-wrapper">
                            <div className="carrier-card">
                                <h2>Learn to Build on Aptos, Make Your Move</h2>
                                <p>An extensive learning track to help you learn and excel in Aptos Move</p>
                                <button>Start Learning</button>
                                <span>+ 2585 devs have joined </span>
                            </div>
                            <div className="carrier-card">
                                <h2>Master Move on Sui,
                                    Build Beyond</h2>
                                <p>An extensive learning track for developers to get started in Sui Move</p>
                                <button>Start Learning</button>
                                <span>+ 2585 devs have joined </span>
                            </div>
                            <div className="carrier-card">
                                <h2>Learn to Build on Fuel
                                    Blockchain</h2>
                                <p>Hands-on learning track that helps you master Fuel Network</p>
                                <button>Start Learning</button>
                                <span>+ 2585 devs have joined </span>
                            </div>
                        </div>
                    </div>


                    {/* scholrship banner */}
                    <div className='scholar-container section-title'>
                        <h1 className="main-title"> Scholarship  </h1>
                        <div className='scholar-wrapper'>
                            <div className='left-content'>
                                <p>Price Distribution</p>
                                <ul> 
                                    <li>Combined price Rs.50,000. </li>
                                    <li>Individual price 40,000 after all discount. </li>
                                    <li>Scholarship up to 15,000 (Top 10%).</li>
                                    <li>Suprise gift for top perform.</li>
                                </ul>
                                </div>
                            <div className="right-content">
                            <button className='scholar-btn'>Details</button>
                                <img src={scholarship_image} className='img' alt="Slider" />
                            </div>
                        </div>

                    </div>

                    {/* success stories */}
                    

                    {/* why us  */}
                    <Whyus />


                    

                    {/* partner companies */}
                    <Company />


                    {/* Divisor Fimaly  */}
                    <div className="place-record-container section-title">
                        {/* <h1 className="main-title">Divisor family</h1>Divisor family */}
                        <div className="place-record-wrapper">
                            <h1 className='main-title'>Divisor family</h1>
                            <hr/>
                                <div className="place-record-card">
                                    <div className="leftplace-card">
                                        <p>Student community</p>
                                        <h3>2000+</h3>
                                    </div>
                                    <div className="leftplace-card">
                                        <p>Working members </p>
                                        <h3>15+</h3>
                                    </div>
                                    <div className="leftplace-card">
                                        <p>Interns.</p>
                                        <h3>50+</h3>
                                    </div>
                                    

                                </div>
                           
                        </div>


                    </div>

                    {/* all course start */}
                    
                    
                    {/* All Courses Tabs Menu End  */}


                    
                    
                </div>
            </div>

            <div className="section section-padding-02">
                <div className="container">

                    {/* Call to Action Wrapper Start */}
                    <div className="call-to-action-wrapper">

                        <img className="cat-shape-01 animation-round" src={shape_12} alt="Shape" />
                        {/* <img className="cat-shape-02" src={shape_13} alt="Shape" /> */}
                        <img className="cat-shape-03 animation-round" src={shape_12} alt="Shape" />

                        <div className="call-to-container">
                            

                                {/* Section Title Start */}
                                <div className="section-title shape-02">
                                    <h5 className="sub-title">Become a Member</h5>
                                    <h2 className="main-title">You can join Devisor as <span>?</span></h2>
                                </div>
                                {/* Section Title End */}

                           
                            
                                <div className="call-to-action-btn">
                                    <button className="call-to-action-button " to="/">Join Us</button>
                                </div>
                            
                        </div>
                    </div>
                    {/* Call to Action Wrapper End */}

                </div>
            </div>


            <div className="section section-padding mt-n1">
                <div className="container">

                    {/* Section Title Start */}
                    <div className="section-title shape-03 text-center">
                        <h5 className="sub-title">Over 1,235+ Course</h5>
                        <h2 className="main-title">How It <span> Work?</span></h2>
                    </div>
                    {/* Section Title End */}

                    {/* How it Work Wrapper Start */}
                    <div className="how-it-work-wrapper">

                        {/* Single Work Start */}
                        <div className="single-work">
                            <img className="shape-1" src={shape_15} alt="Shape" />

                            <div className="work-icon">
                                <i className="flaticon-transparency"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Course</h3>
                                <p>Provide complete career path for trending technologies.</p>
                            </div>
                        </div>
                        {/* Single Work End */}

                        {/* Single Work Start */}
                        <div className="work-arrow">
                            <img className="arrow" src={shape_17} alt="Shape" />
                        </div>
                        {/* Single Work End */}

                        {/* Single Work Start */}
                        <div className="single-work">
                            <img className="shape-2" src={shape_15} alt="Shape" />

                            <div className="work-icon">
                                <i className="flaticon-forms"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Practice</h3>
                                <p>Provide workshops with hands-on experience for technologies with high demand in the industry.</p>
                            </div>
                        </div>
                        {/* Single Work End */}

                        {/* Single Work Start */}
                        <div className="work-arrow">
                            <img className="arrow" src={shape_17} alt="Shape" />
                        </div>
                        {/* Single Work End */}

                        {/* Single Work Start */}
                        <div className="single-work">
                            <img className="shape-3" src={shape_16} alt="Shape" />

                            <div className="work-icon">
                                <i className="flaticon-badge"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Internship</h3>
                                <p>Provide Interndhip assistance with tests and mock interviews.</p>
                            </div>
                        </div>
                        {/* Single Work End */}

                        <div className="work-arrow">
                            <img className="arrow" src={shape_17} alt="Shape" />
                        </div>
                        {/* Single Work End */}

                        {/* Single Work Start */}
                        <div className="single-work">
                            <img className="shape-3" src={shape_16} alt="Shape" />

                            <div className="work-icon">
                                <i className="flaticon-badge"></i>
                            </div>
                            <div className="work-content">
                                <h3 className="title">Internship</h3>
                                <p>Provide Interndhip assistance with tests and mock interviews.</p>
                            </div>
                        </div>

                    </div>
                    {/* How it Work Wrapper End */}

                </div>
            </div>

            {/* <!-- Download App Start --> */}
            <div className="section section-padding download-section">

                <div className="app-shape-1"></div>
                <div className="app-shape-2"></div>
                <div className="app-shape-3"></div>
                <div className="app-shape-4"></div>

                <div className="container">

                    {/* <!-- Download App Wrapper Start --> */}
                    <div className="download-app-wrapper mt-n6">

                        {/* <!-- Section Title Start --> */}
                        <div className="section-title section-title-white">
                            <h5 className="sub-title">Ready to start?</h5>
                            <h2 className="main-title">Download our mobile app. for easy to start your course.</h2>
                        </div>
                        {/* <!-- Section Title End --> */}

                        <img className="shape-1 animation-right" src={shape_14} alt="Shape" />

                        {/* <!-- Download App Button End --> */}
                        <div className="download-app-btn">
                            <ul className="app-btn">
                                <li><Link to="#"><img src={google_play} alt="Google Play" /></Link></li>
                                <li><Link to="#"><img src={app_store} alt="App Store" /></Link></li>
                            </ul>
                        </div>
                        {/* <!-- Download App Button End --> */}

                    </div>
                    {/* <!-- Download App Wrapper End --> */}

                </div>
            </div>
            {/* <!-- Download App End --> */}


            <div className="section section-padding-02 mt-n1">
                <div className="container">

                    {/* Section Title Start */}
                    <div className="section-title shape-03 text-center">
                        <h5 className="sub-title">Student Testimonial</h5>
                        <h2 className="main-title">Feedback From <span> Student</span></h2>
                    </div>
                    {/* Section Title End */}

                    {/* Testimonial Wrapper End */}
                    <Feedback/>
                    {/* Testimonial Wrapper End */}

                </div>
            </div>










        </div>
    )
}

export default Home