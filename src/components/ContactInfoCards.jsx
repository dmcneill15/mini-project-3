'use client' // client component, not server rendered

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row, Container, Form } from 'react-bootstrap';

import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactInfoCards() {
    return (
        <Container className='justify-content-center align-items-center'>
            <Row xs={1} sm={2} md={3} className="justify-content-center">
                <Col className="justify-content-center">
                    <Card className='border-0'>
                        <Card.Body>
                            <Card.Title className="fw-bold h5"><p>We are here to help and answer any questions that you might have.</p></Card.Title>
                            <Card.Subtitle className="mb-2 fw-bold"><p>Here's how to reach us:</p></Card.Subtitle>
                            <Card.Text><PinDropIcon className='icon' fontSize="small" />123 Mountain Road, Auckland</Card.Text>
                            <Card.Text><PhoneIphoneIcon className='icon' fontSize="small" />+64 21 345678</Card.Text>
                            <Card.Text><EmailIcon className='icon' fontSize="small" />threecheeses@pizzanow.co.nz</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="justify-content-center">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button type="submit" variant="danger">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}