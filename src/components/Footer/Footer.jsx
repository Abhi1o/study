import React from "react";
import { Link } from "react-router-dom";
// import logo_img from "../../assets/images/logo.png"
import shape_22 from "../../assets/images/shape/shape-22.png"
// import shape_21 from "../../assets/images/shape/shape-21.png"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="main-wrapper">
       {/* Footer Start  */}
        <div className="section footer-section">

            {/* Footer Widget Section Start */}
            <div className="footer-widget-section">

                <img className="shape-1 animation-down" src={shape_22} alt="Shape"/>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">

                            {/* Footer Widget Start */}
                            <div className="footer-widget">
                                <div className="widget-logo">
                                    <Link to="/" ><h1>Divisor</h1></Link>
                                </div>

                                <div className="widget-address">
                                    <h4 className="footer-widget-title">Caribbean Ct</h4>
                                    <p>Haymarket, Virginia (VA).</p>
                                </div>

                                <ul className="widget-info">
                                    <li>
                                        <p> <i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
                                    </li>
                                    <li>
                                        <p> <i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
                                    </li>
                                </ul>

                                <ul className="widget-social">
                                    <li><a href="#top"><i className="flaticon-facebook"></i></a></li>
                                    <li><a href="#top"><i className="flaticon-twitter"></i></a></li>
                                    <li><a href="#top"><i className="flaticon-skype"></i></a></li>
                                    <li><a href="#top"><i className="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/* Footer Widget End */}

                        </div>
                        <div className="col-lg-6 order-md-3 order-lg-2">

                            {/* Footer Widget Link Start */}
                            <div className="footer-widget-link">

                                {/* Footer Widget Start */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget-title">Category</h4>

                                    <ul className="widget-link">
                                        <li><a href="#top">Creative Writing</a></li>
                                        <li><a href="#top">Film & Video</a></li>
                                        <li><a href="#top">Graphic Design</a></li>
                                        <li><a href="#top">UI/UX Design</a></li>
                                        <li><a href="#top">Business Analytics</a></li>
                                        <li><a href="#top">Marketing</a></li>
                                    </ul>

                                </div>
                                {/* Footer Widget End */}

                                {/* Footer Widget Start */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget-title">Quick Links</h4>

                                    <ul className="widget-link">
                                        <li><a href="#top">Privacy Policy</a></li>
                                        <li><a href="#top">Discussion</a></li>
                                        <li><a href="#top">Terms & Conditions</a></li>
                                        <li><a href="#top">Customer Support</a></li>
                                        <li><a href="#top">Course FAQ’s</a></li>
                                    </ul>

                                </div>
                                {/* Footer Widget End */}

                            </div>
                            {/* Footer Widget Link End */}

                        </div>
                        <div className="col-lg-3 col-md-6 order-md-2 order-lg-3">

                            {/* Footer Widget Start */}
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">Subscribe</h4>

                                <div className="widget-subscribe">
                                    <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>

                                    <div className="widget-form">
                                        <form action="#top">
                                            <input type="text" placeholder="Email here"/>
                                            <button className="btn btn-primary btn-hover-dark">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Footer Widget End */}

                        </div>
                    </div>
                </div>

                <img className="shape-2 animation-left" src={shape_22} alt="Shape"/>

            </div>
            {/* Footer Widget Section End */}

            {/* Footer Copyright Start */}
            <div className="footer-copyright">
                <div className="container">

                    {/* Footer Copyright Start */}
                    <div className="copyright-wrapper">
                        <div className="copyright-link">
                            <a href="#top">Terms of Service</a>
                            <a href="#top">Privacy Policy</a>
                            <a href="#top">Sitemap</a>
                            <a href="#top">Security</a>
                        </div>
                        <div className="copyright-text">
                            <p>&copy; 2024 <span> Divisor </span> Made by <i className="icofont-heart-alt"></i> <a href="#top">Divisor.in</a></p>
                        </div>
                    </div>
                    {/* Footer Copyright End */}

                </div>
            </div>
            {/* Footer Copyright End */}

        </div>
        {/* Footer End */}

        {/*Back To Start*/}
        <a href="#top" className="back-to-top">
            <i className="icofont-simple-up"></i>
        </a>
        {/*Back To End*/}
        </div>
  )
};

export default Footer;
