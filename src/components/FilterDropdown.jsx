'use client' // client component, not server rendered
import { Dropdown} from 'react-bootstrap';

function FilterDropdown({list}) {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">Filter</Dropdown.Toggle>
          {/*<Dropdown.Menu>
            {list.map(item => (
                <Dropdown.Item href="#/action-1">{item.title}</Dropdown.Item>
            ))};
          </Dropdown.Menu>*/}
        </Dropdown>
    )
}

export default FilterDropdown


/*{pizzaData.map(pizza => (
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
                ))} */