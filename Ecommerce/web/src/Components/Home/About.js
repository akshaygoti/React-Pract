import React from 'react'

import bgimg from '../asset/breadcrumb-01.jpg'

import about1 from '../asset/about-img-1.jpg'

import about2 from '../asset/about-img-2.jpg'

import ninico from '../asset/about-img-3.png'

import user1 from '../asset/team-1.jpg'

import user2 from '../asset/team-2.jpg'

import user3 from '../asset/team-3.jpg'

import user4 from '../asset/team-4.jpg'

import aboutbanner from '../asset/about-banner-1.jpg'

import aboutbanner2 from '../asset/about-banner-2.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './About.css'

import { IoRemoveOutline } from "react-icons/io5";

import { FaCheck } from "react-icons/fa6";

function About() {
    return (
        <div>
            <div className='relative'>
                <img src={bgimg} alt="" className='w-[100%] h-[250px]' />
                <div className='absolute top-16 pl-5'>
                    <div className=' flex items-center'>
                        <button className='hover:text-rose-600 font-semibold'>Home</button>
                        <p className='flex items-center text-gray-500'>
                            <IoRemoveOutline className="text-3xl mt-1" />
                            About Us
                        </p>
                    </div>
                    <h1 className='text-4xl font-bold'>About Us</h1>
                </div>
            </div>

            {/* start about */}

            <section className='pt-52 pb-40'>

                <div className='flex relative justify-evenly'>
                        <img src={about1} alt="" className='about-img w-[40%]'/>
                        <img src={about2} alt="" className='about-img w-[40%]'/>
                     <div className='absolute'>
                        <img src={ninico} alt="" className='mt-56'/>
                     </div>
                </div>
          
            <div className='m-10'>
                <div className='col-sm-12'>
                    <div className='text '>
                        <h4 class="text-sm text-gray-400">About Us</h4>
                        <h4 class="text-2xl font-bold">About Our Story</h4>
                    </div>
                </div>
            <div className=''>
                <div className='flex justify-between'>
                        <p className='w-[90%]'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.</p>
                        <p className='w-[90%]'>Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information</p>
                <div className='i w-[90%]'>
                    <div className='flex items-center'>
                    <FaCheck />
                    <p>Provide in-person pickup, delivery by professional couriers</p>
                    </div>
                    <div className='flex items-center'>
                    <FaCheck />
                    <p>Orders go right to your restaurant point of sale, KDS, and kitchen</p>
                    </div>
                    <div className='flex items-center'>
                    <FaCheck />
                        <p>Offer in-person diners self-serve, contactless ordering via QR codes.</p>
                    </div>
                </div>
            </div>
                </div>
            </div>
            </section>


            <section>
                <div className='mx-auto px-20 '>
                    <div className='text-center'>
                        <h4 className='text-gray-400 font-medium'>Team</h4>
                        <h4 className='text-2xl font-bold'>Meet With Team</h4>
                    </div>
                    <Swiper
        slidesPerView={1}
        spaceBetween={10}

        autoplay={{
          delay:2500,
          disableOnInteraction:false,
        }}
        breakpoints={{
          567: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide className='relative'>
        <img src={user1} alt="" className='rounded-lg'/>
        <div className='absolute bottom-0 mb-5 font-bold'>
            <p className='text-white  ml-5 text-sm'>Founder</p>
            <h3 className='text-white mb-5 ml-5 text-xl '>Rosiliten H.Eline</h3>
        </div>  
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <img src={user2} alt="" className='rounded-lg'/>
        <div className='absolute bottom-0 mb-5 font-bold'>
             <p className='text-white  ml-5 text-sm'>CEO</p>
            <h3 className='text-white mb-5 ml-5 text-xl '>Uniosx Alins X.Min</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <img src={user3} alt="" className='rounded-lg'/>
        <div className='absolute bottom-0 mb-5 font-bold'>
             <p className='text-white  ml-5 text-sm'>Desainer</p>
            <h3 className='text-white mb-5 ml-5 text-xl '>Alone Alins M.Milones</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <img src={user4} alt="" className='rounded-lg'/>
        <div className='absolute bottom-0 mb-5 font-bold'>
             <p className='text-white  ml-5 text-sm'>Devloper</p>
            <h3 className='text-white mb-5 ml-5 text-xl '>Alone Alins M.Milones</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <img src={user1} alt="" className='rounded-lg'/>
        <div className='absolute bottom-0 mb-5 font-bold'>
             <p className='text-white  ml-5 text-sm'>CEO</p>
            <h3 className='text-white mb-5 ml-5 text-xl '>Uniosx Alins X.Min</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <img src={user3} alt="" className='rounded-lg'/>
        <div className='absolute bottom-0 mb-5 font-bold'>
             <p className='text-white  ml-5 text-sm'>Desainer</p>
            <h3 className='text-white mb-5 ml-5 text-xl '>Alone Alins M.Milones</h3>
        </div>
        </SwiperSlide>
      </Swiper>
                </div>
            </section>

            <div className='m-auto p-20'>
                    <div className='flex'>
                        <div>
                            <img src={aboutbanner} alt="" />
                        </div>
                        <div className='ml-10'>
                            <h4 className='font-medium text-gray-400'>Features #01</h4>
                            <h2 className='text-2xl font-bold'>Solutions that work together</h2>
                            <p className='mt-3 text-gray-400'>Publish your eCommerce site quickly with our easy-to-use <br /> store builder— no coding required. Migrate your items <br /> from your point of sale system or turn your Instagram feed intobr <br /> a shopping site and start selling fast. Square Online works <br /> for all kinds  of businesses—retail,services.</p>
                            <a href="#" className='touch-btn'>
                                <button className='mt-14 font-bold'>Get In Touch</button>
                            </a>
                        </div>
                    </div>
            </div>

            <div className='m-auto p-20'>
                    <div className='flex'>
                        <div className='mr-10'>
                            <h4 className='font-medium text-gray-400'>Features #01</h4>
                            <h2 className='text-2xl font-bold'>All kinds of payments securely</h2>
                            <p className='mt-3 text-gray-400'>Publish your eCommerce site quickly with our easy-to-use <br /> store builder— no coding required. Migrate your items <br /> from your point of sale system or turn your Instagram feed intobr <br /> a shopping site and start selling fast. Square Online works <br /> for all kinds  of businesses—retail,services.</p>
                            <a href="#" className='touch-btn'>
                                <button className='mt-14 font-bold'>Contact With Us</button>
                            </a>
                        </div>
                        <div>
                            <img src={aboutbanner2} alt="" />
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default About
