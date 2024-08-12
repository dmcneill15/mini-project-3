'use client' // client component, not server rendered
import { Button, Card, Col, Row } from 'react-bootstrap';

function PizzaCard({pizzaList}) {
    return (
        <Row xs={1} sm={2} md={4} className="g-4 justify-content-center">
                {pizzaList.map(pizza => (
                    <Col key={pizza.id} className=" custom-col d-flex justify-content-center">
                        <Card className='border-light border-2 text-center' style={{ backgroundColor: '#eeeade', width:'250px' }}>
                            <Card.Img className="mx-auto" style={{ width: '180px', height: 'auto' }} src={pizza.image} />
                            <Card.Body>
                                <Card.Title className='fs-5'>{pizza.title}</Card.Title>
                                <Card.Text>{pizza.price}</Card.Text>
                                <Button type="submit" variant="outline-danger">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </Row>
    )
}

export default PizzaCard