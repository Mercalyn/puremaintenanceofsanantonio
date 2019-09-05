import React, { lazy, Suspense } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './css/Home.css';
import AwardA from './img/b1.png';
import AwardB from './img/b2.png';
import AwardC from './img/b3.png';
import AwardD from './img/b4.png';
import AwardE from './img/b5.jpg';
import TrifoldB from './img/tri2.png';
import PureLogo from './img/purelogo.png';
import TrifoldC from './img/tri3.png';

//lazy loading carousel image holder
const CarouselImages = lazy(() => import("./CarouselImages"));

function Home(){
    return(
        <Container>
            <Suspense fallback={
                <Spinner animation="grow" variant="primary">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }>
                <CarouselImages />
            </Suspense>

            <Row className="justify-content-between awards-row">
                <Col className="awards-column">
                    <img src={AwardA} alt="Pure Mold Solution of San Antonio" />
                </Col>
                <Col className="awards-column">
                    <img src={AwardB} alt="Pure Mold Solution of San Antonio" />
                </Col>
                <Col className="awards-column">
                    <img src={AwardC} alt="Pure Mold Solution of San Antonio" />
                </Col>
                <Col className="awards-column">
                    <img src={AwardD} alt="Pure Mold Solution of San Antonio" />
                </Col>
                <Col className="awards-column">
                    <img src={AwardE} alt="Pure Mold Solution of San Antonio" />
                </Col>
            </Row>

            <Row>
                <Col className="trifold">
                    <h4>MOLD SERVICES</h4>
                    <p>
                        If you have ever had water issues in your home, 
                        it is very likely mold issues will follow.
                    </p>
                    <h5>AIR QUALITY TESTS</h5>
                    <p>
                        Pure Mold Solution of San Antonio will take an air 
                        sample inside your home and send it to an independent 
                        accredited lab who will provide an evaluation of the total 
                        mold counts as well as the types of mold captured in the 
                        sample. This evaluation along with analysis from a 
                        microbiologist will be provided to you by Pure Mold Solution 
                        of San Antonio within 5-6 days of the sample being taken.
                    </p>
                    <h5 className>MOLD REMOVAL TREATMENT</h5>
                    <p>
                        Using our patented demolition-free mold remediation system 
                        powered by Pure Maintenance, Pure Mold Solution of San Antonio 
                        will eliminate any mold issues from your entire home and 
                        provide a protection so that mold will not return. The price 
                        for this service will depend on the size of your home and 
                        severity of the mold issue. Give Pure Mold Solution of San 
                        Antonio a call and we will come out and provide a free estimate!
                    </p>
                </Col>
                <Col className="bg-grey flexbox">
                    <Row>
                        <img src={TrifoldB} className="w100-image" alt="Pure Mold Solution of San Antonio" />
                    </Row>
                    <Row className="bg-darkblue">
                        <h5 className="darkblue">PURE MOLD SOLUTION OF SAN ANTONIO WARRANTY</h5>
                        <p className="darkblue">
                            Unlike other mold remediation companies, Pure Mold Solution of 
                            San Antonio provides a warranty for mold remediation services 
                            as long as all water issues are resolved at the time of 
                            treatment.
                        </p>
                    </Row>
                    
                        <img src={TrifoldC} className="w100-image align-middle" alt="Pure Mold Solution of San Antonio" />
                    
                </Col>
                <Col id="trifold-hide">
                    <span className="helper" />
                    <img src={PureLogo} className="w100-image align-middle" alt="Pure Mold Solution of San Antonio" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;