import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Router from './Components/Router';
import Id from './Components/Id';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Active from './Components/Active';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router/>
        <Routes>
          <Route path='/' element={<Id/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/active' element={<Active/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
