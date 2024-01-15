import { Container, Row, Col } from 'react-bootstrap';
import services from '../assets/services.png'
import { FaHeartPulse } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { RiBearSmileFill } from "react-icons/ri";
import { PiToothFill } from "react-icons/pi";
import { FaXRay } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { GiAcid } from "react-icons/gi";
import { GiSkeleton } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";



function Services() {
    return (
        <>
            <Container className='mt-4'>
                <Row className='mb-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-start col-lg-6'>
                        <h1 className='take_care mb-3'>Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem dicta quibusdam voluptate veniam dignissimos amet sit expedita facilis illo.</p>
                    </Col>

                    <Col className='d-flex justify-content-center col-lg-6'>
                        <img src={services} alt="doctor" width={350} className=' d-md-block d-lg-none' />
                        <img src={services} alt="doctor" width={400} className='d-none d-lg-block' />
                    </Col>
                </Row>

                <h2 className='section_title mb-5 text-center'>What we do</h2>

                <Row className='mb-5'>
                    <Col className='d-flex flex-column align-items-center'>
                        <FaHeartPulse className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Cardiology</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                    <Col className='d-flex flex-column align-items-center'>
                        <RiBearSmileFill className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Pediatry</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                    <Col className='d-flex flex-column align-items-center'>
                        <PiToothFill className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Dentistry</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>
                </Row>

                <Row className='mb-5'>
                    <Col className='d-flex flex-column align-items-center'>
                        <BiSolidInjection className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Injection</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                    <Col className='d-flex flex-column align-items-center'>
                        <MdBloodtype className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Blood Tests</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                    <Col className='d-flex flex-column align-items-center'>
                        <FaXRay className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>X-Ray</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>
                </Row>

                <Row className='mb-5'>
                <Col className='d-flex flex-column align-items-center'>
                        <GiAcid className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Laboratory</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                    <Col className='d-flex flex-column align-items-center'>
                        <GiSkeleton className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Osteopathy</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                    <Col className='d-flex flex-column align-items-center'>
                        <GiFruitBowl className='icon_our_services mb-4' />
                        <span className='fw-bold text-center'>Nutritionist</span> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deserunt dele aperiam minus.</p>
                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default Services;