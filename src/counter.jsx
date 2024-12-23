import { useState } from "react";

export default function Counter(){
    const [count, setCount] =useState(0);

  function handleAdd(){
    const newCount=count+1;
    setCount(newCount);
  }

  function handleReduce(){
    const newCount=count-1;
    setCount(newCount);
  }

    return(
        <div style={{border: '3px solid yellow'}}>
            <h3>counter:{count}</h3>
            <button onClick={handleAdd}>Add count</button>
            <button onClick={handleReduce}>Reduce count</button>
        </div>
    )
}