import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";



function Need_help () {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                <img src="" alt="" />
                </Col>

                <Col>
                <h2>Need an Emergency Help?</h2>
                <h3>Call US!</h3>
                <span><FaPhoneAlt/>555-1234</span>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Need_help;