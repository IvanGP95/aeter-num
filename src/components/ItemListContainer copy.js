import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([]);

  const {categoryId} = useParams;

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await fetch("https://fakestoreapi.com/products" +categoryId);
        const data = await response.json();
        setProducts(data);
      }, 1000);
    };
    fetchData();
  }, []);


  return (
    <div className=' bg-gray-100 flex flex-wrap items-center justify-center gap-2 p-10'>
      <h2>{greeting}</h2>
      <ItemList data={products} className="" />
    </div>
  )
}

export default ItemListContainer