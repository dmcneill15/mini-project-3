'use client' // client component, not server rendered
import { Button, Card, Col, Row, Container, CardFooter } from 'react-bootstrap';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PizzaCard({ pizzaList }) {
    return (
        <Container className='justify-content-center align-items-center'>
            <Row xs={1} sm={2} md={4} className="justify-content-center">
            {pizzaList.map(pizza => (
                    <Col key={pizza.id} className="g-4 justify-content-center">
                        <Card className='border-light border-2 text-center custom-bg-color'>
                            <Card.Img className="mx-auto pt-2 pizza-img-size pizza-img-size" src={pizza.image} />
                            <Card.Body>
                                <Card.Title className='fs-5'>
                                    {pizza.title}
                                    {pizza.tag === 'favourite' ? <FavoriteIcon className="custom-icon-style" /> : null}
                                    {pizza.tag === 'spicey' ? <LocalFireDepartmentIcon className="custom-icon-style" /> : null}
                                </Card.Title>
                                <Card.Text>{pizza.price}</Card.Text>
                               <CardFooter className="custom-bg-color"> <Button type="submit" variant="outline-danger">Add to Cart</Button></CardFooter>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}

export default PizzaCard