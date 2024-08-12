'use client' // client component, not server rendered
import { Button, Card, Col, Row, Container, CardFooter } from 'react-bootstrap';

function PizzaCard({ pizzaList }) {
    return (
        <Container className='justify-content-center align-items-center'>
            <Row xs={1} sm={2} md={4} className="justify-content-center">
            {pizzaList.map(pizza => (
                    <Col key={pizza.id} className="g-4 justify-content-center">
                        <Card className='border-light border-2 text-center' style={{ backgroundColor: '#eeeade'}}>
                            <Card.Img className="mx-auto pt-2" style={{ width: '180px', height: 'auto' }} src={pizza.image} />
                            <Card.Body>
                                <Card.Title className='fs-5'>{pizza.title}</Card.Title>
                                <Card.Text>{pizza.price}</Card.Text>
                               <CardFooter style={{ backgroundColor: '#eeeade'}}> <Button type="submit" variant="outline-danger">Add to Cart</Button></CardFooter>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}

export default PizzaCard