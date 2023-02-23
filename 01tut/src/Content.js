import React from 'react'

export default function Content() {
    const handleNameChange = () =>{
        const names = ["Bob","Kevin"];
        const int = Math.floor(Math.random()*(names.length))
        return names[int];
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
  return (
    //The ondoubleClick is used for clicking on the text and not buttons
    <main>
      
        <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
        <button onClick={handleClick}>Hello {handleNameChange()}</button>
        <button onClick={()=>handleClick2('Dave')}>Click</button>
        <button onClick={(e)=>handleClick3(e)}>Click MEEE</button>
    </main>
  )
}
