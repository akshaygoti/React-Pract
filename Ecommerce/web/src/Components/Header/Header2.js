import React from 'react'

import Categories from '../Categories/Categories'

import { Link , useNavigate} from 'react-router-dom'

function Header2() {
    const navigate = useNavigate();
    return (
        <>

            <div className='btn-red pl-2 flex items-center justify-between mx-auto mt-2 w-[90%]'>

                <Categories />

                <div class="dropdown">
                    <ul class="dropbtn" className='text-sm hover:text-rose-600'>
                        <li >
                            <Link to="/" className='p-10 font-semibold'>
                                Home
                                <i class="fa-solid fa-angle-down ml-1"></i>
                            </Link>

                        </li>

                    </ul>
                    <div class="dropdown-content translate-y-10">
                        <ul className='w-[15rem] bg-white'>
                            <li><a href="#" className='hover:text-rose-600'>Wooden Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Fashion Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Furniture Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Cosmetics Home</a></li>
                            <li><a href="#" className='hover:text-rose-600'>Food Grocery</a></li>
                        </ul>
                    </div>
                </div>

                <div class="dropdown pl-3">
                    <button onClick={()=>navigate("/shope")} class="dropbtn" className='text-sm hover:text-rose-600 font-semibold p-5'>
                        Shop
                        <i class="fa-solid fa-angle-down ml-1"></i>
                    </button>
                    <div class="dropdown-content translate-y-10 ">
                        <ul className='w-[15rem] bg-white'>
                            <li><Link to="/Shope"  className='hover:text-rose-600'>Shope </Link></li>
                            <li><Link to="/Shop2" className='hover:text-rose-600'>Shop 2</Link></li>
                            <li><Link to="/ShopDetails" className='hover:text-rose-600'>Shope Details</Link></li>
                            <li><Link to="/ShopDetails2" className='hover:text-rose-600'>Shop Details 2</Link></li>
                            <li><a href="" className='hover:text-rose-600'>Shop Location</a></li>
                            <li><Link to="/Cart" className='hover:text-rose-600'>Cart</Link></li>   
                            <li><Link to="/sign" className='hover:text-rose-600'>Sing in</Link></li>
                            <li><a href="" className='hover:text-rose-600'>Checkout</a></li>
                            <li><Link to="/Wishlist" className='hover:text-rose-600'>Wishlist</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="dropdown pl-3 ">
                    <button class="dropbtn" className='text-sm hover:text-rose-600 font-semibold p-10'>
                        Pages
                        <i class="fa-solid fa-angle-down ml-1"></i>
                    </button>
                    <div class="dropdown-content translate-y-20 ">
                        <div className='flex '>
                            <ul className='w-[15rem] my-3 hover:text-rose-600 bg-white'>
                            <li className='ml-4 mb-2 text-sm font-bold'><h1 className=''>PAGE LAYOUT</h1></li>
                                <li ><a href="" className='hover:text-rose-600'>Shope Filters V1</a></li>
                                <li><a href="" className='hover:text-rose-600'>Shope Filters V2</a></li>
                                <li><a href="" className='hover:text-rose-600'>Shope sidebar</a></li>
                                <li><a href="" className='hover:text-rose-600'>Shope Right  sidebar</a></li>
                                <li><a href="" className='hover:text-rose-600'>Shope List View</a></li>
                            </ul>
                            <ul className='w-[15rem] my-3 hover:text-rose-600 bg-white'>
                            <li className='ml-4 mb-2 text-sm font-bold'><h1 className=''>PAGE LAYOUT</h1></li>
                                <li ><Link to="/About" className='hover:text-rose-600'>About</Link></li>
                                <li><Link to="/Cart" className='hover:text-rose-600'>Cart</Link></li>
                                <li><a href="" className='hover:text-rose-600'>Checkout</a></li>
                                <li><Link to="/Sign" className='hover:text-rose-600'>Sign in</Link></li>
                                <li><Link to="/Log" className='hover:text-rose-600'>Log in</Link></li>
                            </ul>
                            <ul className='w-[15rem] my-3 bg-white'>
                            <li className='ml-4 mb-2 text-sm font-bold hover:text-rose-600'><h1 className=''>PAGE TYPE</h1></li>
                                <li ><a href="" className='hover:text-rose-600'>Product Track</a></li>
                                <li><Link to="/wishlist" className='hover:text-rose-600'>Whishlist</Link></li>
                                <li><Link to="/Error" className='hover:text-rose-600'>404/Error</Link></li>
                                <li><a href="" className='hover:text-rose-600'>Coming Soon</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="dropdown pl-3 ">
                    <button class="dropbtn" className='text-sm hover:text-rose-600 p-10 font-semibold'>
                        Blog 
                    <i class="fa-solid fa-angle-down ml-1 "></i>
                    </button>
                    <div class="dropdown-content translate-y-20 ">
                        <ul className='bg-white'>
                            <li><Link to="/Blog" className='hover:text-rose-600'>Blog</Link></li>
                            <li><a href="" className='hover:text-rose-600'>Blog Details</a></li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown pl-2">
                    <button class="dropbtn" className='text-sm hover:text-rose-600 font-semibold' ><Link to="/Contact">Contact</Link> </button>
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
