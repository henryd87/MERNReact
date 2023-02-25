import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
export default function Content({items,handleCheck,handleDelete}) {
    
    
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
            >{item.item}</label>
            <FaTrashAlt role="button" onClick={()=>handleDelete(item.id)} tabIndex="0"/>
          </li>
        ))}
      </ul> ) : (<p style = {{marginTop:'2rem'}}>Your list is empty</p>)}
    </main>
  )
}
