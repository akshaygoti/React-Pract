import React from 'react'

import '../Home/home2.css'

import floded from '../asset/floded-01.png'
 
function Home2() {
  return (
    <>
    <div className=''>
    <div className='container mx-10 mb-5 py-5 bg-gray-100'>

      <div className='main grid grid-cols-1 lg:grid-cols-2 px-5 py-10 items-center '>
          <div className='img-flod'>
            <img src={floded} alt="" />
            <span className='offer-price'>
                  <small className='font-bold'>From</small>
                  <h3 className='text-3xl font-bold'>$49</h3>
              </span>
          </div>

          <div className='text-part'>

            <div className='mb-7'>
              <p className='text-red-600 font-semibold text-xl mb-1'>$49.00 
              < del className='text-gray-400'>$59.00</del>
              </p>
              <a href='#'>
                <h1 className='text-4xl font-bold mb-4'>Pro2 Abstract Folded Post</h1>
              </a>
              <p className='text-lg text-gray-500'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor. Wonderful accent piece for coffee tables or side tables.</p>
            </div>

            <div className='tpdealcontact-progress mb-10'>
                <div className='progress'>
                   <div className='progress-bar text-red-600'></div>
                </div>
            </div>

            <div className='all-count'>
              <div className='count-down flex'>
                <div className='main-down'>

                  <h1>
                    -128
                  </h1>
                  <p>Days</p>

                </div>

                <div className=' main-down hour'>

                  <h1>
                    -17
                  </h1>
                  <p>Hour</p>

                </div>

                <div className='minute main-down'>
                    <h1>-25</h1>
                    <p>Minute</p>
                </div>

                <div className='main-down secound'>
                    <h1>-74</h1>
                    <p>Second</p>
                </div>

                <div className='flex items-center ml-10 text-gray-500'>

                  <p>Remains until the end of the offer</p>

                </div>

              </div>
            </div>

          </div>

      </div>
      
    </div>
    </div>
    </>
  )
}

export default Home2
