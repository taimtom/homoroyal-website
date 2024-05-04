/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer" >
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Address</h5>
                        <p>Off Lagos-Badagry Express-Way
Homoroyal Building, , 3/5. Mosafejo Community Road, Mosafejo, Badagry, Lagos State.</p>
                    </Col>
                    



                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Phone</h5>
                        <p>Home :  +2349030174333<br />Office :  +2348087782662, +2349152351489</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office :  <a href="#" className="link">info@Homoroyal.co</a> </p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <a href="#" className="link"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="link"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="link"><i className="fa fa-google-plus"></i></a>
                            <a href="#" className="link"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" className="link"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14 justify-content-between">
                                <div className="m-t-10 m-b-10 copyright">All Rights Reserved by Homoroyal</div>
                                <div className="links ms-auto m-t-10 m-b-10">
                                    <a href="#" className="p-10 p-l-0">Terms of Use</a>
                                    <a href="#" className="p-10">Legal Disclaimer</a>
                                    <a href="#" className="p-10">Privacy Policy</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
