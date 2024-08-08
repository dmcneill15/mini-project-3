'use client' // client component, not server rendered

import { Button, Card, Col, Row } from 'react-bootstrap';

const pizzaData = [
    {
        id: 1,
        image: 'Pizza image',
        title: 'Three Cheese Special',
        price: '$24.99',
    }, //
    {
        id: 2,
        image: 'Pizza image',
        title: 'Margherita',
        price: '$14.99',
    },
    {
        id: 3,
        image: 'Pizza image',
        title: 'Delux',
        price: '$21.99',
    }
]

function PizzaCard() {

    return (
        
        <Row xs={2} md={6} className="g-4 justify-content-center">
                {pizzaData.map(pizza => (
                    <Col key={pizza.id} className="">
                        <Card className='border-light border-2 text-center justify-content-center' style={{ backgroundColor: '#eeeade' }}>
                            <Card.Img className="mx-auto" style={{ width: '180px', height: 'auto' }} src="/images/roma.png" />
                            <Card.Body>
                                <Card.Title className='fs-5'>{pizza.title}</Card.Title>
                                <Card.Text>{pizza.price}</Card.Text>
                                <button type="button" class="btn btn-outline-danger">Add to Cart</button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                ))}
        </Row>
        
    )
}

export default PizzaCard