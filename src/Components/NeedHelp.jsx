import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import call_us from '../assets/call_us.jpg'
import call_us_md from '../assets/call_us_md.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';





function NeedHelp () {
    return (
        <>
        <Container fluid className='mb-5'>
            <Row className='d-flex align-items-center'>
                <Col sm={12} md={6} className='p-0'>
                <img src={call_us} alt="stethoscope" width={700} className='img-fluid d-none d-lg-block' />
                <img src={call_us_md} alt="stethoscope" className='img-fluid d-md-block d-lg-none' />
                </Col>

                <Col sm={12} md={6} className='ps-5'>
                <h2 className='section_title_need_help mb-4'>Need an <br />Emergency Help? <br /> Call Us!</h2>
                <Link to='' className='text-decoration-none text-dark fs-2' ><FaPhoneAlt/> 555-1234 </Link> <br />
                <Button href="/contact" className='custom-btn border-0 rounded-1 px-4 py-2 mt-4'>Contact US!</Button>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default NeedHelp;