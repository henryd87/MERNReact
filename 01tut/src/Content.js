import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
import {useState} from 'react';
export default function Content() {
    const [items,setItems] = useState([{
      id:1,
      checked:false,
      item:"One half pound bag of cocoa"
    },
  {
    id:2,
    checked:false,
    item:"Item2"
  },
{
  id:3,
  checked:false,
  item:"item 3"
}]);
  const handleCheck = (id) =>{
    const listItems = items.map(
      (item)=>item.id===id ? {...item,checked:!item.checked} : item);
      setItems(listItems);
      localStorage.setItem('shoppinglist',JSON.stringify(listItems));
  }
  const handleDelete = (id) =>{
    const listItems = items.filter((item)=>item.id!==id);
    setItems(listItems);
      localStorage.setItem('shoppinglist',JSON.stringify(listItems));
  }
    
  return (
    //The ondoubleClick is used for clicking on the text and not buttons
    <main>
      {items.length ? (
      <ul>
        {items.map((item)=>(
          //Each list item needs a key, helps React identify changes
          <li className="item" key={item.id}>
            <input type="checkbox" onChange={()=> handleCheck(item.id)} checked={item.checked}/>
            <label
            style={(item.checked) ? {textDecoration:'line-through'}:null}
            onDoubleClick = {()=>handleCheck(item.id)}
            >{item.item}
            </label>
            <FaTrashAlt role="button" onClick={()=>handleDelete(item.id)} tabIndex="0"/>
          </li>
        ))}
      </ul> ) : (<p style = {{marginTop:'2rem'}}>Your list is empty</p>)}
    </main>
  )
}
