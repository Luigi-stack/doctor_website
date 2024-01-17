import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";


function Footer() {
    return (
        <>
            <Container fluid className='bg-white p-5 pb-0'>
                <Row>
                    <Col md={12} lg={3} className='mb-4 mb-md-0'>
                        <h3 className='section_title fs-2'>VitalCare</h3>
                    </Col>

                    <Col md={4} lg={3} className='mb-4 mb-md-0'>
                        <ListGroup>
                            <ListGroup.Item className='border-0 bg-transparent text-secondary'>→ <Link to='#' className='link-underline-light text-secondary'>Etiam dapibus</Link></ListGroup.Item>
                            <ListGroup.Item className='border-0 bg-transparent text-secondary'>→ <Link to='#' className='link-underline-light text-secondary'>Nunc sit</Link></ListGroup.Item>
                            <ListGroup.Item className='border-0 bg-transparent text-secondary'>→ <Link to='#' className='link-underline-light text-secondary'>Lorem ipsum</Link></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4} lg={3} className='mb-4 mb-md-0'>
                        <ListGroup>
                            <ListGroup.Item className='border-0 bg-transparent text-secondary'>→ <Link to='#' className='link-underline-light text-secondary'>Etiam tempor</Link></ListGroup.Item>
                            <ListGroup.Item className='border-0 bg-transparent text-secondary'>→ <Link to='#' className='link-underline-light text-secondary'>Lorem ipsum</Link></ListGroup.Item>
                            <ListGroup.Item className='border-0 bg-transparent text-secondary'>→ <Link to='#' className='link-underline-light text-secondary'>Nunc sit</Link></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4} lg={3}>
                        <h6>CALL US</h6>
                        <p className='text-secondary'>+78 (0) 555-1234</p>
                        <h6>OR WRITE</h6>
                        <p className='text-secondary'>vitalcare@noreply.com</p>
                    </Col>
                    <hr className='my-3' />
                    <p className='text-secondary text-center fs-6 mb-1'>© Luigi Iossa 2024</p>
                    <p className='text-secondary text-center fs-6'>
                        <Link to='https://github.com/Luigi-stack/' className='text-secondary'><FaGithub /></Link>
                        <Link to='https://www.linkedin.com/in/luigi-iossa-fullstack-developer/' className='mx-3 text-secondary'><FaLinkedinIn /></Link>
                        <Link to='https://luigi-iossa.netlify.app' className='text-secondary'><CgWebsite /></Link>
                    </p>
                </Row>
            </Container>
        </>
    )
}

export default Footer;