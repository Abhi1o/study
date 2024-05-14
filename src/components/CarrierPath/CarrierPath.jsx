import React from 'react'
import "./CarrierPath.scss"
import { Link } from 'react-router-dom'
const CarrierPath = () => {
  return (
    <div>
        <div className=" section-title shape-03 carrier_container section-title">
    <h1 className='main-title'><span>Career</span> Path</h1>
    <div className="carrier-wrapper">
        <Link to="/learning"><div className="carrier-card">
            <h2>Be a Full Stack Developer</h2>
            <p>An extensive learning track to help you to become a full stack developer</p>
            <button>Start Learning</button>
            <span>+ 2585 Devs have joined </span>
        </div></Link>
        <div className="carrier-card">
            <h2>Be a Blockchain Developer</h2>
            <p>An extensive learning track for developers to get started in Blockchain</p>
            <button>Get notified</button>
            <span>+ 25 Devs have Registered </span>
        </div>
        <div className="carrier-card">
            <h2>Be a Data Scientist</h2>
            <p>Hands-on learning track that helps you master Data Science</p>
            <button>Get notified</button>
            <span>+ 285 Devs have Registered </span>
        </div>
    </div>
</div></div>
  )
}

export default CarrierPath