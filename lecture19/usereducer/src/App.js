// import logo from './logo.svg';
import './App.css';
import { useReducer} from 'react';

const initaiState = 0;

const reducer = (state,action) =>{
  console.log(state,action);

  if(action.type === "incripent"){
    return state + 1;
  }
  if(action.type === "dicriment"){
    return state - 1;
  }
    return state;
}

function App  (){
  // const[count,setCount] = useState(0);

 const [state,dispatch] = useReducer(reducer,initaiState);
  return(
    <div className="App">
      {state}
      <div>
        <button onClick={()=>dispatch({type:"incripent"})}>increment</button>
        <button onClick={()=>dispatch({type:"dicriment"})}>decrement</button>
      </div>
    </div>
  )
}

export default App;


