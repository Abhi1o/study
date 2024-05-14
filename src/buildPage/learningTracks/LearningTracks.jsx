import React from 'react'
import "./LearningTracks.scss"
import { Link } from 'react-router-dom'
import google_play from "../../assets/images/google-play.png"
import app_store from "../../assets/images/app-store.png"
import shape_08 from "../../assets/images/shape/shape-8.png"
import shape_14 from "../../assets/images/shape/shape-14.png"
import shape_23 from "../../assets/images/shape/shape-23.png"
import shape_24 from "../../assets/images/shape/shape-24.png"
import shape_05 from "../../assets/images/shape/shape-5.png"
import shape_06 from "../../assets/images/shape/shape-6.png"
import author_01 from "../../assets/images/author/author-01.jpg"
import author_02 from "../../assets/images/author/author-02.jpg"
import author_03 from "../../assets/images/author/author-03.jpg"
import author_04 from "../../assets/images/author/author-04.jpg"
import author_05 from "../../assets/images/author/author-05.jpg"
import author_11 from "../../assets/images/author/author-11.jpg"
import courses_01 from "../../assets/images/courses/courses-01.jpg"
import courses_02 from "../../assets/images/courses/courses-02.jpg"
import courses_03 from "../../assets/images/courses/courses-03.jpg"
import courses_04 from "../../assets/images/courses/courses-04.jpg"
import courses_05 from "../../assets/images/courses/courses-05.jpg"
import Whyus from "../../components/Whyus/Whyus"
import ToolsWeUse from '../../components/Tool_we_use/Tools_we_use'
import Mentor from '../../components/Mentor/Mentor'
import PlacementRecord from '../../components/Placement_record/Placement_record'
import Company from '../../components/Company/Company'
import FAQ from '../../components/FAQ/FAQ'
// import CourseTimeline from '../../components/Course_timeline/Course_timeline'
import HowitWork from '../../components/HowItWork/HowitWork'
import Feedback from '../../components/FeedBack/Feedback'
import Success from '../../components/Success/Success'

