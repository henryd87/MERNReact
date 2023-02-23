import React from 'react'

export default function Content() {
    const handleNameChange = () =>{
        const names = ["Bob","Kevin"];
        const int = Math.floor(Math.random()*(names.length))
        return names[int];
      }
  return (
    <main>
        <p>{handleNameChange()}</p>
    </main>
  )
}
