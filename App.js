import './App.css';
import  {useState} from 'react';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/Cardprovider';


function  App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const ShowCartHandler=()=>{
    setCartIsShown(true);
  }
  const HidecartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HidecartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
      <Meals />
      </main>

    </CartProvider>

  );
  
};
export default App;










//import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import TodoLists from './TodoLists';

// function App() {
//   const [currentItem, setCurrentItem]=useState("");
//   const [itemList,updateItemList]=useState([]);

//   const onChangeHandler = (event) => { 
//     setCurrentItem(event.target.value);
//   };

//   const addItemToList = () => {
//     updateItemList([...itemList,{ item: currentItem, key: Date.now()}]);
//     setCurrentItem("");
//   };

//   return (
//     <div className="App">
//       <div> 
//         <div> TODO LIst</div>
//         <input type="text"
//         value={currentItem}
//          placeholder='add item' 
//          onChange={onChangeHandler}/>
//         <button onClick={addItemToList} > + </button>


// </div>
// <TodoLists
// itemList={itemList} 
// updateItemList={updateItemList}/>
// </div>
//   );
// }

//export default App;