const LearningTracks = () => {
  return (
    <div className='main-wrapper'>
      <div className="section page-banner">

<img className="shape-1 animation-round" src={shape_08} alt="Shape"/>

<img className="shape-2" src={shape_23} alt="Shape"/>

<div className="container">
    {/* Page Banner Start */}
    <div className="page-banner-content">
        <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li className="active">Courses</li>
        </ul>
        <h2 className="title">Learning <span>Tracks</span></h2>
    </div>
    {/* Page Banner End */}
</div>

{/* Shape Icon Box Start */}
<div className="shape-icon-box">

    <img className="icon-shape-1 animation-left" src={shape_05} alt="Shape"/>

    <div className="box-content">
        <div className="box-wrapper">
            <i className="flaticon-badge"></i>
        </div>
    </div>

    <img className="icon-shape-2" src={shape_06} alt="Shape"/>

</div>
{/* Shape Icon Box End */}

<img className="shape-3" src={shape_24} alt="Shape"/>

<img className="shape-author" src={author_11} alt="Shape"/>

</div>
{/* Page Banner End */}

{/* Courses Start */}
<div className="section section-padding">
<div className="container">

    {/* Courses Category Wrapper Start  */}
    <div className="courses-category-wrapper">
        <div className="courses-search search-2">
            <input type="text" placeholder="Search here"/>
            <button><i className="icofont-search"></i></button>
        </div>

        <ul className="category-menu">
            <li><a className="active" href="#top">All Courses</a></li>
            <li><a href="#top">Collections</a></li>
            <li><a href="#top">Wishlist</a></li>
            <li><a href="#top">Archived</a></li>
        </ul>
    </div>
    {/* Courses Category Wrapper End  */}

    {/* Courses Wrapper Start  */}
    <div className="courses-wrapper-02">
        <div className="row">
            <div className="col-lg-4 col-md-6">
                {/* Single Courses Start */}
                <div className="single-courses">
                    <div className="courses-images">
                        <Link to="/learning"><img src={courses_01} alt="Courses"/></Link>

                        <div className="courses-option dropdown">
                            <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#top"><i className="icofont-share-alt"></i> Share</a></li>
                                <li><a href="#top"><i className="icofont-plus"></i> Create Collection</a></li>
                                <li><a href="#top"><i className="icofont-star"></i> Favorite</a></li>
                                <li><a href="#top"><i className="icofont-archive"></i> Archive</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-content">
                        <div className="courses-author">
                            <div className="author">
                                <div className="author-thumb">
                                    <a href="#top"><img src={author_01} alt="Author"/></a>
                                </div>
                                <div className="author-name">
                                    <a className="name" href="#top">Jason Williams</a>
                                    <a className="name-2" href="#top">Ohula Malsh</a>
                                </div>
                            </div>
                        </div>

                        <h4 className="title"><Link to="/learning">Data Science and Machine Learning with Python - Hands On!</Link></h4>

                        <div className="courses-rating">
                            <p>38% Complete</p>

                            <div className="rating-progress-bar">
                                <div className="rating-line" style={{width: "38%"}}></div>
                            </div>

                            <div className="rating-meta">
                                <span className="rating-star">
              <span className="rating-bar" style={{width: "80%"}}></span>
                                </span>
                                <p>Your rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Courses End */}
            </div>
            <div className="col-lg-4 col-md-6">
                {/* Single Courses Start */}
                <div className="single-courses">
                    <div className="courses-images">
                        <Link to="/learning"><img src={courses_02} alt="Courses"/></Link>

                        <div className="courses-option dropdown">
                            <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#top"><i className="icofont-share-alt"></i> Share</a></li>
                                <li><a href="#top"><i className="icofont-plus"></i> Create Collection</a></li>
                                <li><a href="#top"><i className="icofont-star"></i> Favorite</a></li>
                                <li><a href="#top"><i className="icofont-archive"></i> Archive</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-content">
                        <div className="courses-author">
                            <div className="author">
                                <div className="author-thumb">
                                    <a href="#top"><img src={author_02} alt="Author"/></a>
                                </div>
                                <div className="author-name">
                                    <a className="name" href="#top">Pamela Foster </a>
                                    <a className="name-2" href="#top">Ohula Malsh</a>
                                </div>
                            </div>
                        </div>

                        <h4 className="title"><Link to="/learning">Create Amazing Color Schemes for Your UX Design Projects</Link></h4>

                        <div className="courses-rating">
                            <p>80% Complete</p>

                            <div className="rating-progress-bar">
                                <div className="rating-line" style={{width: "80%"}}></div>
                            </div>

                            <div className="rating-meta">
                                <span className="rating-star">
              <span className="rating-bar" style={{width: "0%"}}></span>
                                </span>
                                <p><a href="#top">Leave a rating</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Courses End */}
            </div>
            <div className="col-lg-4 col-md-6">
                {/* Single Courses Start */}
                <div className="single-courses">
                    <div className="courses-images">
                        <Link to="/learning"><img src={courses_03} alt="Courses"/></Link>

                        <div className="courses-option dropdown">
                            <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#top"><i className="icofont-share-alt"></i> Share</a></li>
                                <li><a href="#top"><i className="icofont-plus"></i> Create Collection</a></li>
                                <li><a href="#top"><i className="icofont-star"></i> Favorite</a></li>
                                <li><a href="#top"><i className="icofont-archive"></i> Archive</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-content">
                        <div className="courses-author">
                            <div className="author">
                                <div className="author-thumb">
                                    <a href="#top"><img src={author_03} alt="Author"/></a>
                                </div>
                                <div className="author-name">
                                    <a className="name" href="#top">Rose Simmons</a>
                                    <a className="name-2" href="#top">Ohula Malsh</a>
                                </div>
                            </div>
                        </div>

                        <h4 className="title"><Link to="/learning">Culture & Leadership: Strategies for a Successful Business</Link></h4>

                        <div className="courses-rating">
                            <p>15% Complete</p>

                            <div className="rating-progress-bar">
                                <div className="rating-line" style={{width: "15%"}}></div>
                            </div>

                            <div className="rating-meta">
                                <span className="rating-star">
              <span className="rating-bar" style={{width: "80%"}}></span>
                                </span>
                                <p>Your rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Courses End */}
            </div>
            <div className="col-lg-4 col-md-6">
                {/* Single Courses Start */}
                <div className="single-courses">
                    <div className="courses-images">
                        <Link to="/learning"><img src={courses_04} alt="Courses"/></Link>

                        <div className="courses-option dropdown">
                            <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#top"><i className="icofont-share-alt"></i> Share</a></li>
                                <li><a href="#top"><i className="icofont-plus"></i> Create Collection</a></li>
                                <li><a href="#top"><i className="icofont-star"></i> Favorite</a></li>
                                <li><a href="#top"><i className="icofont-archive"></i> Archive</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-content">
                        <div className="courses-author">
                            <div className="author">
                                <div className="author-thumb">
                                    <a href="#top"><img src={author_04} alt="Author"/></a>
                                </div>
                                <div className="author-name">
                                    <a className="name" href="#top">Jason Williams</a>
                                    <a className="name-2" href="#top">Ohula Malsh</a>
                                </div>
                            </div>
                        </div>

                        <h4 className="title"><Link to="/learning">Finance Series: Learn to Budget and Calculate your Net Worth.</Link></h4>

                        <div className="courses-rating">
                            <p>45% Complete</p>

                            <div className="rating-progress-bar">
                                <div className="rating-line" style={{width: "45%"}}></div>
                            </div>

                            <div className="rating-meta">
                                <span className="rating-star">
              <span className="rating-bar" style={{width: "80%"}}></span>
                                </span>
                                <p>Your rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Courses End */}
            </div>
            <div className="col-lg-4 col-md-6">
                {/* Single Courses Start */}
                <div className="single-courses">
                    <div className="courses-images">
                        <Link to="/learning"><img src={courses_05} alt="Courses"/></Link>

                        <div className="courses-option dropdown">
                            <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#top"><i className="icofont-share-alt"></i> Share</a></li>
                                <li><a href="#top"><i className="icofont-plus"></i> Create Collection</a></li>
                                <li><a href="#top"><i className="icofont-star"></i> Favorite</a></li>
                                <li><a href="#top"><i className="icofont-archive"></i> Archive</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-content">
                        <div className="courses-author">
                            <div className="author">
                                <div className="author-thumb">
                                    <a href="#top"><img src={author_05} alt="Author"/></a>
                                </div>
                                <div className="author-name">
                                    <a className="name" href="#top">Pamela Foster</a>
                                    <a className="name-2" href="#top">Ohula Malsh</a>
                                </div>
                            </div>
                        </div>

                        <h4 className="title"><Link to="/learning">Build Brand Into Marketing: Tackling the New Marketing Landscape</Link></h4>

                        <div className="courses-rating">
                            <p>38% Complete</p>

                            <div className="rating-progress-bar">
                                <div className="rating-line" style={{width: "38%"}}></div>
                            </div>

                            <div className="rating-meta">
                                <span className="rating-star">
              <span className="rating-bar" style={{width: "80%"}}></span>
                                </span>
                                <p>Your rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Courses End */}
            </div>
        </div>
    </div>
    {/* Courses Wrapper End  */}

