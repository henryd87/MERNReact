import React from 'react'
import LineItem from './LineItem'
const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <div>
      <ul>
        {items.map((item)=>(
          //Each list item needs a key, helps React identify changes
          <LineItem item={item} handleCheck={handleCheck} handleDelete={handleDelete}
          key={item.id}/>
        ))}
      </ul> 
    </div>
  )
}

export default ItemList
