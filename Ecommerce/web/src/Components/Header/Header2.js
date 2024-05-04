import React from 'react'
import Categories from '../Home/Categories'

function Header2() {
    return (
        <>

            <div className='btn-red pl-2 flex items-center justify-between mx-auto mt-2 w-[90%]'>

                <div class="dropdown">
                    <button class="dropbtn" className='text-sm hover:text-rose-600'>
                        Home
                        <i class="fa-solid fa-angle-down ml-1"></i>
                    </button>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="#" className='hover:text-rose-600'>Wooden Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Fashion Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Furniture Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Cosmetics Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Food Grocery</a></li>
                        </ul>
                    </div>
                </div>

                <div class="dropdown pl-3">
                    <button class="dropbtn" className='text-sm hover:text-rose-600'>
                        Shop
                        <i class="fa-solid fa-angle-down ml-1"></i>
                    </button>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="" className='hover:text-rose-600'>Shope 2</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope Details</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope Details 2</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope Location</a></li>
                            <li><a href="" className='hover:text-rose-600'>Cart</a></li>
                            <li><a href="" className='hover:text-rose-600'>Sing in</a></li>
                            <li><a href="" className='hover:text-rose-600'>Checkout</a></li>
                            <li><a href="" className='hover:text-rose-600'>Wishlist</a></li>
                        </ul>
                    </div>
                </div>

                <div class="dropdown pl-3">
                    <button class="dropbtn" className='text-sm hover:text-rose-600'>
                        Pages
                        <i class="fa-solid fa-angle-down ml-1"></i>
                    </button>
                    <div class="dropdown-content ">
                        <ul >
                            <li ><a href="" className='hover:text-rose-600'>Shope Filters V1</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope Filters V2</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope sidebar</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope Right  sidebar</a></li>
                            <li><a href="" className='hover:text-rose-600'>Shope List View</a></li>
                        </ul>
                    </div>
                </div>

                <div class="dropdown pl-3">
                    <button class="dropbtn" className='text-sm hover:text-rose-600'
                    >Blog <i class="fa-solid fa-angle-down ml-1"></i>
                    </button>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="" className='hover:text-rose-600'>Blog</a></li>
                            <li><a href="" className='hover:text-rose-600'>Blog Details</a></li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown pl-2">
                    <button class="dropbtn" className='text-sm hover:text-rose-600' >
                        Contact</button>
                </div>






                <div className='home-bar2  pl-5 flex '>

                    <div className='header-call flex'>
                        <a href="#" className='text-pink-500 hover:text-pink-500 '><i class="fa-solid fa-phone-flip font-s"></i></a>
                        <p className='font-s font-bold pl-2 hover:text-pink-500'>908.569.267.008</p>
                    </div>

                    <div className='header-map flex pl-2'>
                        <a href="#" className='text-pink-500'><i class="fa-solid fa-location-dot font-s"></i></a>
                        <p className='font-s font-bold pl-2 text-sm  hover:text-pink-500'>Find Store</p>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Header2
