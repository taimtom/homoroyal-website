import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img2 from '../../assets/images/ui/5.jpg';


const Feedback = () => {
    return (
        <div style={{paddingBottom:"100px"}}>
            <div className="spacer" id="imgs-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Our Client's Feedback</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                <Col lg="4" className="text-center m-b-30">
                        <h4 className="card-title">Ayomide Samuel</h4>
                        <h6 className="card-subtitle"><code>.img-circle</code> Make sure the image is square not ractangle</h6>
                        <img src={img2} alt="img" className="img-circle" width="50" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">
                        <h4 className="card-title">Babatunde Fashola</h4>
                        <h6 className="card-subtitle"><code>.img-circle</code> Make sure the image is square not ractangle</h6>
                        <img src={img2} alt="img" className="img-circle" width="50" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">
                        <h4 className="card-title">Shegun Amos</h4>
                        <h6 className="card-subtitle"><code>.img-circle</code> Make sure the image is square not ractangle</h6>
                        <img src={img2} alt="img" className="img-circle" width="50" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Feedback;
