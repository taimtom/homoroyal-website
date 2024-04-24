import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner3 = () => {
    return (
        <div className="static-slider-head banner-backgroud-image" >
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title " style={{color:"#001C58",}}>Homoroyal</h1>
                        <h4 className="subtitle font-light" >Civil Engineering Construction Nigeria Limited, part
of the Homoroyal Group, provides reliable, innovative, and
efficient solutions for the construction of buildings, industries,
civil structures, roads, and infrastructure<br /> Beautiful Pre-Built Demos</h4>
                        <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner3;
