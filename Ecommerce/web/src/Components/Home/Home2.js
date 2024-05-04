import React from 'react'

import '../Home/home2.css'

import floded from '../asset/floded-01.png'
 
function Home2() {
  return (
    <div className='container w-[90%] mx-auto py-5'>
      <div className='section col-lg-6  bg-slate-700'>
        <div className='flex '>
          <div className='floded-img p-5'>
            <img src={floded} alt="" className='floded0' />
          </div>
          <div className='col-lg-6 '>

            <div>
              <div className='pt-5 text-white'>
                <span>$49.00</span>
                <del>$59.00</del>
              </div>
              <div className=''>
                <h4>
                  <a href="">Pro2 Abstract Folded Pots</a>
                </h4>
                <p>
                  Elegant pink origami design three-dimensional
                  view and decoration co-exist.
                  Great for adding a decorative touch to any room’s decor.
                  Wonderful accent piece for coffee tables or side tables.
                </p>
                <h2 className='hl'></h2>
              </div>

              <div className='numaber'>
                <dir>
                  <span className='cdown-day'></span>
                </dir>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2
