import { Container, Row, Col } from 'react-bootstrap';
import { FaHeartPulse } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { RiBearSmileFill } from "react-icons/ri";
import { PiToothFill } from "react-icons/pi";
import { FaXRay } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import Button from 'react-bootstrap/Button';



function Our_services() {
    return (
        <>
            <Container fluid className='mx-0 mb-5 px-3 py-5 our_services'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={12} md={6} className='mb-5 ps-md-5'>
                        <h2 className='section_title mb-4'>Our Services</h2>
                        <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iusto fugit eos hic distinctio ab error laboriosam? Aperiam minus quia maiores et earum officia assumenda velit porro, ad voluptatem odio!</p>
                        <Button className='custom-btn border-0 rounded-1 px-4 py-2'>Our Services</Button>
                    </Col>

                    <Col xs={12} md={6}>
                        <Row className='mb-5'>
                        <Col className='d-flex flex-column align-items-center'>
                                    <FaHeartPulse className='icon_our_services mb-4' />
                                <span className='fw-bold text-center'>Cardiology</span>
                            </Col>

                            <Col className='d-flex flex-column align-items-center'>
                                    <RiBearSmileFill className='icon_our_services mb-4'/>
                                <span className='fw-bold text-center'>Pediatry</span>
                            </Col>

                            <Col className='d-flex flex-column align-items-center'>
                                    <PiToothFill className='icon_our_services mb-4' />
                                <span className='fw-bold text-center'>Dentistry</span>
                            </Col>
                        </Row>

                        <Row className='d-felx justify-content-center align-items-center'>
                            <Col className='d-flex flex-column align-items-center'>
                                <BiSolidInjection className='icon_our_services mb-4' />
                                <span className='fw-bold text-center'>Injection</span>
                            </Col>

                            <Col className='d-flex flex-column align-items-center'>
                                <MdBloodtype  className='icon_our_services mb-4' />
                                <span className='fw-bold text-center'>Blood Tests</span>
                            </Col>

                            <Col className='d-flex flex-column align-items-center'>
                                <FaXRay className='icon_our_services mb-4' />
                                <span className='fw-bold text-center'>X-Ray</span>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Our_services;