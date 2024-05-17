import React from 'react'

import product3 from '../asset/product-3.jpg'

import '../Home/Details.css'


function Details() {
  return (
    <div>
    <div className='product-area'>
        {/* <PageHeading goBackLink='Home' pageTitle='Shop Details'/> */}
        <div className='container mx-auto px-5'>
            <div className='grid grid-cols-3'>
                <div className='tpproduct-details-img'>
                    <img src={product3} alt="" className='rounded-lg w-[388px] h-[443px]' />
                </div>
                <div className='tpproduct-details-content ml-7'>
                    <div className='product-tag-area flex items-center mb-1'>
                        <div className='mr-4'>
                            <p className='product-details-tag'>Dress</p>
                        </div>
                        <div className='product-details-rating flex text-yellow-400 mr-1'>
                            {/* <FaStar />
                            <FaStar />
                            <FaStar /> */}
                        </div>
                        <div className='product-details-reviewers'>
                            <a href="#" className='text-gray-500'>10 Reviews</a>
                        </div>
                    </div>
                    <div className='product-details-title-area flex items-center mb-1'>
                        <h3 className='product-details-title'>Bradley Burgess 2</h3>
                        <span className='product-details-stock'>In Stock</span>
                    </div>
                    <div className='product-details-price mb-5'>
                        <del className='text-gray-400 text-xl font-semibold'>$9.35</del>
                        <span className='text-rose-600 text-3xl font-bold ml-1'>$ 20</span>
                    </div>
                    <div className='product-details-pera mb-4'>
                        <p className='text-gray-500'>
                            Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a <br/>
                            completely modern design and you feel comfortable to put on this hijab. <br/>Buy it at the best price.
                        </p>
                    </div>
                    <div className='product-details-count flex'>
                        <div className='product-quantity mr-4'>
                            <input type="number" min={1} defaultValue={1} className='border font-bold rounded-md w-56 h-14 p-3' />
                        </div>
                        <div className='product-details-cart mr-4'>
                            {/* <button className='flex justify-center items-center bg-rose-600 text-white rounded-md w-[11rem] h-14 font-bold'> <IoCartOutline className='mr-1 text-lg' /> Add To Cart</button> */}
                        </div>
                        <div className='product-details-wishlist'>
                            {/* <button className='border p-4 rounded-md text-gray-300'><IoMdHeartEmpty className='text-2xl' /></button> */}
                        </div>
                    </div>
                </div>
                <div className='product-details-condation ml-32'>
                    <ul>
                        <li className='mb-4'>
<div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                <div className='details-condation-thumb mx-3'>
                                    {/* <img src={productdet1} alt="" className='details-img-hover' /> */}
                                </div>
                                <div className='details-condation-text ml-2'>
                                    <p className='text-gray-500'>Free Shipping apply to all orders over $100</p>
                                </div>
                            </div>
                        </li>
                        <li className='mb-4'>
                            <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                <div className='details-condation-thumb mx-3'>
                                    {/* <img src={productdet2} alt="" /> */}
                                </div>
                                <div className='details-condation-text ml-2'>
                                    <p className='text-gray-500'>Guranteed 100% Organic from natural farmas</p>
                                </div>
                            </div>
                        </li>
                        <li className='mb-4'>
                            <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                <div className='details-condation-thumb mx-3'>
                                    {/* <img src={productdet3} alt="" /> */}
                                </div>
                                <div className='details-condation-text ml-2'>
                                    <p className='text-gray-500'>1 Day Returns if you change your mind</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                <div className='details-condation-thumb mx-3'>
                                    {/* <img src={productdet4} alt="" /> */}
                                </div>
                                <div className='details-condation-text ml-2'>
                                    <p className='text-gray-500'>Covid-19 Info: We keep delivering.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>    
</div>
  )
}

export default Details
