import React, { useMemo, useState } from 'react'
import React from 'react';

function Usememo() {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(2);

    const multiFunction = useMemo(
        function multifun (){
            console.log("multiple time calling");
            return count * 5;   
        },[count]
    )
  return (
    <div className=' '>
        
        <h4>This hook memo</h4>

        <h1>{count}</h1>

        <button onClick={()=> setCount (count+1)}>Click me</button> <br />

        <h1>{multiFunction}</h1>
        <br />
        <h1>{item}</h1>
        <button onClick={()=> setItem(item*1)}>Click me item</button> <br />

    </div>
  )
}

export default Usememo
