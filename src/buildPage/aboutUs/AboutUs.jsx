import React from 'react'
import "./AboutUs.scss"
import shape_08 from '../../assets/images/shape/shape-8.png'
import shape_11 from '../../assets/images/shape/shape-11.png'
import shape_23 from '../../assets/images/shape/shape-23.png'
import shape_05 from '../../assets/images/shape/shape-5.png'
import shape_06 from '../../assets/images/shape/shape-6.png'
import shape_24 from '../../assets/images/shape/shape-24.png'
import shape_12 from '../../assets/images/shape/shape-12.png'
import shape_13 from '../../assets/images/shape/shape-13.png'
import shape_14 from '../../assets/images/shape/shape-14.png'
import shape_19 from '../../assets/images/shape/shape-19.png'
import shape_20 from '../../assets/images/shape/shape-20.png'
import about_01 from '../../assets/images/about.jpg';
import author_01 from '../../assets/images/author/author-01.jpg';
import author_02 from '../../assets/images/author/author-02.jpg';
import author_03 from '../../assets/images/author/author-03.jpg';
import author_04 from '../../assets/images/author/author-04.jpg';
import author_05 from '../../assets/images/author/author-05.jpg';
import author_06 from '../../assets/images/author/author-06.jpg';
import author_07 from '../../assets/images/author/author-07.jpg';
import author_08 from '../../assets/images/author/author-08.jpg';
import author_09 from '../../assets/images/author/author-09.jpg';
import author_10 from '../../assets/images/author/author-10.jpg';
// import author_11 from '../../assets/images/author/author-11.jpg';
import logo_icon from '../../assets/images/logo-icon.png';
import google_play from '../../assets/images/google-play.png';
import app_store from '../../assets/images/app-store.png';
// import brand_01 from '../../assets/images/brand/brand-01.png';
const AboutUs = () => {
  return (
    <div>
      
      {/* Page Banner Start */}
        <div className="section page-banner">

            <img className="shape-1 animation-round" src={shape_08} alt="Shape"/>

            <img className="shape-2" src={shape_23} alt="Shape"/>

            <div className="container">
                {/* Page Banner Start */}
                <div className="page-banner-content">
                    <ul className="breadcrumb">
                        <li><a href="#top">Home</a></li>
                        <li className="active">About</li>
                    </ul>
                    <h2 className="title">About <span>Divisor.</span></h2>
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

            <img className="shape-author" src={shape_11} alt="Shape"/>

        </div>
        {/* Page Banner End */}

        {/* About Start */}
        <div className="section">

            <div className="section-padding-02 mt-n10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            {/* About Images Start */}
                            <div className="about-images">
                                <div className="images">
                                    <img src={about_01} alt="About"/>
                                </div>

                                <div className="about-years">
                                    <div className="years-icon">
                                        <img src={logo_icon} alt="About"/>
                                    </div>
                                    <p><strong>28+</strong> Years Experience</p>
                                </div>
                            </div>
                            {/* About Images End */}

                        </div>
                        <div className="col-lg-6">

                            {/* About Content Start */}
                            <div className="about-content">
                                <h5 className="sub-title">Welcome to Divisor.</h5>
                                <h2 className="main-title">You can join with Edule and upgrade your skill for your <span>bright future.</span></h2>
                                <p>Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.</p>
                                <a href="#top" className="btn btn-primary btn-hover-dark">Start A Course</a>
                            </div>
                            {/* About Content End */}

                        </div>
                    </div>
                </div>
            </div>

            <div className="section-padding-02 mt-n6">
                <div className="container">

                    {/* About Items Wrapper Start */}
                    <div className="about-items-wrapper">
                        <div className="row">
                            <div className="col-lg-4">
                                {/* About Item Start */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i className="flaticon-tutor"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">Top Instructors</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
                                </div>
                                {/* About Item End */}
                            </div>
                            <div className="col-lg-4">
                                {/* About Item Start */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i className="flaticon-coding"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">Portable Program</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
                                </div>
                                {/* About Item End */}
                            </div>
                            <div className="col-lg-4">
                                {/* About Item Start */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i className="flaticon-increase"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">Improve Quickly</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived.</p>
                                    <p>Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.</p>
                                </div>
                                {/* About Item End */}
                            </div>
                        </div>
                    </div>
                    {/* About Items Wrapper End */}

                </div>
            </div>

        </div>
        {/* About End */}

        {/* Call to Action Start */}
        <div className="section section-padding-02">
            <div className="container">

                {/* Call to Action Wrapper Start */}
                <div className="call-to-action-wrapper">

                    <img className="cat-shape-01 animation-round" src={shape_12} alt="Shape"/>
                    <img className="cat-shape-02" src={shape_13} alt="Shape"/>
                    <img className="cat-shape-03 animation-round" src={shape_12} alt="Shape"/>

                    <div className="row align-items-center">
                        <div className="col-md-6">

                            {/* Section Title Start */}
                            <div className="section-title shape-02">
                                <h5 className="sub-title">Become A Instructor</h5>
                                <h2 className="main-title">You can join with Edule as <span>a instructor?</span></h2>
                            </div>
                            {/* Section Title End */}

                        </div>
                        <div className="col-md-6">
                            <div className="call-to-action-btn">
                                <a className="btn btn-primary btn-hover-dark" href="contact.html">Drop Information</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Call to Action Wrapper End */}

            </div>
        </div>
        {/* Call to Action End */}

        {/* Team Member's Start */}
        <div className="section section-padding mt-n1">
            <div className="container">

                {/* Section Title Start */}
                <div className="section-title shape-03 text-center">
                    <h5 className="sub-title">Team Member’s</h5>
                    <h2 className="main-title">Edule Skilled <span> Instructor</span></h2>
                </div>
                {/* Section Title End */}

                {/* Team Wrapper Start */}
                <div className="team-wrapper">
                    <div className="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_01} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Margarita James</h4>
                                    <span className="designation">MSC, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_02} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Mitchell Colon</h4>
                                    <span className="designation">BBA, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_03} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Sonya Gordon</h4>
                                    <span className="designation">MBA, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_04} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Archie Neal</h4>
                                    <span className="designation">BBS, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_05} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Randal Ramsey</h4>
                                    <span className="designation">MBBS, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_06} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Rochelle Thomas</h4>
                                    <span className="designation">MSC, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_07} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Della Salazar</h4>
                                    <span className="designation">BBA, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_08} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Ricardo Patrick</h4>
                                    <span className="designation">MBA, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_09} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Kurt Stewart</h4>
                                    <span className="designation">BBS, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                        <div className="col">

                            {/* Single Team Start */}
                            <div className="single-team">
                                <div className="team-thumb">
                                    <img src={author_10} alt="Author"/>
                                </div>
                                <div className="team-content">
                                    <div className="rating">
                                        <span className="count">4.9</span>
                                        <i className="icofont-star"></i>
                                        <span className="text">(rating)</span>
                                    </div>
                                    <h4 className="name">Rodney Terry</h4>
                                    <span className="designation">MBBS, Instructor</span>
                                </div>
                            </div>
                            {/* Single Team End */}

                        </div>
                    </div>
                </div>
                {/* Team Wrapper End */}

            </div>
        </div>
        {/* Team Member's End */}

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
        {/* Download App End */}

        {/* Testimonial End */}
        <div className="section section-padding-02 mt-n1">
            <div className="container">

                {/* Section Title Start */}
                <div className="section-title shape-03 text-center">
                    <h5 className="sub-title">Student Testimonial</h5>
                    <h2 className="main-title">Feedback From <span> Student</span></h2>
                </div>
                {/* Section Title End */}

                {/* Testimonial Wrapper End */}
                <div className="testimonial-wrapper testimonial-active">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* Single Testimonial Start */}
                            <div className="single-testimonial swiper-slide">
                                <div className="testimonial-author">
                                    <div className="author-thumb">
                                        <img src={author_06} alt="Author"/>

                                        <i className="icofont-quote-left"></i>
                                    </div>

                                    <span className="rating-star">
											<span className="rating-bar" style={{width: "80%" }}></span>
                                    </span>
                                </div>
                                <div className="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 className="name">Sara Alexander</h4>
                                    <span className="designation">Product Designer, USA</span>
                                </div>
                            </div>
                            {/* Single Testimonial End */}

                            {/* Single Testimonial Start */}
                            <div className="single-testimonial swiper-slide">
                                <div className="testimonial-author">
                                    <div className="author-thumb">
                                        <img src={author_07} alt="Author"/>

                                        <i className="icofont-quote-left"></i>
                                    </div>

                                    <span className="rating-star">
											<span className="rating-bar" style={{width: "80%" }}></span>
                                    </span>
                                </div>
                                <div className="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 className="name">Melissa Roberts</h4>
                                    <span className="designation">Product Designer, USA</span>
                                </div>
                            </div>
                            {/* Single Testimonial End */}

                            {/* Single Testimonial Start */}
                            <div className="single-testimonial swiper-slide">
                                <div className="testimonial-author">
                                    <div className="author-thumb">
                                        <img src={author_03} alt="Author"/>

                                        <i className="icofont-quote-left"></i>
                                    </div>

                                    <span className="rating-star">
											<span className="rating-bar" style={{width: "80%" }}></span>
                                    </span>
                                </div>
                                <div className="testimonial-content">
                                    <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                                    <h4 className="name">Sara Alexander</h4>
                                    <span className="designation">Product Designer, USA</span>
                                </div>
                            </div>
                            {/* Single Testimonial End */}
                        </div>

                        {/* Add Pagination */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* Testimonial Wrapper End */}

            </div>
        </div>
        {/* Testimonial End */}

        {/* Brand Logo Start */}
        <div className="section section-padding">
            <div className="container">

                {/* Brand Logo Wrapper Start */}
                <div className="brand-logo-wrapper">

                    <img className="shape-1" src={shape_19} alt="Shape"/>

                    <img className="shape-2 animation-round" src={shape_20} alt="Shape"/>

                    {/* Section Title Start */}
                    <div className="section-title shape-03">
                        <h2 className="main-title">Best Supporter of <span> Edule.</span></h2>
                    </div>
                    {/* Section Title End */}

                    {/* Brand Logo Start */}
                    <div className="brand-logo brand-active">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-01.png" alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-02.png" alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-03.png" alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-04.png" alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-05.png" alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src="assets/images/brand/brand-06.png" alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                            </div>
                        </div>
                    </div>
                    {/* Brand Logo End */}

                </div>
                {/* Brand Logo Wrapper End */}

            </div>
        </div>
        {/* Brand Logo End */}
    </div>
  )
}

export default AboutUs