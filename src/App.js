import React from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  
  function onToggleItem(id){
    setItems((prevItems) => prevItems.map((item) => item.id === id ? {...item,packed: !item.packed} : item))
  }

  function clearItems(){
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if(confirm) setItems([]);
  }
  return (
    <div className="App">
      <Logo></Logo>
      <Form addItem={handleAddItems}></Form>
      <PackingList items={items} onDeleteItem={handleRemoveItem} onToggleItem={onToggleItem} clearItems={clearItems} ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}


export default App;
