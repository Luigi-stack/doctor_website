/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardHomePage(props) {
    return (
        <>
            <Card className='border-0 rounded-4 shadow p-3 mb-5 bg-white rounded'>
                <Card.Body className='d-flex flex-column justify-content-between align-items-center' >
                    <Container className='d-flex justify-content-center'>
                        {/* <img className='shadow mb-5' src={props.Icons} alt={props.Iconsalt} width={75} height={75}/> */}
                    <span className='icon_cards mb-5 p-4 rounded-circle shadow'>{props.Icons}</span>
                    </Container>
                    <Card.Title className='mb-3 text-center'>{props.CardTitle}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted text-center card_subtitle">{props.CardSubtitle}</Card.Subtitle>
                    <Card.Text className='mb-4 text-center text-justify'>
                        {props.CardText}
                    </Card.Text>
                    <Button href={props.Href} className="rounded-1 px-4 py-2" variant="outline-secondary">{props.ButtonCard}</Button>{' '}
                </Card.Body>
            </Card>
        </>
    )
}

export default CardHomePage;