import React from 'react'
import './Catagories.css'

// import { FaShoePrints } from "react-icons/fa";
// import { RiFlowerLine } from "react-icons/ri";
// import { CiFaceSmile } from "react-icons/ci";
// import { FaRegFutbol } from "react-icons/fa";
// import { RiVipCrown2Line } from "react-icons/ri";
// import { GoGift } from "react-icons/go";




function Categories() {
    return (
        <div>
            <div className='swiper-btn '>
                <div className='main-manu relative'>
                    <button className='manu-btn flex items-center text-white relative'>
                        <i class="fa-solid fa-bars mr-2"></i>
                        Categories
                    </button>
                    {/* <div className='trans block'>
                        <ul className='trantwo'>
                            <li><a href="#"><i class="fa-regular fa-user"></i>Candels</a></li>
                            <li><a href="#"><RiFlowerLine />Handmade</a></li>
                            <li><a href="#"><FaShoePrints />Gift Sets</a></li>
                            <li><a href="#"><CiFaceSmile /> Plastic Gifts</a></li>
                            <li><a href="#"><FaRegFutbol />Handy Cream</a></li>
                            <li><a href="#"><RiVipCrown2Line />Cosmetics</a></li>
                            <li><a href="#"><GoGift />Silk Accessories</a></li>
                        </ul>
                    </div> */}
                    {/* <div className=''>

                <ul className='absolute'>
                        <li><a href="#"><i class="fa-regular fa-user"></i>Candels</a></li>
                        <li><a href="#"><i class="fa-solid fa-star"></i> Handmade</a></li>
                        <li><a href="#"><i class="fa-solid fa-pen-nib"></i> Gift Sets</a></li>
                        <li><a href="#"><i class="fa-solid fa-face-smile"></i> Plastic Gifts</a></li>
                        <li><a href="#"><i class="fa-solid fa-envelope"></i> Handy Cream</a></li>
                        <li><a href="#"><i class="fa-solid fa-crown"></i> Cosmetics</a></li>
                        <li><a href="#"><i class="fa-solid fa-ticket"></i> Silk Accessories</a></li>
                </ul>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default Categories