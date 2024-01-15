/* eslint-disable react/no-unescaped-entities */
import doctor from '../assets/doctor.png'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CardHomePage from './CardHomePage';
// import doctor_icon from '../assets/doctor_icon.png';
// import ambulance_icon from '../assets/ambulance_icon.png';
// import cross_icon from '../assets/cross_icon.png';
import AboutUs from './AboutUs';
import { BiPlusMedical } from "react-icons/bi";
import { FaTruckMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import Our_services from './Our_sevices';
import Need_help from './Need_help';





function HomePage() {
    return (
        <>
            <Container className='mt-4'>
                <Row className='mb-5'>
                    <Col className='d-flex justify-content-center col-lg-6'>
                        {/* <img src={doctor} alt="doctor" height={400} className='d-md-none' /> */}
                        <img src={doctor} alt="doctor" height={400} className=' d-md-block d-lg-none' />
                        <img src={doctor} alt="doctor" height={625} className='d-none d-lg-block ' />


                    </Col>


                    <Col className='d-flex flex-column justify-content-center align-items-start col-lg-6'>
                        <p className=''>WELCOME ON OURS CLINIC'S SITE</p>
                        <h1 className='mb-3 take_care fs-md-1'>Take Care<br />of your health </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatem dolor, non animi hic vero necessitatibus blanditiis dolores!</p>

                        <Row className='mt-2'>
                            <Col>
                                <Button className='custom-btn border-0 rounded-1 px-4 py-2'>Book a visit</Button>
                                <Button className='custom-btn1 ms-4 border-0 rounded-1 px-4 py-2' variant="outline-dark">Read more</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>

               
            </Container>
            <Container>
            <Row>
                    <Col className='d-flex justify-content-center' md={4} lg={4} >
                        <CardHomePage
                        Icons={<BiPlusMedical className='fs-1'/>}
                        CardTitle={'Emergency Cases'}
                        CardSubtitle={'Malesuada ultricies curabitur'}
                        CardText ={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ad numq, sapiente cum repudiandae temporibus soluta, delectus.'}
                        ButtonCard={'Make an appointment'}/> 
                    </Col>

                    <Col className='d-flex justify-content-center' md={4} lg={4} >
                        <CardHomePage
                        Icons={<FaTruckMedical className='fs-1'/>}
                        CardTitle={'Emergency Cases'}
                        CardSubtitle={'Malesuada ultricies curabitur'}
                        CardText ={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ad numq, sapiente cum repudiandae temporibus soluta, delectus.'}
                        ButtonCard={'Contact us'}/> 
                    </Col>

                    <Col className='d-flex justify-content-center' md={4} lg={4} >
                        <CardHomePage
                        Icons={<FaUserDoctor className='fs-1'/>}
                        CardTitle={'Our Doctors'}
                        CardSubtitle={'Malesuada ultricies curabitur'}
                        CardText ={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ad numq, sapiente cum repudiandae temporibus soluta, delectus.'}
                        ButtonCard={'Doctors'}/> 
                    </Col>
                </Row>

            </Container>

            <AboutUs/>

            <Our_services/>

            <Need_help/>
        </>
    );
}

export default HomePage;