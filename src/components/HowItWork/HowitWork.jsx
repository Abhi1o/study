import React from 'react'
import "./HowitWork.scss"
import shape_15 from "../../assets/images/shape/shape-15.png"
import shape_16 from "../../assets/images/shape/shape-16.png"
import shape_17 from "../../assets/images/shape/shape-17.png"
import { BsPersonWorkspace } from "react-icons/bs";
import { IoBagCheckSharp } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
const HowitWork = () => {
  return (
    <div>
        {/* How It Work End */}
        <div className="section section-padding mt-n1">
            <div className="container">

                {/* Section Title Start */}
                <div className="section-title shape-03 text-center">
                    <h5 className="sub-title">Over 1,235+ Course</h5>
                    <h2 className="main-title">How It <span> Work?</span></h2>
                </div>
                {/* Section Title End */}

                {/* How it Work Wrapper Start */}
                <div className="how-it-work-wrapper">

                    {/* Single Work Start */}
                    <div className="single-work">
                        <img className="shape-1" src={shape_15} alt="Shape"/>

                        <div className="work-icon">
                            <i className="flaticon-transparency"><BsPersonWorkspace  size="30px"/></i>
                        </div>
                        <div className="work-content">
                            <h3 className="title">Enroll a learning track</h3>
                            <p>It has survived not only centuries also leap into electronic.</p>
                        </div>
                    </div>
                    {/* Single Work End */}

                    {/* Single Work Start */}
                    <div className="work-arrow">
                        <img className="arrow" src={shape_17} alt="Shape"/>
                    </div>
                    {/* Single Work End */}

                    {/* Single Work Start */}
                    <div className="single-work">
                        <img className="shape-2" src={shape_15} alt="Shape"/>

                        <div className="work-icon">
                        <i><LuClipboardEdit size="30px"/></i>
                        </div>
                        <div className="work-content">
                            <h3 className="title">Learn Practice & Repeat</h3>
                            <p>It has survived not only centuries also leap into electronic.</p>
                        </div>
                    </div>
                    {/* Single Work End */}

                    {/* Single Work Start */}
                    <div className="work-arrow">
                        <img className="arrow" src={shape_17} alt="Shape"/>
                    </div>
                    {/* Single Work End */}

                    {/* Single Work Start */}
                    <div className="single-work">
                        <img className="shape-3" src={shape_16} alt="Shape"/>

                        <div className="work-icon">
                            <i className="flaticon-badge"><IoBagCheckSharp size="30px"/></i>
                        </div>
                        <div className="work-content">
                            <h3 className="title">Get your dream job</h3>
                            <p>It has survived not only centuries also leap into electronic.</p>
                        </div>
                    </div>
                    {/* Single Work End */}

                </div>

            </div>
        </div>
        {/* How It Work End */}

    </div>
  )
}

export default HowitWork