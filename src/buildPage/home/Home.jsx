import React, {useEffect} from 'react';
import "./Home.scss"
import Whyus from "../../components/Whyus/Whyus.jsx"
import SuccessStories from "../../components/FeedBack/Feedback.jsx"
import StudentPlaced from "../../components/Success/Success.jsx"
import google_play from "../../assets/images/google-play.png"
import app_store from "../../assets/images/app-store.png"
import slider_01 from "../../assets/images/slider/slider-1.png"
import shape_06 from "../../assets/images/shape/shape-6.png"
import shape_07 from "../../assets/images/shape/shape-7.png"
import shape_05 from "../../assets/images/shape/shape-5.png"
// import shape_08 from "../../assets/images/shape/shape-8.png"
import shape_09 from "../../assets/images/shape/shape-9.png"
import shape_10 from "../../assets/images/shape/shape-10.png"
import shape_12 from "../../assets/images/shape/shape-12.png"
import shape_13 from "../../assets/images/shape/shape-13.png"
import shape_14 from "../../assets/images/shape/shape-14.png"
// import shape_15 from "../../assets/images/shape/shape-15.png"
// import shape_16 from "../../assets/images/shape/shape-16.png"
// import shape_17 from "../../assets/images/shape/shape-17.png"
import shape_19 from "../../assets/images/shape/shape-19.png"
import shape_20 from "../../assets/images/shape/shape-20.png"
import brand_01 from "../../assets/images/brand/brand-01.png"
import brand_02 from "../../assets/images/brand/brand-02.png"
import brand_03 from "../../assets/images/brand/brand-03.png"
import brand_04 from "../../assets/images/brand/brand-04.png"
import brand_05 from "../../assets/images/brand/brand-05.png"
import brand_06 from "../../assets/images/brand/brand-06.png"
import blog_01 from "../../assets/images/blog/blog-01.jpg"
import blog_02 from "../../assets/images/blog/blog-02.jpg"
import blog_03 from "../../assets/images/blog/blog-03.jpg"
import courses_01 from "../../assets/images/courses/courses-01.jpg"
import courses_02 from "../../assets/images/courses/courses-02.jpg"
import courses_03 from "../../assets/images/courses/courses-03.jpg"
import courses_04 from "../../assets/images/courses/courses-04.jpg"
import courses_05 from "../../assets/images/courses/courses-05.jpg"
import courses_06 from "../../assets/images/courses/courses-06.jpg"
import author_01 from "../../assets/images/author/author-01.jpg"
import author_02 from "../../assets/images/author/author-02.jpg"
import author_03 from "../../assets/images/author/author-03.jpg"
import author_04 from "../../assets/images/author/author-04.jpg"
import author_05 from "../../assets/images/author/author-05.jpg"
import author_06 from "../../assets/images/author/author-06.jpg"
// import author_07 from "../../assets/images/author/author-07.jpg"
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
// import scholarship_image from "../../assets/images/icon/scholarship-img.png"
// import { FaCaretRight } from "react-icons/fa";
// import Marquee from 'react-fast-marquee'
// import profile_img from "../../assets/images/author/Ellipse 14.png"
// import { SiTata } from "react-icons/si";
// import { LuClipboardEdit } from "react-icons/lu";
import { Link } from 'react-router-dom'

