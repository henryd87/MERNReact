import React from 'react'
import ItemList from './ItemList';
export default function Content({items,handleCheck,handleDelete}) {
    
    
  return (
    //The ondoubleClick is used for clicking on the text and not buttons
    <main>
      {items.length ? (<ItemList 
      items={items} 
      handleCheck = {handleCheck}
      handleDelete = {handleDelete} />
      ) : (<p style = {{marginTop:'2rem'}}>Your list is empty</p>)}
    </main>
  )
}
