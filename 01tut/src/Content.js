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
    
  return (
    //The ondoubleClick is used for clicking on the text and not buttons
    <main>
      <ul>
        {items.map((item)=>(
          //Each list item needs a key, helps React identify changes
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked}/>
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0"/>
          </li>
        ))}
      </ul>
    </main>
  )
}
