import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Active from './Components/Active';
import Contact from './Components/Contact';
import Id from './Components/Id';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Menu/>} />
      {/* <Route path='/menu' element={<Menu/>} /> */}
      <Route path='/contact' element={<Contact/>} />
      <Route path='/active' element={<Active/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );

}

export default App;
