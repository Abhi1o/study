import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Mentor.scss'; // Import your SCSS file
import { FaLinkedin } from "react-icons/fa";
// Install Swiper components

const Mentor = () => {
  return (

    <>
    <div className="section-padding mt-n1">
      {/* Section Title Start */}
      <div className="section-title shape-03 text-center">
                    <h2 className="main-title">Mentors</h2>
                </div>
                {/* Section Title End */}
    <Swiper
    loop={true}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, 
        // Pagination, 
        ]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="mentor"
    >
      
        
        
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="mentor-card">
            <div className="social-links">
              <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="23px" color='#3f94cc'/>
              </a>
              
            </div>
            <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="mentor" />
            <h3>Mr. Kumar</h3>
            <h5>Co-Founder & Instructor</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia odit illum vel dolore hic </p>
          </div>
        </SwiperSlide>
     
     

    </Swiper>

    </div>
    </>
  );
};

export default Mentor;

// import React from 'react'
// import profile from "../../assets/images/author/Ellipse 14.png"
// import { SiTata } from "react-icons/si";
// import "./Mentor.scss"

// const Mentor = () => {
//   return (
    
//     <div className="mentor-container section-title ">
//                         <h1 className="main-title">Mentor Details</h1>
//                         <div className="mentor-wrapper">
                            
//                                 <div className="mentor-card">
//                                     <img src={profile} alt='not found'/>
//                                     <div className="mentor_name">
//                                         <h5>Vidya</h5>
//                                         <p>Mtech</p>
//                                     </div>
//                                     <SiTata  className='company-logo'/>

//                                 </div>
//                                 <div className="mentor-card">
//                                     <img src={profile} alt='not found'/>
//                                     <div className="mentor_name">
//                                         <h5>Vidya</h5>
//                                         <p>Mtech</p>
//                                     </div>
//                                     <SiTata  className='company-logo'/>

//                                 </div>
//                                 <div className="mentor-card">
//                                     <img src={profile} alt='not found'/>
//                                     <div className="mentor_name">
//                                         <h5>Vidya</h5>
//                                         <p>Mtech</p>
//                                     </div>
//                                     <SiTata  className='company-logo'/>

//                                 </div>
//                                 <div className="mentor-card">
//                                     <img src={profile} alt='not found'/>
//                                     <div className="mentor_name">
//                                         <h5>Vidya</h5>
//                                         <p>Mtech</p>
//                                     </div>
//                                     <SiTata  className='company-logo'/>

//                                 </div>
                           
//                         </div>


//                     </div>
//   )
// }

// export default Mentor   