'use client' // client component, not server rendered
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Container, Accordion } from 'react-bootstrap';

export default function OrdersAccordion({ orders }) {
    if (orders.length === 0) {
        return (
            <Container className='justify-content-center align-items-center'>
                <Row xs={1} sm={2} md={2} className="g-4 justify-content-center">
                    <Col className="g-4 justify-content-center">
                        <Card className="border-light border-2" style={{ marginBottom: '20px' }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}><p>No Orders</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="align-items-center">
            <Accordion className="justify-content-center bg-transparent">
                {orders.map(order => (
                    <Accordion.Item key={order.id} eventKey={order.id} className="border-light border-2 bg-transparent">
                        <Accordion.Header>Order ID: {order.id}</Accordion.Header>
                        <Accordion.Body>
                            Customer: {order.customerName}<br></br>
                            Pizza: {order.pizzaType}<br></br>
                            Extra Toppings: {order.extraToppings.join(', ')}<br></br>
                            Qty: {order.quantity}<br></br>
                            Drink: {order.drink}<br></br>
                            Status: {order.status}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}