import React from 'react'
import "./Contract.scss" 
import shape_05 from '../../assets/images/shape/shape-5.png'; 
import shape_06 from '../../assets/images/shape/shape-6.png'; 
import shape_8 from '../../assets/images/shape/shape-8.png'; 
import shape_23 from '../../assets/images/shape/shape-23.png'; 
import shape_12 from '../../assets/images/shape/shape-12.png'; 
import shape_14 from '../../assets/images/shape/shape-14.png'; 
import shape_24 from '../../assets/images/shape/shape-24.png'; 
import author_11 from '../../assets/images/author/author-11.jpg'; 
import google_play from '../../assets/images/google-play.png';
import app_store from '../../assets/images/app-store.png';
const Contract = () => {
  return (
    <div className='main-wrapper'>
      {/* Page Banner Start */}
        <div className="section page-banner">

            <img className="shape-1 animation-round" src={shape_8} alt="Shape"/>

            <img className="shape-2" src={shape_23} alt="Shape"/>

            <div className="container">
                {/* Page Banner Start */}
                <div className="page-banner-content">
                    <ul className="breadcrumb">
                        <li><a href="#top">Home</a></li>
                        <li className="active">Contact Us</li>
                    </ul>
                    <h2 className="title">Contact <span>Us</span></h2>
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

        {/* Contact Map Start */}
        {/* <div className="section section-padding-02">
            <div className="container">

                <div className="contact-map-wrapper">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                

            </div>
        </div> */}
        {/* Contact Map End */}

        {/* Contact Start */}
        <div className="section section-padding">
            <div className="container">

                {/* Contact Wrapper Start */}
                <div className="contact-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">

                            {/* Contact Info Start */}
                            <div className="contact-info">

                                <img className="shape animation-round" src={shape_12} alt="Shape"/>

                                {/* Single Contact Info Start */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Phone No.</h6>
                                        <p><a href="tel:88193326867">(88) 193 326 867</a></p>
                                    </div>
                                </div>
                                {/* Single Contact Info End */}
                                {/* Single Contact Info Start */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Email Address.</h6>
                                        <p><a href="mailto:edule100@gmail.com">edule100@gmail.com</a></p>
                                    </div>
                                </div>
                                {/* Single Contact Info End */}
                                {/* Single Contact Info Start */}
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="flaticon-pin"></i>
                                    </div>
                                    <div className="info-content">
                                        <h6 className="title">Office Address.</h6>
                                        <p>Talga, Alabama, USA</p>
                                    </div>
                                </div>
                                {/* Single Contact Info End */}
                            </div>
                            {/* Contact Info End */}

                        </div>
                        <div className="col-lg-6">

                            {/* Contact Form Start */}
                            <div className="contact-form">
                                <h3 className="title">Get in Touch <span>With Us</span></h3>

                                <div className="form-wrapper">
                                    <form id="contact-form" action="https://htmlmail.hasthemes.com/humayun/edule-contact.php" method="POST">
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="email" name="email" placeholder="Email"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <input type="text" name="subject" placeholder="Subject"/>
                                        </div>
                                        {/* Single Form End */}
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        {/* Single Form End */}
                                        <p className="form-message"></p>
                                        {/* Single Form Start */}
                                        <div className="single-form">
                                            <button className="btn btn-primary btn-hover-dark w-100">Send Message <i className="flaticon-right"></i></button>
                                        </div>
                                        {/* Single Form End */}
                                    </form>
                                </div>
                            </div>
                            {/* Contact Form End */}

                        </div>
                    </div>
                </div>
                {/* Contact Wrapper End */}

            </div>
        </div>
        {/* Contact End */}

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
    </div>
  )
}

export default Contract