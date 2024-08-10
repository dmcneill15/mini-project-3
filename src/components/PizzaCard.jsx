'use client' // client component, not server rendered

import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import Image from "next/image";

const pizzaData = [
    {
        id: 1,
        image: '/images/special.png',
        title: 'Three Cheese Special',
        price: '$24.99',
    },
    {
        id: 2,
        image: '/images/margherita.png',
        title: 'Margherita',
        price: '$14.99',
    },
    {
        id: 3,
        image: '/images/delux.png',
        title: 'Delux',
        price: '$21.99',
    },
    {
        id: 4,
        image: '/images/chicken.png',
        title: 'Chicken Supreme',
        price: '$19.99',
    },
    {
        id: 5,
        image: '/images/spicey.png',
        title: 'Spicey Slice',
        price: '$21.99',
    },
    {
        id: 6,
        image: '/images/pepperoni.png',
        title: 'Pepperoni',
        price: '$19.99',
    }
]

function PizzaCard() {
    return (
        <Row xs={1} sm={2} md={4} className="g-4 justify-content-center">
                {pizzaData.map(pizza => (
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