import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { SiTata } from "react-icons/si";
import { LuClipboardCheck } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import aditi from "../../assets/images/students/IMG_8706 - Aditi Bhor.jpg"
import jain from "../../assets/images/students/1253 - Jahin Jaya.jpeg"
import ankit from "../../assets/images/students/IMG_20230913_133725 - Ankit Kumar.jpg"
import harsh from "../../assets/images/students/IMG-20240403-WA0039 - Hàrsh Hòney.jpg"
import kush from "../../assets/images/students/photo_6334833108561541464_y - Kushagra sinha.jpg"
import deepshikha from "../../assets/images/students/photo_6334833108561541464_y - Kushagra sinha.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Success.scss";

// import required modules
import {
  Autoplay,
  // Pagination,
  Navigation,
  
} from "swiper/modules";

const Success = () => {
  return (
    <>
      <div className="">
        <h1 className="main-title">Success Stories</h1>
        <div className="success-wrapper">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: false,
            //   dynamicBullets: false,
            // }}
            navigation={false}
            modules={[Autoplay, 
              // Pagination, 
              Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="success-card">
                <img src={kush} alt="not found" className="success-profile-image"/>
                <p>Kushagra sinha </p>
                <SiTata size="24" className="company-logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="success-card">
                <img src={deepshikha} alt="not found" className="success-profile-image"/>
                <p>Deepshikha Singh</p>
                <LuClipboardCheck size="24" className="company-logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="success-card">
                <img src={ankit} alt="not found" className="success-profile-image"/>
                <p>Ankit Kumar</p>
                <LuClipboardEdit size="24" className="company-logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="success-card">
                <img src={jain} alt="not found" className="success-profile-image"/>
                <p> 
 	
   Jahin Jaya </p>
                <LuClipboardEdit size="24" className="company-logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="success-card">
                <img src={harsh} alt="not found" className="success-profile-image"/>
                <p> 
 	
   Harsh Kumar </p>
                <LuClipboardEdit size="24" className="company-logo" />
              </div>
            </SwiperSlide>
           
           
            <SwiperSlide>
            <div className="success-card">
                <img src={aditi} alt=" not found" className="success-profile-image"/>
                <p> 
 	
    
 	
 
 	
                Aditi Bhor  </p>
                <LuClipboardEdit size="24" className="company-logo" />
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Success;
