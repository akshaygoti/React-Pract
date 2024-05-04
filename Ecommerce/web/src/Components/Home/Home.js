// import React, { useRef, useState } from 'react'; 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Home/home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import banner from '../asset/banner-1.jpg'
import banner02 from '../asset/banner-2.jpg'
import banner03 from '../asset/banner-3.jpg'  
import banner1 from '../asset/bannerslider-01.jpg'
import banner2 from '../asset/bannerslider-02.jpg'

function Home() {
  return (

    <header className="mb-10 mx-auto mt-2 container items-center">
    <div className="main-box w-full grid grid-cols-1 lg:grid-cols-12 gap-y-4 md:gap-x-4">
      <div className="slider-wrapper lg:col-span-9">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="">

            <div className="slide min-h-[inherit]">

              <img
                src={banner}
                alt="slid-1"
                className="slide-img"
              />

              <div className="slide-text  pl-1 sm:pl-4 md:pl-8">

                <p className="slide-sub-heading slide-text-animation">Accessories</p>

                <h1 className="slide-heading  slide-text-animation my-0 sm:my-3 md:my-6">
                  Up To
                  <span>40% Off</span>
                  latest <br /> Creations
                </h1>

                <a
                  href=''
                  id="slide-shopLink"
                  className="transition slide-text-animation"
                >
                  Shop Now
                  <i className="fa-solid fa-arrow-right block ml-3"></i>
                </a>
            
              </div>
            
            </div>

          </SwiperSlide>

          <SwiperSlide className="">

            <div className="slide min-h-[inherit]">

              <img
                src={banner02}
                alt="slid-2"
                className="slide-img"
              />

              <div className="slide-text  pl-1 sm:pl-4 md:pl-8">

                <p className="slide-sub-heading slide-text-animation">Accessories</p>

                <h1 className="slide-heading slide-text-animation my-0 sm:my-3 md:my-6">
                  Up To
                  <span>35% Off</span>
                  latest <br /> Creations
                </h1>

                <a
                  href=''
                  id="slide-shopLink"
                  className="transition slide-text-animation"
                >
                  Shop Now
                  <i className="fa-solid fa-arrow-right block ml-3"></i>
                </a>
            
              </div>
            
            </div>

          </SwiperSlide>

          <SwiperSlide className="">

            <div className="slide min-h-[inherit]">

              <img
                src={banner03}
                alt="slid-3"
                className="slide-img"
              />

              <div className="slide-text  pl-1 sm:pl-4 md:pl-8">

                <p className="slide-sub-heading slide-text-animation">Accessories</p>

                <h1 className="slide-heading slide-text-animation my-0 sm:my-3 md:my-6">
                  Up To
                  <span>45% Off</span>
                  latest <br /> Creations
                </h1>

                <a
                  href=''
                  id="slide-shopLink"
                  className="transition slide-text-animation"
                >
                  Shop Now
                  <i className="fa-solid fa-arrow-right block ml-3"></i>
                </a>
            
              </div>
            
            </div>

          </SwiperSlide>

          

        

        </Swiper>

      </div>{/*END of slider-wrapper */}

      <div className="aside-img-bar col-auto lg:col-span-3  grid grid-cols-1 md:grid-cols-2  md:gap-x-5 lg:grid-cols-1 gap-y-4">
      <div className="img-box overflow-hidden rounded-md">
        <a href='' className="block h-full banner banner-1 relative">
          <img src={banner1} alt="Hand Mande" className="block min-h-full w-full object-cover" />
          <div className="Img-text absolute top-0 left-0 p-2 text-start">
            <h3>Hand made</h3>
            <h1>New Modern <br /> stylist Craft</h1>
          </div>
        </a>
        </div>
        <div className="img-box overflow-hidden rounded-md">
        <a href=''  className="block h-full  banner banner-1 relative">
          <img src={banner2 } alt="Hand Mande" className="block min-h-full w-full object-fill" />
          <div className="Img-text absolute top-0 left-0 p-2 text-start">
          <h3>Popular</h3>
            <h1>Energy with our <br /> newest collection</h1>
          </div>
        </a>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Home
