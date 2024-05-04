import React from 'react'
import '../Home/error.css'
import bgimg from '../asset/breadcrumb-01.jpg'
import error from '../asset/error.png'

function Error() {
  return (
    <div>
      <section className=''>

        <div className="">

          <img src={bgimg} alt="Snow" className='bgimg '/>
          <div class="top-left ">
            <h1>
              Home ---- <span className='error-sq'>Error</span>
            </h1>
            <h2 className='text-3xl font-semibold'>Error</h2>
          </div>

          <div className='error-main text-center'>
            <div className='error mt-10 flex justify-center'>
              <img src={error} alt="" />
            </div>
            <div className='found mt-5'>
              <h2 className='text-5xl font-semibold'>404.page not found</h2>
            </div>
            <div className='erroe-p mt-5 text-slate-600 '>
              <p>Sorry, we couldn’t find the page you where looking for. We suggest that <br />
              you return to homepage.</p>
            </div>
            <div className='btn-error mt-5'>
            <button type="button" className="focus:outline-none text-white bg-red-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:text-black ">
            <i class="fa-solid fa-arrow-left-long mr-2"></i>
            Back To Home</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Error
