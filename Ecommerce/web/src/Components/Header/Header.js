import React from 'react'
import logo from '../asset/logo.png'
import photos from '../asset/photo.jpg'
import '../Header/header.css'

const Header = () => {
  return (
    <>

      <header className='main-header  container mx-auto mt-2 justify-evenly items-center '>
        <div className='logo flex justify-between items-center'>

          {/* <i class="fa-solid fa-bars items-center menu-icon"></i> */}
          <a href="#logo" className='ml-2'>
            <img src={logo} alt="" />
          </a>

          <div className='search flex border-2 w-[40%] h-10 rounded-md'>

            <div className='items-center flex border-2 w-[100%] h-[100%]'>

              {/* <label htmlFor="search-bar" className='mr-2 absolute pr-1'> */}
              <i class="fa-solid fa-magnifying-glass ml-3"></i>
              {/* </label> */}

              <input type="text" placeholder='Search products..' className='w-[100%] ml-2 text-1xl' />

            </div>

          </div>

          <div className=' flex items-center'>

            <div class="dropdown0">
              <button class="dropbtn1 flex  items-center border-2">
                <img src={photos} alt="" className='mr-2 ' />
                English
                <i class="fa-solid fa-angle-down "></i>
                </button>
              <div class="dropdown0-content">
                <a href="#">Arabic </a>
                <a href="#">Spanish</a>
                <a href="#">Mandarin</a>
              </div>
            </div>

        

            <div className='btn-2 p-2.5 border-2 border-gray-500 ml-2'>
              <select name="border" id="" className='  '>
                <option value="#">USD</option>
                <option value="#">YEAN</option>
                <option value="#">EURO</option>
              </select>
            </div>

            <div className='icons flex'>
              <button className='icon01 text-xl relative mx-3'>
                <i class="fa-solid fa-cart-shopping"></i>

              </button>
              <button className='icon02 text-xl mx-3'>
                <i class="fa-regular fa-user"></i>
              </button>
              <button className='icon03 text-xl relative mx-3'>
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>



      </header>


    </>

  )
}

export default Header;