import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Component/Home/Home';
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Navbar from "./Component/Navbar/Navbar.jsx"
import Add from "./Component/Add/Add.jsx";
import Editpage from "./Component/editpag/Editpage.jsx";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/editpage/:id" element={<Editpage/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;