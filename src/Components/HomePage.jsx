/* eslint-disable react/no-unescaped-entities */
import doctor from '../assets/doctor.png'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CardHomePage from './CardHomePage';
import AboutUs from './AboutUs';
import { BiPlusMedical } from "react-icons/bi";
import { FaTruckMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import Our_services from './Our_sevices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function HomePage() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Container className='mt-4'>
                <Row className='mb-5'>
                    <Col className='d-flex justify-content-center col-lg-6' data-aos="zoom-in-right">
                        {/* <img src={doctor} alt="doctor" height={400} className='d-md-none' /> */}
                        <img src={doctor} alt="doctor" height={400} className=' d-md-block d-lg-none' />
                        <img src={doctor} alt="doctor" height={625} className='d-none d-lg-block ' />
                    </Col>


                    <Col className='d-flex flex-column justify-content-center align-items-start col-lg-6' data-aos="zoom-in-right">
                        <p className=''>WELCOME ON OURS CLINIC'S SITE</p>
                        <h1 className='mb-3 take_care'>Take Care<br />of your health </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatem dolor, non animi hic vero necessitatibus blanditiis dolores!</p>

                        <Row className='mt-2'>
                            <Col>
                                <Button href="/contact" className='custom-btn border-0 rounded-1 px-4 py-2'>Book a visit</Button>
                                <Button href="/services" className='custom-btn1 ms-4 border-0 rounded-1 px-4 py-2' variant="outline-dark">Read more</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>


            </Container>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center' md={4} lg={4} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <CardHomePage
                            Icons={<BiPlusMedical className='fs-1' />}
                            CardTitle={'Emergency Cases'}
                            CardSubtitle={'Malesuada ultricies curabitur'}
                            CardText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ad numq, sapiente cum repudiandae temporibus soluta, delectus.'}
                            Href={'/contact'}
                            ButtonCard={'Make an appointment'} />
                    </Col>

                    <Col className='d-flex justify-content-center' md={4} lg={4} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <CardHomePage
                            Icons={<FaTruckMedical className='fs-1' />}
                            CardTitle={'Emergency Cases'}
                            CardSubtitle={'Malesuada ultricies curabitur'}
                            CardText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ad numq, sapiente cum repudiandae temporibus soluta, delectus.'}
                            Href={'/contact'}
                            ButtonCard={'Contact us'} />
                    </Col>

                    <Col className='d-flex justify-content-center' md={4} lg={4} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <CardHomePage
                            Icons={<FaUserDoctor className='fs-1' />}
                            CardTitle={'Our Doctors'}
                            CardSubtitle={'Malesuada ultricies curabitur'}
                            CardText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ad numq, sapiente cum repudiandae temporibus soluta, delectus.'}
                            Href={'/team'}
                            ButtonCard={'Doctors'} />
                    </Col>
                </Row>

            </Container>

            <AboutUs />

            <Our_services />
        </>
    );
}

export default HomePage;