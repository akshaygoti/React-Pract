import React from 'react'

import '../Home/home3.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


import instagram1 from '../asset/instagram-01.jpg'
import instagram2 from '../asset/instagram-02.jpg'
import instagram3 from '../asset/instagram-03.jpg'
import instagram4 from '../asset/instagram-04.jpg'
import instagram5 from '../asset/instagram-05.jpg'
import instagram6 from '../asset/instagram-06.jpg'

function Home3() {
  return (
  <>

  <div className='main-home3 w-[90%] mx-auto py-5'>

     <div className='text-center'>
          <h2 className='ontext'>Follow On</h2>
          <div>
            <p className='text-3xl font-bold flex items-center justify-center'><i class="fa-brands fa-instagram mr-2 text-4xl "></i>ninico-shopp</p>
          </div>
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
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={instagram1} alt="" className='rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={instagram2} alt="" className='rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={instagram3} alt="" className='rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={instagram4} alt="" className='rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={instagram5} alt="" className='rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={instagram6} alt="" className='rounded-lg'/>
        </SwiperSlide>
      </Swiper>
      {/* <div className='text-center'>
          <h2 className='ontext'>Follow On</h2>
          <div>
            <p className='text-3xl font-bold flex items-center justify-center'><i class="fa-brands fa-instagram mr-2 text-4xl "></i>ninico-shopp</p>
          </div>
          {/* <h4 className='text-4xl text-center'>
          <i class="fa-brands fa-instagram "></i>
             ninico-shopp
          </h4> */}
      {/* </div>
      <div className=''>
          <div className='insta-pic flex justify-between'>
          <img src={instagram1} alt="" className='rounded-lg'/>
          <img src={instagram2} alt="" className='rounded-lg'/>
          <img src={instagram3} alt="" className='rounded-lg'/>
          <img src={instagram4} alt="" className='rounded-lg'/>
          <img src={instagram5} alt="" className='rounded-lg'/>
          <img src={instagram6} alt="" className='rounded-lg'/>
          </div>
      </div> */}
  </div>
  </>
  )
}

export default Home3
