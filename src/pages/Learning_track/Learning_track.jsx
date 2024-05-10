import React from 'react'
import Banner_img from "../../assets/images/brand/banner-img.png"
import "./Learning_track.scss"
import Success from '../../components/Success/Success'
import Whyus from "../../components/Whyus/Whyus"
import ToolsWeUse from '../../components/Tool_we_use/Tools_we_use'
import Mentor from '../../components/Mentor/Mentor'
import PlacementRecord from '../../components/Placement_record/Placement_record'
import Company from '../../components/Company/Company'
import FAQ from '../../components/FAQ/FAQ'
import CourseTimeline from '../../components/Course_timeline/Course_timeline'
const Learning_track = () => {
  return (
    <div className=''>
        <div className=' slider-section '>
            <div className="container">

            
            <div className="learn-track-banner">
                <div className="left">
                    <h1>Data Structures & Algorithms Fellowship</h1>
                    <p>Master DSA and break into a career at top technology companies in 4 months!</p>
                    
                    <button className='btn btn-primary btn-hover-dark'>Apply & Start for Free </button>

                    <div className='banner-offers'>
                        <div className="title">
                            <h3>Placement Offers</h3>

                        </div>
                        <hr className='divider'/>
                        <div className='offer'>
                            <div className="dream-job">
                                <h4>Dream Job</h4>
                                <h2>6-10 LPA</h2>


                            </div>
                            <hr className='divider-vertical'/>
                            <div className="super-dream">
                                <h4>Super Dream</h4>
                                <h2>10 -25 + LPA</h2>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="right">
                    <img src={Banner_img} alt="banner not found" className='learn-banner-image'/>
                </div>



            </div>
        </div>
        </div>
            <CourseTimeline/>
        <div className="container">

                <Success/>

                <Whyus/>
                <ToolsWeUse/>
                <PlacementRecord/>
                <Company/>
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

export default Learning_track