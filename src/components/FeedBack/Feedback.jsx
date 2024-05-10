import React, { useRef, useState } from "react";
    // Import Swiper React components
    import { Swiper, SwiperSlide } from "swiper/react";
    
    import profile_img from "../../assets/images/author/Ellipse 14.png";
    import { SiTata } from "react-icons/si";
    import { LuClipboardCheck } from "react-icons/lu";
    import { LuClipboardEdit } from "react-icons/lu";
    
    
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import "./Feedback.scss";
    
    // import required modules
    import {
      Autoplay,
      Pagination,
      Navigation,
      Thumbs,
      FreeMode,
    } from "swiper/modules";
const Feedback = () => {
  return (

    
        <>
          <div className="feedback-contain">
                    <div className="feedback-container">
                        <div className="feedback-card">
                            <div className="feedback-card-header">
                                <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="image not found" className="feedback-profile-image" />
                                <div className="feedback-name">
                                    <h5 className="feedback-author-name">Prince Varma</h5>
                                    <span className="feedback-author-company">@itsvarma</span>
                                </div>

                            </div>
                            <img src="https://metaschool.so/_next/static/media/stars.7de57f34.svg" alt="star image not found" className="feedback-star" />
                            <div className="feedback-context">
                                <p className="feedback-text">
                                I found this course to be incredibly informative and well-organized. The material was presented in a clear and engaging manner, making it easy to stay focused and learn. Highly recommended!
                                </p>

                            </div>
                            <div className="feedback-placed-company">
                                <span>Placed at</span>
                                <img src="https://assets.nextleap.app/images/ola_pdf_company.png" alt="company image not found" className="feedback-placed-company-img" />
                            </div>
                        </div>
                        <div className="feedback-card">
                            <div className="feedback-card-header">
                                <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="image not found" className="feedback-profile-image" />
                                <div className="feedback-name">
                                    <h5 className="feedback-author-name">Prince Varma</h5>
                                    <span className="feedback-author-company">@itsvarma</span>
                                </div>

                            </div>
                            <img src="https://metaschool.so/_next/static/media/stars.7de57f34.svg" alt="star image not found" className="feedback-star" />
                            <div className="feedback-context">
                                <p className="feedback-text">
                                I found this course to be incredibly informative and well-organized. The material was presented in a clear and engaging manner, making it easy to stay focused and learn. Highly recommended!
                                </p>

                            </div>
                            <div className="feedback-placed-company">
                                <span>Placed at</span>
                                <img src="https://assets.nextleap.app/images/ola_pdf_company.png" alt="company image not found" className="feedback-placed-company-img" />
                            </div>
                        </div>
                        <div className="feedback-card">
                            <div className="feedback-card-header">
                                <img src="https://metaschool.so/_next/static/media/user1.9704bef3.webp" alt="image not found" className="feedback-profile-image" />
                                <div className="feedback-name">
                                    <h5 className="feedback-author-name">Prince Varma</h5>
                                    <span className="feedback-author-company">@itsvarma</span>
                                </div>

                            </div>
                            <img src="https://metaschool.so/_next/static/media/stars.7de57f34.svg" alt="star image not found" className="feedback-star" />
                            <div className="feedback-context">
                                <p className="feedback-text">
                                I found this course to be incredibly informative and well-organized. The material was presented in a clear and engaging manner, making it easy to stay focused and learn. Highly recommended!
                                </p>

                            </div>
                            <div className="feedback-placed-company">
                                <span>Placed at</span>
                                <img src="https://assets.nextleap.app/images/ola_pdf_company.png" alt="company image not found" className="feedback-placed-company-img" />
                            </div>
                        </div>


                    </div>

                    </div>
                
        </>
      
  )
}

export default Feedback