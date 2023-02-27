import React from 'react'

const Footer = ({length}) => {
  return (
    <div class="footer">
      <h3>{length} List {length===1? "Item" :"Items"} </h3>
    </div>
  )
}
//We can reload because they're not loading from local storage.
export default Footer
