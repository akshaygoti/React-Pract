import React from 'react'

import '../Home/Cart.css'

import bgimg from '../asset/breadcrumb-01.jpg'

import { IoRemoveOutline } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import { Remove_Add } from '../Redux/Actions/action';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { Incr_To_cart, Decr_To_cart} from '../Redux/Actions/action';

const Cart = () => {

    const dispatch = useDispatch();
    const Remove_Cart = (id) => {
        dispatch(Remove_Add(id))
        // console.log("HELLO DATA");
    }

    // const AddRemove = (id) => {
    //     dispatch(Remove_Add(id))
    // }

    const data = useSelector((state) => state.cartreducer.carts)
    
    const incriment_cart = (item) => {
        dispatch(Incr_To_cart(item))
        // console.log("incrtiment");
    }

    const dicrement_cart = (item) =>{
        dispatch(Decr_To_cart(item))
        console.log("incrtiment");
    }

    return (
        <div>
            <div className='cart-area'>
                <div className='relative'>
                    <img src={bgimg} alt="" className='w-[100%] h-[250px]' />
                    <div className='absolute top-16 pl-5'>
                        <div className=' flex items-center'>
                            <button className='hover:text-rose-600 font-semibold'>Home</button>
                            <p className='flex items-center text-gray-500'>
                                <IoRemoveOutline className="text-3xl mt-1" />
                                Cart
                            </p>
                        </div>
                        <h1 className='text-4xl font-bold'>Cart</h1>
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
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                {data.map((item, ind) => {
                                    let { id, firstProductImg, productName, Price, quantity } = item
                                    return (
                                        <tr key={ind} className='cart-item'>
                                            <td className=''>
                                                <a href="#" className='flex justify-center'>
                                                    <img src={firstProductImg} alt="" className='' />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className='product-name'>{productName}</a>
                                            </td>
                                            <td>{Price}</td>
                                            <td className=''>
                                                <div className='input flex items-center justify-between border px-2'>
                                                    <div className='flex items-center justify-between'>
                                                        <div className='input-text'>
                                                            <p>{quantity}</p>
                                                        </div>
                                                        <div className='input-btn flex flex-col'>
                                                            <button onClick={()=>incriment_cart(item)}><IoMdArrowDropup /></button>
                                                            <button onCanPlay={()=>dicrement_cart(item)}><IoMdArrowDropdown /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <input type="number" min={1} defaultValue={1} name='qty' className='qty' /> */}
                                                {/* <button onClick={()=>incr_qut(item)} className='flex '></button> */}
                                            </td>
                                            <td>{Price}</td>
                                            <td>
                                                <button className='tp-btn'>Add To Cart</button>
                                            </td>
                                            <td className='prioec'>$(Price*quantity)</td>
                                            <td>       
                                                <button onClick={() => Remove_Cart(id)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tbody className='text-center'>
                                <tr className='cart-item'>
                                    {/* <td className=''>
                                        <a href="#" className='flex justify-center'>
                                            <img src={Products10} alt="" className='' />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" className='product-name'>Evelyn Patton</a>
                                    </td>
                                    <td>$70</td>
                                    <td className=''>
                                        <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                    </td>
                                    <td>$20.00</td>
                                    <td>
                                        <button className='tp-btn'>Add To Cart</button>
                                    </td>
                                    <td>
                                        <button>Remove</button>
                                    </td> */}
                                </tr>
                            </tbody>
                            <tbody className='text-center'>
                                <tr className='cart-item'>
                                    {/* <td className=''>
                                        <a href="#" className='flex justify-center'>
                                            <img src={Products11} alt="" className='' />
                                        </a>
                                    </td> */}
                                    {/* <td>
                                        <a href="#" className='product-name'>Bradley Burgess 2</a>
                                    </td> */}
                                    {/* <td>$90</td> */}
                                    {/* <td className=''>
                                        <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                    </td>
                                    <td>$80.00</td>
                                    <td>
                                        <button className='tp-btn'>Add To Cart</button>
                                    </td>
                                    <td>
                                </td> */}
                                </tr>
                                {/* <button >Remove</button> */}
                            </tbody>
                        </table>

                        <div className='mt-10'>
                            <input id="coupon_code" class="input-text" placeholder="Coupon code" type="text" name="coupon_code" className='p-2 rounded-lg border-2 text-xl' />
                            <button className='Apply-btn ml-5'>Apply Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart