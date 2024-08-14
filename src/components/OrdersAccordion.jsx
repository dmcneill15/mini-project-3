'use client' // client component, not server rendered
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Container, Accordion } from 'react-bootstrap';

export default function OrdersAccordion({ orders }) {
    if (orders.length === 0) {
        return (
            <Container className='justify-content-center align-items-center'>
                <Row xs={1} sm={2} md={2} className="g-4 justify-content-center">
                    <Col className="g-4 justify-content-center">
                        <Card className="border-light border-2">
                            <Card.Body>
                                <Card.Title className="h6"><p>No orders placed here yet...</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="d-flex justify-content-center">
            <Accordion className="custom-width">
                {orders.map(order => (
                    <Accordion.Item key={order.id} eventKey={order.id} className="border-light border-2">
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