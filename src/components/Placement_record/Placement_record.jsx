import React from 'react'
import"./Placement_record.scss"
const Placement_record = () => {
  return (
    <div className="place-record-container section-title">
                        <h1 className="main-title">placement Record Details</h1>
                        <div className="place-record-wrapper">
                            <h1 className='main-title'>Software Developer</h1>
                            <hr/>
                                <div className="place-record-card">
                                    <div className="leftplace-card">
                                        <p>% of student placed</p>
                                        <h3>100%</h3>
                                    </div>
                                    <div className="leftplace-card">
                                        <p>Average Package</p>
                                        <h3>10-15 Lakhs</h3>
                                    </div>
                                    <div className="leftplace-card">
                                        <p>Highest Pkg.</p>
                                        <h3>25 LPA</h3>
                                    </div>
                                    

                                </div>
                           
                        </div>


                    </div>
  )
}

export default Placement_record