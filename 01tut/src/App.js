import Header from "./Header";
import Content from "./Content"
import {useState} from 'react'
function App() {
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
    <div className="App">
      <Header title="Grocery list"/>
      <Content items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
    </div>
  );
}
Header.defaultProps = {
  title:"Default title"
}
//In case our props don't work.

//We have a problem, we need to extract data from Content to Footer, but we can't just send it
//It needs to go through some other form.

export default App;


