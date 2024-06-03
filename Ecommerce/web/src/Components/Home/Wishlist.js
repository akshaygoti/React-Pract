import React from 'react'

import { useNavigate } from 'react-router-dom';

import '../Home/Wishlist.css'

import bgimg from '../asset/breadcrumb-01.jpg'

import { IoRemoveOutline } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import { Remove_Wishlist } from '../Redux/Actions/action';
const Wishlist = () => {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    const dispatch = useDispatch();

    const WishRemove = (id) => {
        dispatch(Remove_Wishlist(id))
    }

    const WishlistlistItem = useSelector((state) => state.cartreducer.Wishlist)
    console.log(WishlistlistItem);

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
                                Wishlist
                            </p>
                        </div>
                        <h1 className='text-4xl font-bold'>Wishlist</h1>
                    </div>
                </div>
                <div className='table w-[100%] px-5 py-20'>
                    <div className='table-content w-[100%]'>
                        <table className='table-auto w-full'>
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Courses</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Add To Cart</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white text-center">
                                {WishlistlistItem.map((item, ind) => {
                                    let { id, firstProductImg, productName, Price } = item
                                    return (
                                        <tr key={ind}>
                                            <td className="whitespace-nowrap">
                                                <a href="#" className='flex justify-center'>
                                                    <img src={firstProductImg} alt="" className='product-img w-[125px] h-[143px]' />
                                                </a>
                                            </td>
                                            <td className="whitespace-nowrap">
                                                <div className="product-name">{productName}</div>
                                            </td>
                                            <td className="whitespace-nowrap">{Price}</td>
                                            <td className="whitespace-nowrap">
                                                <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                            </td>
                                            <td className="whitespace-nowrap">{Price}</td>
                                            <td>
                                                <button className='tp-btn'>Add To Cart</button>
                                            </td>
                                            <td className="whitespace-nowrap">
                                                <button onClick={() => WishRemove(id)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                            {/* <tbody className='text-center'>
                                <tr className='cart-item'>
                                    <td className=''>
                                        <a href="#" className='flex justify-center'>
                                            <img src={pr5} alt="" className='' />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" className='product-name'>Nathaniel Baldwin</a>
                                    </td>
                                    <td>$40</td>
                                    <td className=''>
                                        <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                    </td>
                                    <td>$40.00</td>
                                    <td>
                                        <button className='tp-btn'>Add To Cart</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>Remove_To_Wishlist(id)}>Remove</button>
                                    </td>
                                </tr>
                            </tbody> */}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist