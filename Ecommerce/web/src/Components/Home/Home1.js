import React from 'react'

import '../Home/home1.css'

import cat1 from '../asset/cat01.svg'
import cat2 from '../asset/cat02.svg'
import cat3 from '../asset/cat03.svg'
import cat4 from '../asset/cat04.svg'
import cat5 from '../asset/cat05.svg'
import cat6 from '../asset/cat06.svg'

import product from '../asset/product-2.jpg'
import product3 from '../asset/product-3.jpg'
import product5 from '../asset/product-5.jpg'
import product7 from '../asset/product-7.jpg'
import product9 from '../asset/product-9.jpg'
import product11 from '../asset/product-11.jpg'
import product13 from '../asset/product-13.jpg'
import  product15 from '../asset/product-15.jpg'
import  product17 from '../asset/product17.jpg'
import product19 from '../asset/product-19.jpg'


function Home1() {
  return (
    <div className='w-[90%] mx-auto py-5 '>

        <div className='container'>
            <div className='top'>
                <h2 className='font-bold text-2xl'> 
                    Top
                    <span className='pl-2 font-medium text-2xl text-pink-700 '>
                         Categories..
                    </span>
                </h2>

                <div className='card main mt-10 flex flex-wrap justify-between'>

                <div className='cat01 relative'>
                    <div className='catimg h-24 w-24  text-center rounded-full pl-8 pt-5'>
                        <img src={cat1} alt=""/>
                        <span className=' cath block h-8 w-8 text-center leading-10 font-medium text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>20</span>
                    </div>
                    <div className='cat-text text-center pt-2'>
                        <h5 >
                            <a href="">
                            Driftwood <br />
                            Table Decor
                            </a>
                        </h5>
                    </div>
                </div>

                        <p className='vl'></p>

                <div className='cat01 relative'>
                    <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                        <img src={cat2} alt=""/>
                        <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>12</span>
                    </div>
                    <div className='cat-text text-center pt-2'>
                        <h5 >
                            <a href="">
                            Floor Driftwood<br />
                            Sculpture
                            </a>
                        </h5>
                    </div>
                </div>

                <p className='vl'></p>

                <div className='cat01 relative'>
                    <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                        <img src={cat3} alt=""/>
                        <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>03</span>
                    </div>
                    <div className='cat-text text-center pt-2'>
                        <h5 >
                            <a href="">
                            Driftwood<br />
                            Christmas Tree
                            </a>
                        </h5>
                    </div>
                </div>

                <p className='vl'></p>

                <div className='cat01 relative'>
                    <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                        <img src={cat4} alt=""/>
                        <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>09</span>
                    </div>
                    <div className='cat-text text-center pt-2'>
                        <h5 >
                            <a href="">
                            Wooden<br />
                            Bluetooth Speaker
                            </a>
                        </h5>
                    </div>
                </div>

                <p className='vl'></p>

                <div className='cat01 relative'>
                    <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                        <img src={cat5} alt=""/>
                        <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>10</span>
                    </div>
                    <div className='cat-text text-center pt-2'>
                        <h5 >
                            <a href="">
                            Receivers <br />
                            Amplifiers
                            </a>
                        </h5>
                    </div>
                </div>

                <p className='vl'></p>

                <div className='cat01 relative'>
                    <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                        <img src={cat6} alt=""/>
                        <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>05</span>
                    </div>
                    <div className='cat-text text-center pt-2'>
                        <h5>
                            <a href="">
                            Appetizer <br />
                            Plate Set
                            </a>
                        </h5>
                    </div>
                </div>

                </div>

                <p className='hr mt-10'></p>

                <div className='section-2 mt-10 flex items-center justify-between'>
                    <div className='Products flex items-center text-center justify-between'>

                        <h4 className='font-bold text-2xl'>
                        Popular
                        <span className='pl-2 font-medium text-2xl text-pink-700 '>
                            Products
                        </span>
                        </h4> 
                    </div>
                    <div className='product-item'>
                        <ul className='flex gap-5'>
                            <li className='all'>
                                <a href="#">All</a>
                            </li>
                            <li>
                                <a href="#">Popular</a>
                            </li>
                            <li>
                                <a href="#">On Sale</a>
                            </li>
                            <li>
                                <a href="#">Best Rated</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Products img */}
                  <div className=''>
                    <div className='card-group grid grid-cols-4 mt-5'>
                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Bradley Burgess 2</p>
                                <h1 className='ammount'>$20.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product3} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Allie Sharp</p>
                                <h1 className='ammount'>$30.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product5} alt="" className='rounded-lg'/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Bradley Burgess 2</p>
                                <h1 className='ammount'>$20.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product7} alt="" className='rounded-lg'/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Nathaniel Baldwin</p>
                                <h1 className='ammount'>$40.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product9} alt="" className='rounded-lg'/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Carolyn Goodwin</p>
                                <h1 className='ammount'>$50.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product11} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Evelyn Patton</p>
                                <h1 className='ammount'>$60.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product13} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Sally Ray</p>
                                <h1 className='ammount'>$70.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product15} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Ora Bowman</p>
                                <h1 className='ammount'>$80.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                 <img src={product17} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Frederick Valdez</p>
                                <h1 className='ammount'>$90.00</h1>
                            </div>
                        </div>

                        <div className='card p-1'>
                            <div className='card-img'>
                                <img src={product19} alt="" className='rounded-lg '/>
                            </div>
                            <div className='card-body py-3'>
                                <p className='title mb-1 text-gray-500'>Terry Byrd</p>
                                <h1 className='ammount'>$100.00</h1>
                            </div>
                        </div>


                    </div>

                 </div>

            </div>
        </div>

      
    </div>
  )
}  

export default Home1
