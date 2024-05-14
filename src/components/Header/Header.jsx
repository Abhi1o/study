import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo_img from "../../assets/images/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { PiSkypeLogo } from "react-icons/pi";
import { useEffect } from "react";
const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const headerMain = document.querySelector('.header-main');
      if (scroll <= 100) {
        headerMain.classList.remove('sticky');
      } else {
        headerMain.classList.add('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const url = window.location.pathname;
    const activePage = url.substring(url.lastIndexOf('/') + 1);
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach((link) => {
      const linkPage = link.href.substring(link.href.lastIndexOf('/') + 1);
      if (activePage === linkPage) {
        link.closest('li').classList.add('active');
      }
    });
  }, []);

  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const overlay = document.querySelector('.overlay');
    const mobileMenu = document.querySelector('.mobile-menu');

    const menuScript = () => {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
      });

      menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
      });

      overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
      });

      // Other menu script logic here.
    };

    menuScript();

    return () => {
      menuToggle.removeEventListener('click', () => { });
      menuClose.removeEventListener('click', () => { });
      overlay.removeEventListener('click', () => { });
    };
  }, []);
  return (
    <div className="main-wrapper">
       {/* Header Section Start */}
        <div className="header-section">

            {/* Header Top Start */}
            <div className="header-top d-none d-lg-block">
                <div className="container">

                    {/* Header Top Wrapper Start */}
                    <div className="header-top-wrapper">

                        {/* Header Top Left Start */}
                        <div className="header-top-left">
                            <p>All course 28% off for <a href="#">Liberian people’s.</a></p>
                        </div>
                        {/* Header Top Left End */}

                        {/* Header Top Medal Start */}
                        <div className="header-top-medal">
                            <div className="top-info">
                                <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                                <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
                            </div>
                        </div>
                        {/* Header Top Medal End */}

                        {/* Header Top Right Start */}
                        <div className="header-top-right">
                            <ul className="social">
                                <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                                <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#"><i className="flaticon-skype"></i></a></li>
                                <li><Link to="https://www.instagram.com/divisor.in/tagged/?hl=en"><i className="flaticon-instagram"></i></Link></li>
                            </ul>
                        </div>
                        {/* Header Top Right End */}

                    </div>
                    {/* Header Top Wrapper End */}

                </div>
            </div>
            {/* Header Top End */}

            {/* Header Main Start */}
            <div className="header-main">
                <div className="container">

                    {/* Header Main Start */}
                    <div className="header-main-wrapper">

                        {/* Header Logo Start */}
                        <div className="header-logo">
                            <Link to="/"><h2>Divi<span>sor</span></h2></Link>
                        </div>
                        {/* Header Logo End */}

                        {/* Header Menu Start */}
                        <div className="header-menu d-none d-lg-block">
                            <ul className="nav-menu">
                                <li><Link to="/">Home</Link></li>
                                <li>
                                    <Link to='/learning_tracks '>Learning Tracks</Link>
                                    
                                </li>
                                <li>
                                    <Link to='/projects '>Projects</Link>
                                    
                                </li>
                                <li>
                                    <Link to="/about_us">About Us </Link>
                                    
                                </li>
                                {/* <li>
                                    <a href="#">Blog</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-grid.html">Blog</a></li>
                                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Blog Details</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                                <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>

                        </div>
                        {/* Header Menu End */}

                        {/* Header Sing In & Up Start */}
                        <div className="header-sign-in-up d-none d-lg-block">
                            <ul>
                                <li><Link className="sign-in" to="/login">Log In</Link></li>
                                <li><Link className="sign-up" to="/signup">Sign Up</Link></li>
                            </ul>
                        </div>
                        {/* Header Sing In & Up End */}

                        {/* Header Mobile Toggle Start */}
                        <div className="header-toggle d-lg-none">
                            <a className="menu-toggle" href="javascript:void(0)">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        {/* Header Mobile Toggle End */}

                    </div>
                    {/* Header Main End */}

                </div>
            </div>
            {/* Header Main End */}

        </div>
        {/* Header Section End */}

        {/* Mobile Menu Start */}
        <div className="mobile-menu">

            {/* Menu Close Start */}
            <a className="menu-close" href="javascript:void(0)">
                <i className="icofont-close-line"></i>
            </a>
            {/* Menu Close End */}

            {/* Mobile Top Medal Start */}
            <div className="mobile-top">
                <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
            </div>
            {/* Mobile Top Medal End */}

            {/* Mobile Sing In & Up Start */}
            <div className="mobile-sign-in-up">
                <ul>
                    <li><a className="sign-in" href="login.html">Sign In</a></li>
                    <li><a className="sign-up" href="register.html">Sign Up</a></li>
                </ul>
            </div>
            {/* Mobile Sing In & Up End */}

            {/* Mobile Menu Start */}
            <div className="mobile-menu-items">
                <ul className="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a href="#">All Course</a>
                        <ul className="sub-menu">
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="courses-details.html">Courses Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages </a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="404-error.html">404 Error</a></li>
                            <li><a href="after-enroll.html">After Enroll</a></li>
                            <li><a href="courses-admin.html">Instructor Dashboard (Course List)</a></li>
                            <li><a href="overview.html">Instructor Dashboard (Performance)</a></li>
                            <li><a href="students.html">Students</a></li>
                            <li><a href="reviews.html">Reviews</a></li>
                            <li><a href="engagement.html">Course engagement</a></li>
                            <li><a href="traffic-conversion.html">Traffic & conversion</a></li>
                            <li><a href="messages.html">Messages</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid.html">Blog</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog Details</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                    <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

            </div>
            {/* Mobile Menu End */}

            {/* Mobile Menu End */}
            <div className="mobile-social">
                <ul className="social">
                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                    <li><a href="#"><i className="flaticon-skype"></i></a></li>
                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                </ul>
            </div>
            {/* Mobile Menu End */}

        </div>
        {/* Mobile Menu End */}

        {/* Overlay Start */}
        <div className="overlay"></div>
        {/* Overlay End */}
    </div>
  );
};

export default Header;
