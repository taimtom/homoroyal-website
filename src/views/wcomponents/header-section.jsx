import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';

import img1 from "../../assets/images/hm1/IMG-20240420-WA0001.jpg"
import img2 from "../../assets/images/hm1/IMG-20240420-WA0004.jpg"
import img3 from "../../assets/images/hm1/IMG-20240420-WA0012.jpg"
import img4 from "../../assets/images/hm1/IMG-20240420-WA0017.jpg"
import img5 from "../../assets/images/hm1/IMG-20240420-WA0008.jpg"
import img6 from "../../assets/images/hm1/IMG-20240420-WA0012.jpg"
import { Link } from 'react-router-dom';



const items=[
    {
        title:"",
        subtitle:"",
        image:img1
    },
    {
        title:"",
        subtitle:"",
        image:img2
    },
    {
        title:"",
        subtitle:"",
        image:img3
    },
    {
        title:"",
        subtitle:"",
        image:img4
    },
    {
        title:"",
        subtitle:"",
        image:img5
    },
    {
        title:"",
        subtitle:"",
        image:img6
    }
]

const HeaderBannerSection = (props) => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const toggle1 = () => {
        setModal1(!modal1);
    }

    const toggle2 = () => {
        setModal2(!modal2);
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map(item => (
        <CarouselItem
            className="custom-tag"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.title}
        >
            <img className="w-100 " src={item.image} alt={item.title} style={{borderRadius:"10px", height:"50vh"}} />
            <CarouselCaption captionText={item.subtitle} captionHeader={item.subtitle} />
        </CarouselItem>
    ));

    return (
        <div style={{marginTop:"60px"}}>
            <div className="spacer" id="js-component">
               
            </div>
            <Container>
                <Row className="m-b-40 ">
                    <Col lg="6" md="12" className='d-flex flex-column banner-homoroyal-text '>
                    <h1 className="title" style={{fontWeight: 700,
        fontSize: "70px",
        lineHeight: "100px",
        color: "#0e0f11"}}>Homoroyal</h1>
                        <h4 className="subtitle " style={{color:"#0e0f11"}}>Civil Engineering Construction <br/> Nigeria Limited, part
of the Homoroyal Group</h4>
<div className='d-flex'>
                        <a href="https://wrappixel.com/templates/wrapkit-react-lite/" className="btn btn-dark m-r-20 btn-md m-t-30 font-14">Contact Us</a>
                        <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Request Quote</Link>
                        </div>
                    </Col>
                    <Col md="6" lg="12" className='mini-screen-spacer'>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBannerSection;