</div>
</div>
{/* Courses End */}

<div className="container">

                <Success/>

                <Whyus/>
                <ToolsWeUse/>
                <PlacementRecord/>
                <Company/>
                <Feedback/>
                <HowitWork/>
                <Mentor/>
                

        </div>
        <div className='certificate-container '>
            <div className="container">

            
            <div className="certificate-wrapper">
                <div className="left">
                    <img src="https://assets.nextleap.app/images/pdf_certificate_new.png" alt="bannernot found" className='learn-banner-image'/>
               
                   
                </div>
                <div className="right">
                    <h1>Verifiable Certificate of Accomplishment</h1>
                    <p>Upon completing the Product Designer Fellowship course, you'll receive a verifiable Certificate of Accomplishment that you can link to from your Résumé and LinkedIn profile.</p>
                    
                    <button className='btn btn-primary btn-hover-dark'>Apply & Start for Free </button>

                     </div>



            </div>
        </div>
    </div>
    <FAQ/>

{/* Download App Start */}
<div className="section section-padding download-section">

<div className="app-shape-1"></div>
<div className="app-shape-2"></div>
<div className="app-shape-3"></div>
<div className="app-shape-4"></div>

<div className="container">

    {/* Download App Wrapper Start */}
    <div className="download-app-wrapper mt-n6">

        {/* Section Title Start */}
        <div className="section-title section-title-white">
            <h5 className="sub-title">Ready to start?</h5>
            <h2 className="main-title">Download our mobile app. for easy to start your course.</h2>
        </div>
        {/* Section Title End */}

        <img className="shape-1 animation-right" src={shape_14} alt="Shape"/>

        {/* Download App Button End */}
        <div className="download-app-btn">
            <ul className="app-btn">
                <li><a href="#top"><img src={google_play} alt="Google Play"/></a></li>
                <li><a href="#top"><img src={app_store} alt="App Store"/></a></li>
            </ul>
        </div>
        {/* Download App Button End */}

    </div>
    {/* Download App Wrapper End */}

</div>
</div>
    </div>
  )
}

export default LearningTracks;