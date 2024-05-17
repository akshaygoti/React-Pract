import React from 'react'

import product2 from '../asset/product-5.jpg'

import bgimg from '../asset/breadcrumb-01.jpg'
// import pr5 from '../asset/product-6.jpg'
import '../Home/ShopDetails.css'

import { IoRemoveOutline } from "react-icons/io5";

import { FaCartShopping } from "react-icons/fa6";

function ShopDetails() {
  return (
    // <div>
    //   <div className='container'>
    <>
    <div>
      <div className='relative'>
                    <img src={bgimg} alt="" className='w-[full] h-[250px]' />
                    <div className='absolute top-16 pl-5'>
                        <div className=' flex items-center'>
                            <button className='hover:text-rose-600 font-semibold'>Home</button>
                            <p className='flex items-center text-gray-500'>
                                <IoRemoveOutline className="text-3xl mt-1" />
                                Shope Details
                            </p>
                        </div>
                        <h1 className='text-4xl font-bold'>ShopDetails</h1>
                    </div>
        </div>

        <div className='main container flex mt-5 mb-5 justify-center'>

            <div className='main-imgs'>
                <img src={product2} alt="" className='h-96 w-80 rounded-lg'/>
            </div>

            <div className='Wide '>
                <div className='pl-4 flex   '>
                <h1 className='text-2xl font-bold pr-2' >Nathaniel Baldwin</h1>
                <span class="stok items-center">In Stock</span>
                </div>
                <div className='tpproduct-details__price  ml-5'>
                    <del className='text-gray-400 font-bold text-xl'>$9.35</del>
                    <span className='font-medium'>
                        $ 40
                    </span>
                </div>
                <div class=" pl-5 text-gray-400">
                    <p>Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23 <br />
                    It is a <br />
                    completely modern design and you feel comfortable to put on this <br />
                    hijab. <br />
                    Buy it at the best price.</p>
                </div>
            </div>

        {/* <div className='flex'>
            <div className='by-btn '>

                <button className='buy '>
                <FaCartShopping className='mr-2'/>
                Buy Now
                </button>

            </div>
        </div> */}

        <div>
        
        </div>

        </div>
    </div>
    </>
    //   </div>
    // </div>
  )
}

export default ShopDetails
