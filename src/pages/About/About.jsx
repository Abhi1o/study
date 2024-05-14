import React from "react";
import "./About.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about-container">
        {/* About banner */}
        <div className="about-banner container">
          <div className="about-header">
            {/* title */}
            <div className="about-banner-title">
              <p className="about-title">ABOUT US</p>
            </div>
            {/* header  */}
            <div className="about-banner-header">
              <h1>
                Empowering the next generation of developers to thrive in the
                web3 space
              </h1>
            </div>
            {/* description  */}
            <div className="about-banner-description">
              <p>Let's get more devs to the web3 world!</p>
            </div>
          </div>
          {/* follow button  */}
          <div className="about-follow">
            <div className="about-follow-container">
              <span>Follow us on </span>
              <div className="about-follow-button">
                <button>
                  {" "}
                  <FaXTwitter color="#202020" /> Twitter
                </button>
                <button>
                  {" "}
                  <FaLinkedin color="#378ce0" /> LinkedIn
                </button>
                <button>
                  {" "}
                  <FaInstagram color="#e03791" />
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutzone-image">
        <img
          src="https://metaschool.so/_next/static/media/circle-layers.bfccd527.png"
          alt=""
        />
      </div>

      <div className="about-mission container">
        <div className="about-mission-h">
          <h3 className="mission-h"> Mission</h3>
          <p className="mission-p">
            Our mission is to build the world’s most efficient OS to enable the
            next 10M developers enter Web3 space. In doing so, our vision is
            elevate the state of decentralized internet.
          </p>
        </div>

        <div className="about-mission-cards-container">
          <h5 className="about-mission-cards-h">Our Vision</h5>
          <div className="about-mission-card-wrapper">
            <div className="about-mission-card-o">
              <h3>Knowledge</h3>
              <p>Projects launched on the mainnet by our developers</p>
            </div>
            <div className="about-mission-card-tw">
              <h3> Project</h3>
              <p>Projects launched on the mainnet by our developers</p>
            </div>
            <div className="about-mission-card-tr">
              <h3>Carrier</h3>
              <p>Projects launched on the mainnet by our developers</p>
            </div>
            <div className="about-mission-card-f">
              <h3>Skills</h3>
              <p>Projects launched on the mainnet by our developers</p>
            </div>
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="about-timeline-container">
      <div className="about-timeline-wrapper container">
      <div className="about-timeline-content up">
        <div className="point"></div>
        <hr/>
      <div className="about-timeline-textbox">
        <h3>2009</h3>
        <p>Our journey</p>
      
      </div>
    </div>
    <div className="about-timeline-content down">
      <div className="point"></div>
      <hr/>
      <div className="about-timeline-textbox">
        <h3>2010</h3>
        <p>Our start</p>
      </div>
    </div>
        <div className="about-timeline-content up">
          <div className="point"></div>
          <hr/>
          <div className="about-timeline-textbox">
            <h3>2011</h3>
            <p>In middle</p>
          </div>
        </div>
        <div className="about-timeline-content down">
          <div className="point"></div>
          <hr/>
          <div className="about-timeline-textbox">
            <h3>2012</h3>
            <p>Schools</p>
          </div>
        </div>
        <div className="about-timeline-content up">
            <div className="point"></div>
            <hr/>
          <div className="about-timeline-textbox">
            <h3>2013</h3>
            <p>hackathotons</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
