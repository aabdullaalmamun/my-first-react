import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Friends from './friends'
function App() {

  function handleClick(){
    alert('button clicked');
  }

  const addFive=(num)=>{
    alert(num+5);
  }


  return (
    <>
      <h3>The first React Project</h3>
      {/* useEffect */}
      <Friends> </Friends>
      
        {/* state hook */}
      <Counter></Counter>

      <button onClick={handleClick}>click me</button>

      <button onClick={()=>{
        alert('click 2 button clicked')
      }}>click 2</button>

      <button onClick={()=>{addFive(3)}}>click3</button>

    </>
  )
}

export default App