import Company from '../../components/Company/Company'
import CarrierPath from '../../components/CarrierPath/CarrierPath.jsx';
import HowitWork from '../../components/HowItWork/HowitWork.jsx';
const Home = () => {
    

   
        
useEffect(() => {
    const testimonelSwiper = new Swiper('.testimonial-wrapper .swiper-container', {
        slidesPerView: 2,
        spaceBetween:10,
        loop:true,
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 2, spaceBetween: 30 },
        },
        pagination:{
            el:'.testimonial-wrapper .swiper-pagination',
            clickable:true,

        }
        
    });

    const brandSwiper = new Swiper('.brand-logo .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            0: { slidesPerView: 2, spaceBetween: 10 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 20 },
        },
        autoplay: { delay: 8e3 },
    });

    // const courseSwiper = new Swiper('.courses-tabs-menu .swiper-container', {
    //     slidesPerView: 4,
    //     spaceBetween: 20,
    //     loop: true,
    //     breakpoints: {
    //         0: { slidesPerView: 1, spaceBetween: 20 },
    //         576: { slidesPerView: 2 },
    //         768: { slidesPerView: 3 },
    //         992: { slidesPerView: 3, spaceBetween: 10 },
    //         1200: { slidesPerView: 5, spaceBetween: 10 },
    //     },
    //     autoplay: { delay: 8e3 },
    //     navigation:{
    //         nextEl:'.courses-tabs-menu .swiper-button-next',
    //         prevEl:'.courses-tabs-menu .swiper-button-prev',
    //     }
    // });


    return () =>{
        testimonelSwiper.destroy();
        brandSwiper.destroy();
        // courseSwiper.destroy();
    }
})
     
  return (
    <div className="main-wrapper">
      {/* {/*Slider Start */} 
      <div className="section slider-section">

            {/* Slider Shape Start */}
            {/* <div className="slider-shape">
                <img className="shape-1 animation-round" src={shape_08} alt="Shape"/>
            </div> */}
            {/* Slider Shape End */}

            <div className="container">

                {/* Slider Content Start */}
                <div className="slider-content">
                    <h4 className="sub-title">Start your favourite course</h4>
                    <h2 className="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2>
                    <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                    <a className="btn btn-primary btn-hover-dark" href="#top">Start A Course</a>
                </div>
                {/* Slider Content End */}

            </div>

            {/* Slider Courses Box Start */}
            <div className="slider-courses-box">

                <img className="shape-1 animation-left" src={shape_05} alt="Shape"/>

                <div className="box-content">
                    <div className="box-wrapper">
                        <i className="flaticon-open-book"></i>
                        <span className="count">1,235</span>
                        <p>courses</p>
                    </div>
                </div>

                <img className="shape-2" src={shape_06} alt="Shape"/>

            </div>
            {/* Slider Courses Box End */}

            {/* Slider Rating Box Start */}
            <div className="slider-rating-box">

                <div className="box-rating">
                    <div className="box-wrapper">
                        <span className="count">4.8 <i className="flaticon-star"></i></span>
                        <p>Rating (86K)</p>
                    </div>
                </div>

                <img className="shape animation-up" src={shape_07} alt="Shape"/>

            </div>
            {/* Slider Rating Box End */}

            {/* Slider Images Start */}
            <div className="slider-images">
                <div className="images">
                    <img src={slider_01} alt="Slider"/>
                </div>
            </div>
            {/* Slider Images End */}

            {/* Slider Video Start */}
            <div className="slider-video">
                <img className="shape-1" src={shape_09} alt="Shape"/>

                <div className="video-play">
                    <img src={shape_10} alt="Shape"/>
                    <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" className="play video-popup"><i className="flaticon-play"></i></a>
                </div>
            </div>
            {/* Slider Video End */}

        </div>

        {/* slider end  */}
            

        {/* course */}
        <div className="section section-padding-02">
            <div className="container">

         
              

              <StudentPlaced/>
             
                <CarrierPath/>
                     {/* All Courses Top Start */}
                <div className="courses-top">

                  {/* Section Title Start */}
                    <div className="section-title shape-01">
                        <h2 className="main-title">Learning <span>Tracks</span></h2>
                    </div>
                  {/* Section Title End */}

                  {/* Courses Search Start */}
</div>
                  <div className="courses-wrapper">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    {/* Single Courses Start */}
                                    <div className="single-courses">
                                        <div className="courses-images">
                                            <Link to="/learning"><img src={courses_01} alt="Courses"/></Link>
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#top"><img src={author_01} alt="Author"/></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#top">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div className="tag">
                                                    <a href="#top">Science</a>
                                                </div>
                                            </div>

                                            <h4 className="title"><Link to="/learning">Data Science and Machine Learning with Python - Hands On!</Link></h4>
                                            <div className="courses-meta">
                                                <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div className="courses-price-review">
                                                <div className="courses-price">
                                                    <span className="sale-parice">$385.00</span>
                                                    <span className="old-parice">$440.00</span>
                                                </div>
                                                <div className="courses-review">
                                                    <span className="rating-count">4.9</span>
                                                    <span className="rating-star">
															<span className="rating-bar" style={{width: "80%"}}></span>
                                                    </span>
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
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#top"><img src={author_02} alt="Author"/></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#top">Pamela Foster</a>
                                                    </div>
                                                </div>
                                                <div className="tag">
                                                    <a href="#top">Science</a>
                                                </div>
                                            </div>

                                            <h4 className="title"><Link to="/learning">Create Amazing Color Schemes for Your UX Design Projects</Link></h4>
                                            <div className="courses-meta">
                                                <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div className="courses-price-review">
                                                <div className="courses-price">
                                                    <span className="sale-parice">$420.00</span>
                                                </div>
                                                <div className="courses-review">
                                                    <span className="rating-count">4.9</span>
                                                    <span className="rating-star">
															<span className="rating-bar" style={{width: "80%"}}></span>
                                                    </span>
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
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#top"><img src={author_03} alt="Author"/></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#top">Rose Simmons</a>
                                                    </div>
                                                </div>
                                                <div className="tag">
                                                    <a href="#top">Science</a>
                                                </div>
                                            </div>

                                            <h4 className="title"><Link to="/learning">Culture & Leadership: Strategies for a Successful Business</Link></h4>
                                            <div className="courses-meta">
                                                <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div className="courses-price-review">
                                                <div className="courses-price">
                                                    <span className="sale-parice">$295.00</span>
                                                    <span className="old-parice">$340.00</span>
                                                </div>
                                                <div className="courses-review">
                                                    <span className="rating-count">4.9</span>
                                                    <span className="rating-star">
															<span className="rating-bar" style={{width: "80%"}}></span>
                                                    </span>
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
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#top"><img src={author_04} alt="Author"/></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#top">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div className="tag">
                                                    <a href="#top">Finance</a>
                                                </div>
                                            </div>

                                            <h4 className="title"><Link to="/learning">Finance Series: Learn to Budget and Calculate your Net Worth.</Link></h4>
                                            <div className="courses-meta">
                                                <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div className="courses-price-review">
                                                <div className="courses-price">
                                                    <span className="sale-parice">Free</span>
                                                </div>
                                                <div className="courses-review">
                                                    <span className="rating-count">4.9</span>
                                                    <span className="rating-star">
															<span className="rating-bar" style={{width: "80%"}}></span>
                                                    </span>
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
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#top"><img src={author_05} alt="Author"/></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#top">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div className="tag">
                                                    <a href="#top">Marketing</a>
                                                </div>
                                            </div>

                                            <h4 className="title"><Link to="/learning">Build Brand Into Marketing: Tackling the New Marketing Landscape</Link></h4>
                                            <div className="courses-meta">
                                                <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div className="courses-price-review">
                                                <div className="courses-price">
                                                    <span className="sale-parice">$136.00</span>
                                                </div>
                                                <div className="courses-review">
                                                    <span className="rating-count">4.9</span>
                                                    <span className="rating-star">
															<span className="rating-bar" style={{width: "80%"}}></span>
                                                    </span>
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
                                            <Link to="/learning"><img src={courses_06} alt="Courses"/></Link>
                                        </div>
                                        <div className="courses-content">
                                            <div className="courses-author">
                                                <div className="author">
                                                    <div className="author-thumb">
                                                        <a href="#top"><img src={author_06} alt="Author"/></a>
                                                    </div>
                                                    <div className="author-name">
                                                        <a className="name" href="#top">Jason Williams</a>
                                                    </div>
                                                </div>
                                                <div className="tag">
                                                    <a href="#top">Design</a>
                                                </div>
                                            </div>

                                            <h4 className="title"><Link to="/learning">Graphic Design: Illustrating Badges and Icons with Geometric Shapes</Link></h4>
                                            <div className="courses-meta">
                                                <span> <i className="icofont-clock-time"></i> 08 hr 15 mins</span>
                                                <span> <i className="icofont-read-book"></i> 29 Lectures </span>
                                            </div>
                                            <div className="courses-price-review">
                                                <div className="courses-price">
                                                    <span className="sale-parice">$237.00</span>
                                                </div>
                                                <div className="courses-review">
                                                    <span className="rating-count">4.9</span>
                                                    <span className="rating-star">
															<span className="rating-bar" style={{width: "80%"}}></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Courses End */}
                                </div>
                            </div>
                        </div>
                    

                    {/* All Courses Top End */}

                  {/* Courses Search End */}

                
                {/* All Courses Tabs Menu Start */}
              {/* All Courses tab content End */}
                

              {/* All Courses BUtton Start */}
                {/* <div className="courses-btn text-center">
                    <a href="/learning_track" className="btn btn-secondary btn-hover-primary">Other Course</a>
                </div> */}
              {/* All Courses BUtton End */}

              <Whyus/>

              <Company/>


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


            </div>
        </div>

        {/* Call to Action start */}
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
                                <h5 className="sub-title">Become A Member</h5>
                                <h2 className="main-title">You can join Divisor as<span>?</span></h2>
                            </div>
                            {/* Section Title End */}

                        </div>
                        <div className="col-md-6">
                            <div className="call-to-action-btn">
                                <a className="btn btn-primary btn-hover-dark" href="contact.html">Join now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Call to Action Wrapper End */}

            </div>
        </div>
        {/* Call to Action End */}

        {/* How It Work End */}
        <HowitWork/>
        {/* How It Work End */}

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
                    {/* <h5 className="sub-title">Student Testimonial</h5> */}
                    <h2 className="main-title">Success <span> Stories</span></h2>
                </div>
                {/* Section Title End */}

                {/* Testimonial Wrapper End */}
                <div className="testimonial-wrapper testimonial-active">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* Single Testimonial Start */}
                            <SuccessStories/>
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
        <div className="section section-padding-02">
            <div className="container">

                {/* Brand Logo Wrapper Start */}
                <div className="brand-logo-wrapper">

                    <img className="shape-1" src={shape_19} alt="Shape"/>

                    <img className="shape-2 animation-round" src={shape_20} alt="Shape"/>

                    {/* Section Title Start */}
                    <div className="section-title shape-03">
                        <h2 className="main-title">Best Supporter of <span> Divisor.</span></h2>
                    </div>
                    {/* Section Title End */}

                    {/* Brand Logo Start */}
                    <div className="brand-logo brand-active">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src={brand_01} alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src={brand_02} alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src={brand_03} alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src={brand_04} alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src={brand_05} alt="Brand"/>
                                </div>
                                {/* Single Brand End */}

                                {/* Single Brand Start */}
                                <div className="single-brand swiper-slide">
                                    <img src={brand_06} alt="Brand"/>
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

        {/* Blog Start */}
        <div className="section section-padding mt-n1">
            <div className="container">

                {/* Section Title Start */}
                <div className="section-title shape-03 text-center">
                    <h5 className="sub-title">Latest News</h5>
                    <h2 className="main-title">Educational Tips & <span> Tricks</span></h2>
                </div>
                {/* Section Title End */}

                {/* Blog Wrapper Start */}
                <div className="blog-wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">

                            {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <a href="/project_detail"><img src={blog_01} alt="Blog"/></a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                                <a href="#top"><img src={author_01} alt="Author"/></a>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Jason Williams</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Science</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><a href="/project_detail">Data Science and Machine project_detail with Python - Hands On!</a></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="/project_detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                            {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                            {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <a href="/project_detail"><img src={blog_02} alt="Blog"/></a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                                <a href="#top"><img src={author_02} alt="Author"/></a>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Pamela Foster</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">UX Design</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><a href="/project_detail">Create Amazing Color Schemes for Your UX Design Projects</a></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="/project_detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                            {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                            {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <a href="/project_detail"><img src={blog_03} alt="Blog"/></a>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                                <a href="#top"><img src={author_03} alt="Author"/></a>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Patricia Collins</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Business</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><a href="/project_detail">Culture & Leadership: Strategies for a Successful Business</a></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="/project_detail" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                            {/* Single Blog End */}

                        </div>
                    </div>
                </div>
                {/* Blog Wrapper End */}

            </div>
        </div>

      
      </div>
    
  
  )
};

export default Home
