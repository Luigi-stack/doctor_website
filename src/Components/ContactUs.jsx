import { Container, Row, Col } from 'react-bootstrap';
import contact_us from '../assets/contact_us.png'
import Form from 'react-bootstrap/Form';



function ContactUs() {
    return (
        <>
            <Container className='mt-4 mb-5'>
                <Row className='mb-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-start col-lg-6'>
                        <h1 className='take_care mb-3'>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem dicta quibusdam voluptate veniam dignissimos amet sit expedita facilis illo.</p>
                    </Col>

                    <Col className='d-flex justify-content-center col-lg-6'>
                        <img src={contact_us} alt="medications" width={350} className=' d-md-block d-lg-none' />
                        <img src={contact_us} alt="medications" width={650} className='d-none d-lg-block' />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 className='section_title'>VitalCare</h3>
                        <p className='text-secondary'>567 Oak Street, Metropolitan Plaza, <br /> Springfield, United States.</p>
                        <h4>monday - friday</h4>
                        <p className='text-secondary'>8 am - 3 pm</p>
                        <h5>Call us:</h5>
                        <p className='text-secondary'>+78 (0) 555-1234</p>
                        <h5>or write:</h5>
                        <p className='text-secondary'>vitalcare@noreply.com</p>
                    </Col>

                    <Col>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control className='border-0 rounded-4 shadow bg-white rounded' placeholder="Your Name" />
                                </Col>
                                <Col>
                                    <Form.Control type="email" placeholder="Your E-mail" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control placeholder="Message" as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default ContactUs;