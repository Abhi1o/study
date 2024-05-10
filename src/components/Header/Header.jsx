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
    <>
      <div className="header-section">
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="header-top-wrapper">
              <div className="header-top-left">
                <p>
                  All course 28% off for <Link to="#">Liberian people’s.</Link>
                </p>
              </div>
              <div className="header-top-medal">
                <div className="top-info">
                  <p>
                    <IoCallOutline className="flaticon-phone-call" />
                    <Link to="tel:9702621413">(970) 262-1413</Link>
                  </p>
                  <p>
                    <TfiEmail className="flaticon-email" />
                    <Link to="mailto:address@gmail.com">address@gmail.com</Link>
                  </p>
                </div>
              </div>
              <div className="header-top-right">
                <ul className="social">
                  <li>
                    <Link to="#">
                      <LuFacebook className="flaticon-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <RiTwitterXLine className="flaticon-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <PiSkypeLogo className="flaticon-skype" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram className="flaticon-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="header-main-wrapper">
              <div className="header-logo">
                <Link to="/">
                  <img src={logo_img} alt="Logo" />
                </Link>
              </div>
              <div className="header-menu d-none d-lg-block">
                <ul className="nav-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/learning_track">Learning Track</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="contact.html">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="header-sign-in-up d-none d-lg-block">
                <ul>
                  <li>
                    <Link className="sign-in" to="/login">
                      Sign In
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="sign-up" to="/signup">
                      Sign Up
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="header-toggle d-lg-none">
                <Link className="menu-toggle" to="#">
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        {/* Menu Close Start */}
        <Link className="menu-close" to="#">
          <i className="icofont-close-line"></i>
        </Link>
        {/* Menu Close End */}

        {/* Mobile Top Medal Start */}
        <div className="mobile-top">
          <p>
            <i className="flaticon-phone-call"></i>{" "}
            <Link to="tel:9702621413">(970) 262-1413</Link>
          </p>
          <p>
            <i className="flaticon-email"></i>{" "}
            <Link to="mailto:address@gmail.com">address@gmail.com</Link>
          </p>
        </div>
        {/* Mobile Top Medal End */}

        {/* Mobile Sing In & Up Start */}
        <div className="mobile-sign-in-up">
          <ul>
            <li>
              <Link className="sign-in" to="/login">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="sign-up" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Sing In & Up End */}

        {/* Mobile Menu Start */}
        <div className="mobile-menu-items">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Learning Track</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/">Courses</Link>
                </li>
                <li>
                  <Link to="/">Courses Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Pages </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/error">404 Error</Link>
                </li>
                <li>
                  <Link to="/">After Enroll</Link>
                </li>
                <li>
                  <Link to="/">Instructor Dashboard (Course List)</Link>
                </li>
                <li>
                  <Link to="/">Instructor Dashboard (Performance)</Link>
                </li>
                <li>
                  <Link to="/">Students</Link>
                </li>
                <li>
                  <Link to="/">Reviews</Link>
                </li>
                <li>
                  <Link to="/">Course engagement</Link>
                </li>
                <li>
                  <Link to="/">Traffic & conversion</Link>
                </li>
                <li>
                  <Link to="/">Messages</Link>
                </li>
              </ul>
            </li>
            <li>

              <Link to="#">Blog</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="blog-grid.html">Blog</Link>
                    </li>
                    <li>
                      <Link to="blog-left-sidebar.html">
                        Blog Left Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-right-sidebar.html">
                        Blog Right Sidebar
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Blog Details</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="blog-details-left-sidebar.html">
                        Blog Details Left Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-details-right-sidebar.html">
                        Blog Details Right Sidebar
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact.html">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu End */}

        {/* Mobile Menu End */}
        <div className="mobile-social">
          <ul className="social">
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
        {/* Mobile Menu End */}
      </div>
      {/* Mobile Menu End */}

      {/* Overlay Start */}
      <div className="overlay"></div>
      {/* Overlay End */}
    </>
  );
};

export default Header;
