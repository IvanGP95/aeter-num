import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [details, setDetails] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
          setTimeout(async () => {
            const response = await fetch("https://fakestoreapi.com/products/" +itemId);
            const data = await response.json();
            setDetails(data);
          }, 1);
        };
        fetchData();
      }, []);

  return (
    <ItemDetail details={details}/>
  )
}

export default ItemDetailContainer