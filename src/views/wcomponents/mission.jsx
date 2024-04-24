import React from 'react';
import { Badge } from 'reactstrap';

// images
import missionImage from "../../assets/images/me-img/services-offered.jpg"

const Mission = () => {
    return (
        <div>
            <div className="spacer" id="label-component">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Mission</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h1>Heading <Badge color="secondary">New</Badge></h1>
                            <h2>Heading <Badge color="secondary">New</Badge></h2>
                            <h3>Heading <Badge color="secondary">New</Badge></h3>
                            <h4>Heading <Badge color="secondary">New</Badge></h4>
                            <h5>Heading <Badge color="secondary">New</Badge></h5>
                            <h6>Heading <Badge color="secondary">New</Badge></h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={missionImage} className='' style={{width:"40vw", height:"60vh"}} alt="" srcset="" />
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
