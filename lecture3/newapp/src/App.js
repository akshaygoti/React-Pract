// import Pera from "./Componets/Pera";
import "./App.css";
import "./Componets/Arrow.js"
import "./index.css"

import {Pera1,Pera2,Pera3,Pera4,Pera5,Pera6} from "./Componets/Pera"
import Img from './Components/Img.js'
import Arrow from "./Components/Arrow.js";

import Task from "./Components/Task01.js";


function App() {
  return <>
   <div className="App"> 

    {/* <h1 className="text-5xl">hello 1</h1>
    <h1 className="text-5xl">hello 2</h1>
    <h1 className="text-5xl">hello 3</h1>
    <h1 className="text-5xl">hello 4</h1>
    <h1 className="text-5xl">hello 5</h1> */}

   
 

    
    {/* <Index></Index> */}
    {/* <Pera1/>
    <Pera2/>
    <Pera3/>
    <Pera4/>
    <Pera5/>
    <Pera6/>  
    <Img/>
  <Arrow/> */}
  <Task01/>
     </div>
  </>
}

export default App;