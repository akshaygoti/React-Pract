import React from 'react'
import '../Home/error.css'
import bgimg from '../asset/breadcrumb-01.jpg'
import error from '../asset/error.png'

function Error() {
  return (
    <div>
      <section className=''>

        <div className="relative">

        <div className='relative'>
                    <img src={bgimg} alt="" className='w-[100%] h-[250px]' />
                    <div className='absolute top-16 pl-5'>
                        <div className=' flex items-center'>
                            <p className='flex items-center text-gray-500'>
                                Error
                            </p>
                        </div>
                        <h1 className='text-4xl font-bold'>Error</h1>
                    </div>
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
            <button type="button" className="cslop focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:text-black ">
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
