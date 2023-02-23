import React from 'react'
import {useState} from 'react';
export default function Content() {
    const [name,setName] = useState();
    let [count,setCount]=useState(0);
    const handleNameChange = () =>{
        const names = ["Bob","Kevin","George","Katie","Mike"];
        const int = Math.floor(Math.random()*(names.length))
        setName(names[int]);
      }
      const handleClick = () =>{
        console.log('You clicked');
        handleNameChange()
      }
      const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
      }
      const handleClick3 = (e) =>{
        console.log(e.target);
      }
      //This takes in "e" the event handler
      const raise = () =>{
        count = count+1;
        setCount(count);
      }
  return (
    //The ondoubleClick is used for clicking on the text and not buttons
    <main>
      
        <p onDoubleClick={handleClick}>Hello {name}</p>
        <button onClick={handleClick}>Click to change</button>
        <button onClick={()=>handleClick2('Dave')}>Click</button>
        <button onClick={(e)=>handleClick3(e)}>Click MEEE</button>
        <button onClick={raise}>Raise the number</button>
        <hr></hr>
        <p>{count}</p>
    </main>
  )
}
