import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../../assets/images/hm2/IMG-20240420-WA0018.jpg';
import img2 from '../../assets/images/hm2/IMG-20240420-WA0019.jpg';
import img3 from '../../assets/images/hm2/IMG-20240420-WA0021.jpg';
import img4 from '../../assets/images/hm2/IMG-20240420-WA0022.jpg';
import img5 from '../../assets/images/hm2/IMG-20240420-WA0025.jpg';
import img6 from '../../assets/images/hm2/IMG-20240420-WA0028.jpg';


const imagesList=[
    {
        title:"",
        detail:"",
        image:img1
    },
    {
        title:"",
        detail:"",
        image:img2
    },
    {
        title:"",
        detail:"",
        image:img3
    },
    {
        title:"",
        detail:"",
        image:img4
    },
    {
        title:"",
        detail:"",
        image:img5
    },
    {
        title:"",
        detail:"",
        image:img6
    }
   
]

const Projects = () => {
    return (
        <div>
            <div className="spacer" id="imgs-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Completed Projects</h1>
                            <h6 className="subtitle">Homoroyal provides a range of services covering all design
and engineering phases, including research, drafts and
concepts, detailed construction design, and master planning.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    {imagesList.map((image)=>(
                        <Col lg="4" className="m-b-30">
                        
                        <img src={image.image} alt="img" className="img-responsive img-rounded" width="200" />
                        <p className="m-t-15 m-b-0"></p>
                        <h4 className="card-title">{image.title}</h4>
                        <h6 className="card-subtitle"><code>{image.detail}</code></h6>
                    </Col>
                    ))}
                    
                    
                   
                </Row>
               
            </Container>
        </div>
    );
}

export default Projects;
