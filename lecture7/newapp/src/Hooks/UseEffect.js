import { useState, useEffect } from "react";

function UseEffect() {
  const [increment, setincrement] = useState(0);
  const [dicrement, setdicrement] = useState(0);

  useEffect(()=>{
    console.log("useEffect run every render");
  })

  useEffect(()=>{
    console.log("useEffect run one time when page is refresh or load time");
  })

  useEffect(()=>{
    console.log("useEffect run one time when page is refresh or load time");
  },[dicrement]);


  const incrementFun = () => {
    setincrement (increment+1)
  };

  const dicrementFun = () => {
   setdicrement(dicrement-1)
  };

  return (
    <div className="">
      <h1  className="text-3xl">UseEffect</h1>
      <h1>{increment}</h1>
      <button onClick={incrementFun} className="border-0  border-collapse bg-sky-500/75 rounded-2xl p-2">increment</button>
      <h1>{dicrement}</h1>
      <button onClick={dicrementFun} className="border-0  border-collapse bg-sky-500/75 rounded-2xl p-2">dicrement</button>
    </div>
  );
}

export default UseEffect;