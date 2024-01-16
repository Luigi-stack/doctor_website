import { Container, Row, Col } from 'react-bootstrap';
import our_team from '../assets/our_team.png'
import Card from 'react-bootstrap/Card';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import doctor_team1 from '../assets/doctor_team1.png'
import doctor_team2 from '../assets/doctor_team2.png'
import doctor_team3 from '../assets/doctor_team3.png'
import doctor_team4 from '../assets/doctor_team4.png'
import doctor_team5 from '../assets/doctor_team5.png'
import doctor_team6 from '../assets/doctor_team6.png'


function OurTeam() {
    const doctors = [
        {
            "firstName": "Alex",
            "lastName": "Turner",
            "role": "Doctor",
            "specialization": "Cardiologist",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi ut, summa cum repudiandae molestias, adipisicing vero.",
            "image": doctor_team1,
            "contacts": {
                "phone": "tel:#+1234567890",
                "facebook": "#alex.turner",
                "linkedin": "#alex-turner"
            }
        },
        {
            "firstName": "Maya",
            "lastName": "Patel",
            "role": "Doctor",
            "specialization": "Pediatrician",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi ut, summa cum repudiandae molestias, adipisicing vero.",
            "image": doctor_team2,
            "contacts": {
                "phone": "tel:#+9876543210",
                "facebook": "#maya.patel",
                "linkedin": "#maya-patel"
            }
        },
        {
            "firstName": "Adrian",
            "lastName": "Mitchell",
            "role": "Doctor",
            "specialization": "Neurologist",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi ut, summa cum repudiandae molestias, adipisicing vero.",
            "image": doctor_team3,
            "contacts": {
                "phone": "tel:#+1112233445",
                "facebook": "#adrian.mitchell",
                "linkedin": "#adrian-mitchell"
            }
        },
        {
            "firstName": "Olivia",
            "lastName": "Sanchez",
            "role": "Doctor",
            "specialization": "Oncologist",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi ut, summa cum repudiandae molestias, adipisicing vero.",
            "image": doctor_team4,
            "contacts": {
                "phone": "tel:#+5556667777",
                "facebook": "#olivia.sanchez",
                "linkedin": "#olivia-sanchez"
            }
        },
        {
            "firstName": "Jordan",
            "lastName": "Foster",
            "role": "Doctor",
            "specialization": "Dermatologist",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi ut, summa cum repudiandae molestias, adipisicing vero.",
            "image": doctor_team5,
            "contacts": {
                "phone": "tel:#+9998887777",
                "facebook": "#jordan.foster",
                "linkedin": "#jordan-foster"
            }
        },
        {
            "firstName": "Emily",
            "lastName": "Clarke",
            "role": "Doctor",
            "specialization": "Endocrinologist",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi ut, summa cum repudiandae molestias, adipisicing vero.",
            "image": doctor_team6,
            "contacts": {
                "phone": "tel:#+3332221111",
                "facebook": "#emily.clarke",
                "linkedin": "#emily-clarke"
            }
        }
    ];

    return (
        <>
            <Container className='mt-4 mb-5'>
                <Row className='mb-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-start col-lg-6'>
                        <h1 className='take_care mb-3'>Doctors</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem dicta quibusdam voluptate veniam dignissimos amet sit expedita facilis illo.</p>
                    </Col>

                    <Col className='d-flex justify-content-center col-lg-6'>
                        <img src={our_team} alt="medications" width={350} className=' d-md-block d-lg-none' />
                        <img src={our_team} alt="medications" width={650} className='d-none d-lg-block' />
                    </Col>
                </Row>

                <h2 className='section_title mb-5 text-center'>Meet Our Team</h2>


                <Row xs={1} md={3} className="g-4">
                    {doctors.map((doctor, idx) => (
                        <Col key={idx}>
                            <Card className='border-0 rounded-4 shadow mb-5 bg-white rounded'>
                                <Card.Img variant="top" src={doctor.image} />
                                <Card.Body className='d-flex flex-fluid flex-column justify-content-between'>
                                    <Card.Title className='mb-3 fw-bold text-center'>{`${doctor.firstName} ${doctor.lastName}`}</Card.Title>
                                    <Card.Subtitle className="mb-3 text-muted text-center card_subtitle">{doctor.specialization}</Card.Subtitle>
                                    <Card.Text className='mb-4 text-center text-justify'>
                                        {doctor.description}
                                    </Card.Text>
                                    <p className='d-flex justify-content-evenly'>
                                    <Link to={doctor.contacts.phone} ><FaPhoneAlt className='fs-4 icon_out_team'/></Link>
                                    <Link to={doctor.contacts.facebook} ><FaFacebookF className='fs-4 icon_out_team'/></Link>
                                    <Link to={doctor.contacts.linkedin} ><FaLinkedinIn className='fs-4 icon_out_team'/></Link>
                                    {/* <span className='icon_cards p-4 rounded-circle shadow'><FaLinkedinIn className='fs-1'/></span> */}


                                    </p>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )

}

export default OurTeam;