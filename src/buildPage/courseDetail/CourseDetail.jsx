import React, {useEffect} from 'react'
import './CourseDetail.scss'
import author_06 from '../../assets/images/author/author-06.jpg'
import author_01 from '../../assets/images/author/author-01.jpg'
import author_02 from '../../assets/images/author/author-02.jpg'
import author_03 from '../../assets/images/author/author-03.jpg'
import author_04 from '../../assets/images/author/author-04.jpg'
import author_11 from '../../assets/images/author/author-11.jpg'
import author_07 from '../../assets/images/author/author-07.jpg'
import shape_08 from '../../assets/images/shape/shape-8.png'
import shape_05 from '../../assets/images/shape/shape-5.png'
import shape_06 from '../../assets/images/shape/shape-6.png'
import shape_23 from '../../assets/images/shape/shape-23.png'
import shape_24 from '../../assets/images/shape/shape-24.png'
import courses_details from '../../assets/images/courses/courses-details.jpg'
import circle_shape from '../../assets/images/courses/circle-shape.png'
const CourseDetail = () => {

useEffect(() => {
    // Initialize any necessary scripts or libraries here
    // For example, if you're using Bootstrap's tab functionality:
    const tabLinks = document.querySelectorAll('.details-tab-menu button');
    tabLinks.forEach((tabLink) => {
      tabLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetTab = document.querySelector(event.target.getAttribute('data-bs-target'));
        if (targetTab) {
          const activeTab = document.querySelector('.tab-pane.fade.show.active');
          if (activeTab) {
            activeTab.classList.remove('show', 'active');
          }
          targetTab.classList.add('show', 'active');
        }
      });
    });
  }, []);


  return (
    <div>
   {/* Page Banner Start */}
    <div className="section page-banner">

        <img className="shape-1 animation-round" src={shape_08 } alt="Shape"/>

        <img className="shape-2" src={shape_23} alt="Shape"/>

        <div className="container">
           {/* Page Banner Start */}
            <div className="page-banner-content">
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">Courses Details</li>
                </ul>
                <h2 className="title">Courses <span> Details</span></h2>
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

   {/* Courses Start */}
    <div className="section section-padding mt-n10">
        <div className="container">
            <div className="row gx-10">
                <div className="col-lg-8">

                   {/* Courses Details Start */}
                    <div className="courses-details">

                        <div className="courses-details-images">
                            <img src={courses_details} alt="Courses Details"/>
                            <span className="tags">Finance</span>

                            <div className="courses-play">
                                <img src={circle_shape} alt="Play"/>
                                <a className="play video-popup" href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"><i className="flaticon-play"></i></a>
                            </div>
                        </div>

                        <h2 className="title">Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.</h2>

                        <div className="courses-details-admin">
                            <div className="admin-author">
                                <div className="author-thumb">
                                    <img src={author_01} alt="Author"/>
                                </div>
                                <div className="author-content">
                                    <a className="name" href="#">Pamela Foster</a>
                                    <span className="Enroll">286 Enrolled Students</span>
                                </div>
                            </div>
                            <div className="admin-rating">
                                <span className="rating-count">4.9</span>
                                <span className="rating-star">
                                        <span className="rating-bar" style={{width: "80%"}}></span>
                                </span>
                                <span className="rating-text">(5,764 Rating)</span>
                            </div>
                        </div>

                       {/* Courses Details Tab Start */}
                        <div className="courses-details-tab">

                           {/* Details Tab Menu Start */}
                            <div className="details-tab-menu">
                                <ul className="nav justify-content-center">
                                    <li><button className="active" data-bs-toggle="tab" data-bs-target="#description">Description</button></li>
                                    <li><button data-bs-toggle="tab" data-bs-target="#instructors">Instructors</button></li>
                                    <li><button data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button></li>
                                </ul>
                            </div>
                           {/* Details Tab Menu End */}

                           {/* Details Tab Content Start */}
                            <div className="details-tab-content">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="description">

                                       {/* Tab Description Start */}
                                        <div className="tab-description">
                                            <div className="description-wrapper">
                                                <h3 className="tab-title">Description:</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem Ipsum passages desktop publishing software.</p>
                                            </div>
                                            <div className="description-wrapper">
                                                <h3 className="tab-title">Curriculum:</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem Ipsum passages desktop publishing software.</p>
                                            </div>
                                            <div className="description-wrapper">
                                                <h3 className="tab-title">Certification:</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularsed in the 1960 with release containing Lorem Ipsum passages desktop publishing software.</p>
                                            </div>
                                        </div>
                                       {/* Tab Description End */}

                                    </div>
                                    <div className="tab-pane fade" id="instructors">

                                       {/* Tab Instructors Start */}
                                        <div className="tab-instructors">
                                            <h3 className="tab-title">Course Instructor:</h3>

                                            <div className="row">
                                                <div className="col-md-3 col-6">
                                                   {/* Single Team Start */}
                                                    <div className="single-team">
                                                        <div className="team-thumb">
                                                            <img src={author_01} alt="Author"/>
                                                        </div>
                                                        <div className="team-content">
                                                            <div className="rating">
                                                                <span className="count">4.9</span>
                                                                <i className="icofont-star"></i>
                                                                <span className="text">(rating)</span>
                                                            </div>
                                                            <h4 className="name">Margarita James</h4>
                                                            <span className="designation">MSC, Instructor</span>
                                                        </div>
                                                    </div>
                                                   {/* Single Team End */}
                                                </div>
                                                <div className="col-md-3 col-6">
                                                   {/* Single Team Start */}
                                                    <div className="single-team">
                                                        <div className="team-thumb">
                                                            <img src={author_02} alt="Author"/>
                                                        </div>
                                                        <div className="team-content">
                                                            <div className="rating">
                                                                <span className="count">4.9</span>
                                                                <i className="icofont-star"></i>
                                                                <span className="text">(rating)</span>
                                                            </div>
                                                            <h4 className="name">Mitchell Colon</h4>
                                                            <span className="designation">BBA, Instructor</span>
                                                        </div>
                                                    </div>
                                                   {/* Single Team End */}
                                                </div>
                                                <div className="col-md-3 col-6">
                                                   {/* Single Team Start */}
                                                    <div className="single-team">
                                                        <div className="team-thumb">
                                                            <img src={author_03} alt="Author"/>
                                                        </div>
                                                        <div className="team-content">
                                                            <div className="rating">
                                                                <span className="count">4.9</span>
                                                                <i className="icofont-star"></i>
                                                                <span className="text">(rating)</span>
                                                            </div>
                                                            <h4 className="name">Sonya Gordon</h4>
                                                            <span className="designation">MBA, Instructor</span>
                                                        </div>
                                                    </div>
                                                   {/* Single Team End */}
                                                </div>
                                                <div className="col-md-3 col-6">
                                                   {/* Single Team Start */}
                                                    <div className="single-team">
                                                        <div className="team-thumb">
                                                            <img src={author_04} alt="Author"/>
                                                        </div>
                                                        <div className="team-content">
                                                            <div className="rating">
                                                                <span className="count">4.9</span>
                                                                <i className="icofont-star"></i>
                                                                <span className="text">(rating)</span>
                                                            </div>
                                                            <h4 className="name">Archie Neal</h4>
                                                            <span className="designation">BBS, Instructor</span>
                                                        </div>
                                                    </div>
                                                   {/* Single Team End */}
                                                </div>
                                            </div>

                                            <div className="row gx-10">
                                                <div className="col-lg-6">
                                                    <div className="tab-rating-content">
                                                        <h3 className="tab-title">Rating:</h3>
                                                        <p>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the i dustry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
                                                        <p>Lorem Ipsum is simply dummy text of printing and typesetting industry text ever since</p>
                                                        <p>Lorem Ipsum is simply dummy text of printing and dustry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tab-rating-box">
                                                        <span className="count">4.8 <i className="icofont-star"></i></span>
                                                        <p>Rating (86K+)</p>

                                                        <div className="rating-box-wrapper">
                                                            <div className="single-rating">
                                                                <span className="rating-star">
                                                                        <span className="rating-bar" style={{width: "100%"}}></span>
                                                                </span>
                                                                <div className="rating-progress-bar">
                                                                    <div className="rating-line" style={{width: "75%"}}></div>
                                                                </div>
                                                            </div>

                                                            <div className="single-rating">
                                                                <span className="rating-star">
                                                                        <span className="rating-bar" style={{width: "80%"}}></span>
                                                                </span>
                                                                <div className="rating-progress-bar">
                                                                    <div className="rating-line" style={{width: "90%"}}></div>
                                                                </div>
                                                            </div>

                                                            <div className="single-rating">
                                                                <span className="rating-star">
                                                                        <span className="rating-bar" style={{width: "60%"}}></span>
                                                                </span>
                                                                <div className="rating-progress-bar">
                                                                    <div className="rating-line" style={{width: "500%"}}></div>
                                                                </div>
                                                            </div>

                                                            <div className="single-rating">
                                                                <span className="rating-star">
                                                                        <span className="rating-bar" style={{width: "40%"}}></span>
                                                                </span>
                                                                <div className="rating-progress-bar">
                                                                    <div className="rating-line" style={{width: "80%"}}></div>
                                                                </div>
                                                            </div>

                                                            <div className="single-rating">
                                                                <span className="rating-star">
                                                                        <span className="rating-bar" style={{width: "20%"}}></span>
                                                                </span>
                                                                <div className="rating-progress-bar">
                                                                    <div className="rating-line" style={{width: "40%"}}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {/* Tab Instructors End */}

                                    </div>
                                    <div className="tab-pane fade" id="reviews">

                                       {/* Tab Reviews Start */}
                                        <div className="tab-reviews">
                                            <h3 className="tab-title">Student Reviews:</h3>

                                            <div className="reviews-wrapper reviews-active">
                                                <div className="swiper-container">
                                                    <div className="swiper-wrapper">

                                                       {/* Single Reviews Start */}
                                                        <div className="single-review swiper-slide">
                                                            <div className="review-author">
                                                                <div className="author-thumb">
                                                                    <img src={author_06} alt="Author"/>
                                                                    <i className="icofont-quote-left"></i>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h4 className="name">Sara Alexander</h4>
                                                                    <span className="designation">Product Designer, USA</span>
                                                                    <span className="rating-star">
                                                                            <span className="rating-bar" style={{width: "100%"}}></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
                                                        </div>
                                                       {/* Single Reviews End */}

                                                       {/* Single Reviews Start */}
                                                        <div className="single-review swiper-slide">
                                                            <div className="review-author">
                                                                <div className="author-thumb">
                                                                    <img src={author_07} alt="Author"/>
                                                                    <i className="icofont-quote-left"></i>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h4 className="name">Karol Bachman</h4>
                                                                    <span className="designation">Product Designer, USA</span>
                                                                    <span className="rating-star">
                                                                            <span className="rating-bar" style={{width: "100%"}}></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
                                                        </div>
                                                       {/* Single Reviews End */}

                                                       {/* Single Reviews Start */}
                                                        <div className="single-review swiper-slide">
                                                            <div className="review-author">
                                                                <div className="author-thumb">
                                                                    <img src={author_03} alt="Author"/>
                                                                    <i className="icofont-quote-left"></i>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h4 className="name">Gertude Culbertson</h4>
                                                                    <span className="designation">Product Designer, USA</span>
                                                                    <span className="rating-star">
                                                                            <span className="rating-bar" style={{width: "100%"}}></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
                                                        </div>
                                                       {/* Single Reviews End */}

                                                    </div>
                                                   {/* Add Pagination */}
                                                    <div className="swiper-pagination"></div>
                                                </div>
                                            </div>

                                            <div className="reviews-btn">
                                                <button type="button" className="btn btn-primary btn-hover-dark" data-bs-toggle="modal" data-bs-target="#reviewsModal">Write A Review</button>
                                            </div>

                                           {/* Reviews Form Modal Start */}
                                            <div className="modal fade" id="reviewsModal">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Add a Review</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>

                                                       {/* Reviews Form Start */}
                                                        <div className="modal-body reviews-form">
                                                            <form action="#">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                       {/* Single Form Start */}
                                                                        <div className="single-form">
                                                                            <input type="text" placeholder="Enter your name"/>
                                                                        </div>
                                                                       {/* Single Form End */}
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                       {/* Single Form Start */}
                                                                        <div className="single-form">
                                                                            <input type="text" placeholder="Enter your Email"/>
                                                                        </div>
                                                                       {/* Single Form End */}
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                       {/* Single Form Start */}
                                                                        <div className="reviews-rating">
                                                                            <label>Rating</label>
                                                                            <ul id="rating" className="rating">
                                                                                <li className="star" title='Poor' data-value='1'><i className="icofont-star"></i></li>
                                                                                <li className="star" title='Poor' data-value='2'><i className="icofont-star"></i></li>
                                                                                <li className="star" title='Poor' data-value='3'><i className="icofont-star"></i></li>
                                                                                <li className="star" title='Poor' data-value='4'><i className="icofont-star"></i></li>
                                                                                <li className="star" title='Poor' data-value='5'><i className="icofont-star"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                       {/* Single Form End */}
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                       {/* Single Form Start */}
                                                                        <div className="single-form">
                                                                            <textarea placeholder="Write your comments here"></textarea>
                                                                        </div>
                                                                       {/* Single Form End */}
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                       {/* Single Form Start */}
                                                                        <div className="single-form">
                                                                            <button className="btn btn-primary btn-hover-dark">Submit Review</button>
                                                                        </div>
                                                                       {/* Single Form End */}
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                       {/* Reviews Form End */}
                                                    </div>
                                                </div>
                                            </div>
                                           {/* Reviews Form Modal End */}

                                        </div>
                                       {/* Tab Reviews End */}

                                    </div>
                                </div>
                            </div>
                           {/* Details Tab Content End */}

                        </div>
                       {/* Courses Details Tab End */}

                    </div>
                   {/* Courses Details End */}

                </div>
                <div className="col-lg-4">
                   {/* Courses Details Sidebar Start */}
                    <div className="sidebar">

                       {/* Sidebar Widget Information Start */}
                        <div className="sidebar-widget widget-information">
                            <div className="info-price">
                                <span className="price">$420.38</span>
                            </div>
                            <div className="info-list">
                                <ul>
                                    <li><i className="icofont-man-in-glasses"></i> <strong>Instructor</strong> <span>Pamela Foster</span></li>
                                    <li><i className="icofont-clock-time"></i> <strong>Duration</strong> <span>08 hr 15 mins</span></li>
                                    <li><i className="icofont-ui-video-play"></i> <strong>Lectures</strong> <span>29</span></li>
                                    <li><i className="icofont-bars"></i> <strong>Level</strong> <span>Secondary</span></li>
                                    <li><i className="icofont-book-alt"></i> <strong>Language</strong> <span>English</span></li>
                                    <li><i className="icofont-certificate-alt-1"></i> <strong>Certificate</strong> <span>Yes</span></li>
                                </ul>
                            </div>
                            <div className="info-btn">
                                <a href="#" className="btn btn-primary btn-hover-dark">Enroll Now</a>
                            </div>
                        </div>
                       {/* Sidebar Widget Information End */}

                       {/* Sidebar Widget Share Start */}
                        <div className="sidebar-widget">
                            <h4 className="widget-title">Share Course:</h4>

                            <ul className="social">
                                <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                                <li><a href="#"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#"><i className="flaticon-skype"></i></a></li>
                                <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                       {/* Sidebar Widget Share End */}

                    </div>
                   {/* Courses Details Sidebar End */}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CourseDetail