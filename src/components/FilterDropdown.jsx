'use client' // client component, not server rendered
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap';

function FilterDropdown({ pizzaList, onFilterChange }) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleSelect = (eventKey) => {
        setSelectedFilter(eventKey);
        onFilterChange(eventKey);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">Filter</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                {pizzaList.map(item => (
                    <Dropdown.Item key={item.id} eventKey={item.title}>{item.title}</Dropdown.Item>
                ))};
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterDropdown