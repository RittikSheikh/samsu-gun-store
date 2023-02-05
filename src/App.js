import { useState } from 'react';
import './App.css';
import AllGun from './components/AllGun/AllGun';
import Header from './components/Header/Header';

function App() {

  const [count,setCount] = useState(0)
  const [price,setPrice] = useState(0);

  const setPrices=(newPrice)=>{
    const number = parseInt(newPrice);
    setPrice(price+number);
  }

  const increaseCount=()=>{
    setCount(count+1);
  }

  return (
    <div>
      <Header count={count} price={price}/>
      <AllGun count={increaseCount} price={setPrices}/>
    </div>
  );
}

export default App;
