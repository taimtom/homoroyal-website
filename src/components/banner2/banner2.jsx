import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

// image
import bannerImage from "../../assets/images/me-img/scrapper-con-img.jpeg"
import img1 from "../../assets/images/hm1/IMG-20240420-WA0001.jpg"
import img2 from "../../assets/images/hm1/IMG-20240420-WA0004.jpg"
import img3 from "../../assets/images/hm1/IMG-20240420-WA0012.jpg"
import img4 from "../../assets/images/hm1/IMG-20240420-WA0017.jpg"
import img5 from "../../assets/images/hm1/IMG-20240420-WA0008.jpg"
import img6 from "../../assets/images/hm1/IMG-20240420-WA0012.jpg"

const SLIDER_IMAGE=[
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
const HeaderBanner2 = () => {
    const [currentImage, setCurrentImage]=useState(0)
   
    const swipeImage=()=>{
       
        
        if (currentImage >= 0 && currentImage < SLIDER_IMAGE.length-2 ){
            setCurrentImage((prev)=>prev === SLIDER_IMAGE.length - 1? 0: prev +1)
            
        }
      
       
    }

    const goToIndex=(index)=>{
        setCurrentImage(index)
    }
    function isActive(index){
        if (currentImage && currentImage === index){
            return "#028ee1";
        }
            return "#8d97ad";
        
        
    }
    React.useEffect(()=>{
        setInterval(function (){swipeImage()}, 10000);
    },[])
    return (
        <div className="static-slider-head banner-backgroud-color ">
            <Container>
                <Row >
                    <Col sm="12" md="6" >
                        <h1 className="title">Homoroyal</h1>
                        <h4 className="subtitle font-light">Civil Engineering Construction <br/> Nigeria Limited, part
of the Homoroyal Group</h4>
                        <a href="https://wrappixel.com/templates/wrapkit-react-lite/" className="btn btn-dark m-r-20 btn-md m-t-30 font-14">Contact Us</a>
                        <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Request Quote</Link>
                    </Col>
                    
                    <Col sm="12" md="6"  >
                        <img src={SLIDER_IMAGE[currentImage].image} style={{width:"100%", height:"50vh", borderRadius:"10px"}} alt={SLIDER_IMAGE[currentImage].title} srcset="" />
                        
                       
                    </Col>
                </Row>
                <Row>
                <Col sm="12"  md="6"  ></Col>
                <Col  sm="12" md="6"  >
                    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>{SLIDER_IMAGE.map((img,index)=><div onClick={()=>goToIndex(index)} style={{marginRight:"50px", fontSize:"24px", cursor:"pointer", color:isActive(index)}}>*</div>)}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
