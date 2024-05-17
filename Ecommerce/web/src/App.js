// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

// header faile link
import Header from "./Components/Header/Header";

// footer faile link
import Footer from "./Components/Footer/Footer";

import Header2 from "./Components/Header/Header2";

import Wishlist from "./Components/Home/Wishlist";

import Homepage from "./Components/Pages/Homepages/Homepage";

import Log from "./Components/Home/Log";

import Sign from "./Components/Home/Sign"

import ShopDetails from "./Components/Home/ShopDetails";

import Contact from "./Components/Home/Contact";

import About from "./Components/Home/About";

import Blog from "./Components/Home/Blog";

import Cart from "./Components/Home/Cart";

import Error from "./Components/Home/Error";

import Shope from "./Components/Home/Shope";

import Shop2 from "./Components/Home/Shop2";

import ShopDetails2 from "./Components/Home/ShopDetails2";

// redux
import { Provider } from "react-redux";
import Store  from "./Store"


function App() {
  return (

    <>
    <div className="App">
    
    <Provider store={Store}>

      <BrowserRouter>
        <Header />
        <Header2 />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/ShopDetails" element={<ShopDetails/>}/>
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/Error" element={<Error/>}></Route>
          <Route path="/Shope" element={<Shope/>}></Route>
          <Route path="/Shop2" element={<Shop2/>}></Route>
          <Route path="/ShopDetails2" element={<ShopDetails2/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      </Provider>

    </div>

    </>


  );
}

export default App;
