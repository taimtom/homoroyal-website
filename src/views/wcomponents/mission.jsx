import React from 'react';
import { Badge } from 'reactstrap';

// images
import missionImage from "../../assets/images/me-img/services-offered-nobg.png"

const Mission = () => {
    return (
        <div className='banner-backgroud-image'>
            <div className="spacer" id="label-component">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Mission</h1>
                            <h6 className="subtitle">Our mission is to transform and grow the civil construction
business to a work class and reposition it to meet the 21st century needs. We are poised at delivering construction works
and services with the best managerial and manpower skills
and resources available within the shortest possible time
frame and budget, based on the prevailing economic condition
operating in the meantime</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pl-12">
                <div className="row">
                    <div className="col-md-6" style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                        <h2>Services Offered</h2>
                        <div>
                            <ul>
                                <li>Construction Management</li>
                                <li>Architecture</li>
                                <li>Infrastructural Engineering</li>
                                <li>Structural Engineering</li>
                                <li>Mechanical Engineering </li>
                                <li>Electrial Engineering</li>
                                <li>Project Management</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={missionImage} className='' style={{width:"100%", height:"80vh"}} alt="" srcset="" />
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
