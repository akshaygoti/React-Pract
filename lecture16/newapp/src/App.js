import './App.css';
import { createContext } from "react";
import CompA from './Component/CompA'

const Context = createContext()

function App(){
  return(
  <div>
    <Context.Provider value={"Boy"}>
        <CompA/>
    </Context.Provider>
  </div>)
}

export {Context};
export default App; 
