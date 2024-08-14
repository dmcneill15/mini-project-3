'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PizzaCard from "@/components/PizzaCard";
import FilterDropdown from '@/components/FilterDropdown';
import pizzaData from '@/data/pizzaData';

export default function Home() {

  const [filteredPizzas, setFilteredPizzas] = useState(pizzaData);

  const handleFilterChange = (selectedFilter) => {
    if(selectedFilter == "All"){
      setFilteredPizzas(pizzaData);
    }
    else{
      const filtered = pizzaData.filter(pizza => pizza.title.includes(selectedFilter));
      setFilteredPizzas(filtered);
    }
  };

  return (
    <main>
      <section>
        <div className="title-container">
          <h1 className="slogan">Slices worth melting for...</h1>
          <p className="h5 m-0">Order Online</p>
        </div>
        <div className="pb-2 d-flex justify-content-end custom-mr-5em">
          <FilterDropdown list={pizzaData} onFilterChange={handleFilterChange}/>
        </div>
      </section>
      <div>
        <PizzaCard pizzaList={filteredPizzas}/>
      </div>
    </main>
  );
}
