import React from 'react'
import { Item } from './Item'

export const ItemList = ({data = []}) => {
  return (
    data.map(product => <Item key={product.id} info={product}/>)
  )
}
