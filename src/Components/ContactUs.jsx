import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import contact_us from '../assets/contact_us.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ContactUs() {
   
    useEffect(() => {
        AOS.init();
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log('message sent')
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Container className='mt-4 mb-5'>
                <Row className='mb-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-start col-lg-6'>
                        <h1 className='take_care mb-3'>Contact Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                            exercitationem dicta quibusdam voluptate veniam dignissimos amet
                            sit expedita facilis illo.
                        </p>
                    </Col>

                    <Col className='d-flex justify-content-center col-lg-6'>
                        <img
                            src={contact_us}
                            alt="medications"
                            width={350}
                            className=' d-md-block d-lg-none'
                        />
                        <img
                            src={contact_us}
                            alt="medications"
                            width={650}
                            className='d-none d-lg-block'
                        />
                    </Col>
                </Row>

                <Row className='mx-md-5' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Col sm={12} md={4}>
                        <h3 className='section_title fs-2'>VitalCare</h3>
                        <p className='text-secondary'>
                            567 Oak Street, <br /> Springfield, United States.
                        </p>
                        <h4>monday - friday</h4>
                        <p className='text-secondary'>8 am - 3 pm</p>
                        <h5>Call us:</h5>
                        <p className='text-secondary'>+78 (0) 555-1234</p>
                        <h5>or write:</h5>
                        <p className='text-secondary'>vitalcare@noreply.com</p>
                    </Col>

                    <Col sm={12} md={8}>
                        <h2 className='section_title mb-4'>Get in Touch</h2>
                        <Form onSubmit={handleSendMessage}>
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Control
                                        className='border-0 shadow bg-white'
                                        placeholder='Your Name'
                                        required
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        className='border-0 shadow bg-white'
                                        type='email'
                                        placeholder='Your E-mail'
                                        required
                                    />
                                </Col>
                            </Row>
                            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                                <Form.Control
                                    className='border-0 shadow bg-white'
                                    placeholder='Subject'
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='exampleForm.ControlTextarea1'
                            >
                                <Form.Control
                                    className='border-0 shadow bg-white'
                                    placeholder='Message'
                                    as='textarea'
                                    rows={3}
                                    required
                                />
                            </Form.Group>
                            <Button type='submit' className='custom-btn border-0 rounded-1 px-4 py-2'>
                                Invia un messaggio
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Message has been sent successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactUs;