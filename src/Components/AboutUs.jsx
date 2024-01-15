import aboutus from '../assets/aboutus.png'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function AboutUs() {

    return (
        <>
            <Container className='mb-5'>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <img src={aboutus} alt="doctor" width={350} className='d-md-none' />
                        <img src={aboutus} alt="doctor" width={700} className='d-none d-md-block d-lg-none' />
                        <img src={aboutus} alt="doctor" width={625} className='d-none d-lg-block' />
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-start ms-md-4'>
                        <h2 className='section_title mb-4'>
                            Wathever your healthcare needs, <br /> we are here to help
                        </h2>
                        <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, lorem voluptatem impedit assumenda, voluptatibus numquam nobis doloremque impedit.</p>
                        <Button className='custom-btn border-0 rounded-1 px-4 py-2'>About Us</Button>

                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default AboutUs;