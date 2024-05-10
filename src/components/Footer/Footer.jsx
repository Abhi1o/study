import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../../assets/images/logo.png"
import shape_22 from "../../assets/images/shape/shape-22.png"
// import shape_21 from "../../assets/images/shape/shape-21.png"
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
      <div className="section footer-section">
        {/* Footer Widget Section Start */}
        <div className="footer-widget-section">
          

          <div className="container">
            <div className="footer-container">
              <div className="footer-left-content
              ">
                {/* Footer Widget Start */}
                <div className="footer-widget">
                  <div className="widget-logo">
                  <Link to="/">
                      <img src={logo_img} alt="Logo" />
                      </Link>
                  </div>

                  <div className="widget-address">
                    <h4 className="footer-widget-title">Bangalore</h4>
                    <p>Bangalore, India (IN).</p>
                  </div>

                  <ul className="widget-info">
                    <li>
                      <p>
                        {" "}
                        <i className="flaticon-email"></i>{" "}
                        <Link to="mailto:address@gmail.com">address@gmail.com</Link>{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <i className="flaticon-phone-call"></i>{" "}
                        <Link to="tel:9702621413">(970) 262-1413</Link>{" "}
                      </p>
                    </li>
                  </ul>

                  <ul className="widget-social">
                    <li>
                      <Link to="#">
                        <i className="flaticon-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget End */}
              </div>
              <div className="footer-middle-content">
                {/* Footer Widget Link Start */}
                <div className="footer-widget-link">
                  {/* Footer Widget Start */}
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Category</h4>

                    <ul className="widget-link">
                    <li><Link to="/">Creative Writing</Link></li>
                                        <li><Link to="/">Film & Video</Link></li>
                                        <li><Link to="/">Graphic Design</Link></li>
                                        <li><Link to="/">UI/UX Design</Link></li>
                                        <li><Link to="/">Business Analytics</Link></li>
                                        <li><Link to="/">Marketing</Link></li>
                    </ul>
                  </div>
                  {/* Footer Widget End */}

                  {/* Footer Widget Start */}
                  <div className="footer-widget">
                    <h4 className="footer-widget-title">Quick Links</h4>

                    <ul className="widget-link">
                    <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Discussion</Link></li>
                                        <li><Link to="/">Terms & Conditions</Link></li>
                                        <li><Link to="/">Customer Support</Link></li>
                                        <li><Link to="/">Course FAQ’s</Link></li>
                    </ul>
                  </div>
                  {/* Footer Widget End */}
                </div>
                {/* Footer Widget Link End */}
              </div>
              <div className="footer-right-content">
                {/* Footer Widget Start */}
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Subscribe</h4>

                  <div className="widget-subscribe">
                    <p>
                      Lorem Ipsum has been them an industry printer took a
                      galley make book.
                    </p>

                    <div >
                      <form action="#" className="widget-form">
                        <input type="text" placeholder="Email here" />
                        <button className="btn btn-primary btn-hover-dark">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Footer Widget End */}
              </div>
            </div>
          </div>

          <img
            className="shape-2 animation-left"
            src={shape_22}
            alt="Shape"
          />
        </div>
        {/* Footer Widget Section End */}

        {/* Footer Copyright Start */}
        <div className="footer-copyright">
          <div className="container">
            {/* Footer Copyright Start */}
            <div className="copyright-wrapper">
              
              <div className="copyright-text">
                <p>
                  &copy; 2024 <span> Divisor </span> Made with{" "}
                  <i className="icofont-heart-alt"></i> by{" "}
                  <Link to="#">Divisor.com</Link>
                </p>
              </div>
            </div>
            {/* Footer Copyright End */}
          </div>
        </div>
        {/* Footer Copyright End */}
      </div>
    </div>
  );
};

export default Footer;
