import { useState } from 'react';
import Filter from '../components/Filter/Filter';
import Products from '../components/Product List/Products';

export default function Catalog() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filtered, setFiltered] = useState([]);

  return (
    <>
      <Filter setIsFiltered={setIsFiltered} setFiltered={setFiltered} />
      <Products isFiltered={isFiltered} filtered={filtered} />
    </>
  );
}
