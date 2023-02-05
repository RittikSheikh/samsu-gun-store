import { useState } from 'react';
import './App.css';
import AllGun from './components/AllGun/AllGun';
import Header from './components/Header/Header';

function App() {

  const [count,setCount] = useState(0)

  const increaseCount=()=>{
    setCount(count+1);
  }

  return (
    <div>
      <Header count={count}/>
      <AllGun count={increaseCount}/>
    </div>
  );
}

export default App;
