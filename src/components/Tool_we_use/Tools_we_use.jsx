import React from 'react';
import './Tools_we_use.scss';
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5, SiCss3 , SiNodedotjs , SiExpress , SiMongodb , SiAmazonaws ,  SiHiveBlockchain , SiMysql } from "react-icons/si";
 
const Tools_we_use = () => {
  return (
    <div className="tools-we-container section-title">
                        <h1 className="main-title"><span>Tools we use</span></h1>
                        <div className="tools-we-wrapper">
                            <div className="tools-we-card">
                            <SiHtml5 className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiCss3 className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <IoLogoJavascript className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiNodedotjs className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiExpress className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiMongodb className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiAmazonaws className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiHiveBlockchain className='icon'/>
                            </div>
                            <div className="tools-we-card">
                            <SiMysql className='icon'/>
                            </div>
                        </div>
                    </div>
  )
}

export default Tools_we_use;