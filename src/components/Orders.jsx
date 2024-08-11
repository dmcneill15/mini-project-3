'use client' // client component, not server rendered
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Container } from 'react-bootstrap';

export default function Orders({ orders }) {
    return (
        <Container className='justify-content-center align-items-center'>
            {orders.map(order => (
            <Row key={order.id} xs={1} sm={2} md={2} className="g-4 justify-content-center">
                    <Col key={order.id} className="g-4 justify-content-center">
                        <Card className="border-light border-2" style={{ marginBottom:'20px'}}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px', fontWeight:'bold'}}><p>Order ID: {order.id}</p></Card.Title>
                                <Card.Text>
                                Customer: {order.customerName}<br></br>
                                Pizza: {order.pizzaType}<br></br>
                                Extra Toppings: {order.extraToppings.join(', ')}<br></br>
                                Qty: {order.quantity}<br></br>
                                Drink: {order.drink}<br></br>
                                Status: {order.status}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            ))}
        </Container >
    )
}

