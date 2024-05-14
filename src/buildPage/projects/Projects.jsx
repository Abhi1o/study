import React from 'react'
import "./Projects.scss"
import { Link } from 'react-router-dom'
import Shape_08 from "../../assets/images/shape/shape-8.png"
import Shape_23 from "../../assets/images/shape/shape-23.png"
import Shape_05 from "../../assets/images/shape/shape-5.png"
import Shape_06 from "../../assets/images/shape/shape-6.png"
import Shape_24 from "../../assets/images/shape/shape-24.png"
import author_11 from "../../assets/images/author/author-11.jpg"
import author_01 from "../../assets/images/author/author-01.jpg"
import author_02 from "../../assets/images/author/author-02.jpg"
import author_03 from "../../assets/images/author/author-03.jpg"
import author_04 from "../../assets/images/author/author-04.jpg"
import author_05 from "../../assets/images/author/author-05.jpg"
import author_06 from "../../assets/images/author/author-06.jpg"
import author_07 from "../../assets/images/author/author-07.jpg"
import author_08 from "../../assets/images/author/author-08.jpg"
import author_09 from "../../assets/images/author/author-09.jpg"
import blog_01 from "../../assets/images/blog/blog-01.jpg"
import blog_02 from "../../assets/images/blog/blog-02.jpg"
import blog_03 from "../../assets/images/blog/blog-03.jpg"
import blog_04 from "../../assets/images/blog/blog-04.jpg"
import blog_05 from "../../assets/images/blog/blog-05.jpg"
import blog_06 from "../../assets/images/blog/blog-06.jpg"
import blog_07 from "../../assets/images/blog/blog-07.jpg"
import blog_08 from "../../assets/images/blog/blog-08.jpg"
import blog_09 from "../../assets/images/blog/blog-09.jpg"
import Success from '../../components/Success/Success'
import Whyus from "../../components/Whyus/Whyus"
import ToolsWeUse from '../../components/Tool_we_use/Tools_we_use'
import Mentor from '../../components/Mentor/Mentor'
import PlacementRecord from '../../components/Placement_record/Placement_record'
import Company from '../../components/Company/Company'
import FAQ from '../../components/FAQ/FAQ'
// import CourseTimeline from '../../components/Course_timeline/Course_timeline'
import HowitWork from '../../components/HowItWork/HowitWork'
import Feedback from '../../components/FeedBack/Feedback'


const Projects = () => {
  return (
    <div className='main-wrapper'>
     {/* Page Banner Start */}
        <div className="section page-banner">

            <img className="shape-1 animation-round" src={Shape_08} alt="Shape"/>

            <img className="shape-2" src={Shape_23} alt="Shape"/>

            <div className="container">
             {/* Page Banner Start */}
                <div className="page-banner-content">
                    <ul className="breadcrumb">
                        <li><a href="#top">Home</a></li>
                        <li className="active">Projects</li>
                    </ul>
                    <h2 className="title">Our <span>Projects</span></h2>
                </div>
             {/* Page Banner End */}
            </div>

         {/* Shape Icon Box Start */}
            <div className="shape-icon-box">

                <img className="icon-shape-1 animation-left" src={Shape_05} alt="Shape"/>

                <div className="box-content">
                    <div className="box-wrapper">
                        <i className="flaticon-badge"></i>
                    </div>
                </div>

                <img className="icon-shape-2" src={Shape_06} alt="Shape"/>

            </div>
         {/* Shape Icon Box End */}

            <img className="shape-3" src={Shape_24} alt="Shape"/>

            <img className="shape-author" src={author_11} alt="Shape"/>

        </div>
     {/* Page Banner End */}

     {/* Blog Start */}
        <div className="section section-padding mt-n10">
            <div className="container">

             {/* Blog Wrapper Start */}
                <div className="blog-wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_01} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_01} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Jason Williams</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                        <Link to="/project_detail">Science</Link>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Data Science and Machine Learning with Python - Hands On!</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_02} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_02} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Pamela Foster</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">UX Design</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Create Amazing Color Schemes for Your UX Design Projects</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_03} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_03} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Patricia Collins</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Business</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Culture & Leadership: Strategies for a Successful Business</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_04} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_04} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Archie Neal</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Science</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Data Science and Machine Learning with Python - Hands On!</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_05} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_05} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Randal Ramsey</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">UX Design</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Create Amazing Color Schemes for Your UX Design Projects</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_06} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_06} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Rochelle Thomas</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Business</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Culture & Leadership: Strategies for a Successful Business</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_07} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                                <Link to="/project_detail"><img src={author_07} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Della Salazar</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Science</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Data Science and Machine Learning with Python - Hands On!</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_08} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                            <Link to="/project_detail"><img src={author_08} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Ricardo Patrick</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">UX Design</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Create Amazing Color Schemes for Your UX Design Projects</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                        <div className="col-lg-4 col-md-6">

                         {/* Single Blog Start */}
                            <div className="single-blog">
                                <div className="blog-image">
                                    <Link to="/project_detail"><img src={blog_09} alt="Blog"/></Link>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <div className="author">
                                            <div className="author-thumb">
                                                <Link to="/project_detail"><img src={author_09} alt="Author"/></Link>
                                            </div>
                                            <div className="author-name">
                                                <a className="name" href="#top">Kurt Stewart</a>
                                            </div>
                                        </div>
                                        <div className="tag">
                                            <a href="#top">Business</a>
                                        </div>
                                    </div>

                                    <h4 className="title"><Link to="/project_detail">Culture & Leadership: Strategies for a Successful Business</Link></h4>

                                    <div className="blog-meta">
                                        <span> <i className="icofont-calendar"></i> 21 March, 2021</span>
                                        <span> <i className="icofont-heart"></i> 2,568+ </span>
                                    </div>

                                    <a href="blog-details-left-sidebar.html" className="btn btn-secondary btn-hover-primary">Read More</a>
                                </div>
                            </div>
                         {/* Single Blog End */}

                        </div>
                    </div>
                </div>
             {/* Blog Wrapper End */}

             {/* Page Pagination End */}
                {/* <div className="page-pagination">
                    <ul className="pagination justify-content-center">
                        <li><a href="#top"><i className="icofont-rounded-left"></i></a></li>
                        <li><a className="active" href="#top">1</a></li>
                        <li><a href="#top">2</a></li>
                        <li><a href="#top">3</a></li>
                        <li><a href="#top"><i className="icofont-rounded-right"></i></a></li>
                    </ul>
                </div> */}
             {/* Page Pagination End */}

            </div>
        </div>



     {/* Blog End */}


     {/* other components */}


     <div className="container">

                <Success/>

                <Whyus/>
                <ToolsWeUse/>
                <PlacementRecord/>
                <Company/>
                <Feedback/>
                <HowitWork/>
                <Mentor/>
                

        </div>
        <div className='certificate-container '>
            <div className="container">

            
            <div className="certificate-wrapper">
                <div className="left">
                    <img src="https://assets.nextleap.app/images/pdf_certificate_new.png" alt="bannernot found" className='learn-banner-image'/>
               
                   
                </div>
                <div className="right">
                    <h1>Verifiable Certificate of Accomplishment</h1>
                    <p>Upon completing the Product Designer Fellowship course, you'll receive a verifiable Certificate of Accomplishment that you can link to from your Résumé and LinkedIn profile.</p>
                    
                    <button className='btn btn-primary btn-hover-dark'>Apply & Start for Free </button>

                     </div>



            </div>
        </div>
    </div>
    <FAQ/>
    </div>
  )
}

export default Projects