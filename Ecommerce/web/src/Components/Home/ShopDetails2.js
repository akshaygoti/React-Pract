import React from 'react'

import { useNavigate } from 'react-router-dom';

import bgimg from '../asset/breadcrumb-01.jpg'

import { IoRemoveOutline } from "react-icons/io5";


import PopularProducts from '../PopularProducts/PopularProducts';

const ShopDetails2 = () => {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
        
    };

    return (
        <div>
            <div className='cart-area'>
            <div className='relative'>
                    <img src={bgimg} alt="" className='w-[100%] h-[250px]' />
                    <div className='absolute top-16 pl-5'>
                        <div className=' flex items-center'>
                            <button onClick={backToHome} className='hover:text-rose-600 font-semibold'>Home</button>
                            <p className='flex items-center text-gray-500'>
                                <IoRemoveOutline className="text-3xl mt-1" />
                                Shop Details 2
                            </p>
                        </div>
                        <h1 className='text-4xl font-bold'>Shop Details 2</h1>
                    </div>
                </div>

                        <PopularProducts/>
                
            </div>
        </div>
    )
}

export default ShopDetails2