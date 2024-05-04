import React from 'react'
import '../Home/contact.css'

function Contact() {
  return (
    <div>
      <div className="container flex justify-evenly mt-10">
        <div className='touch-main row h-60 w-80 border-2 border-gray-400'>
            <div className='mr-0'>
                <div className='p-10'>
                <h1 className='get-in text-2xl font-medium text-start'>Get In Touch</h1>
                <div className='about-text '>

                    <ul className='m-0 p-0.5 text-gray-400  flex mt-3 '>
                        <li><i class="fa-solid fa-location-dot "></i></li>
                        <a href="#" className='ml-2 '>24/26 Strait Bargate, Boston, PE21, United Kingdom</a>

                    </ul>

                    <ul className='m-0 p-0.5 text-gray-400  flex mt-2'>
                      <li><i class="fa-solid fa-phone-flip"></i></li>
                        <a href="#" className='ml-2'>+098 (905) 786 897 8</a>
                        {/* <a href="#" >6 - 146 - 389 - 5748</a> */}
                    </ul>

                    <ul className='m-0 p-0.5 text-gray-400  flex mt-2'>
                    <li><i class="fa-regular fa-clock"></i></li>
                    <a href="#" className='ml-2'>10 am - 10 pm EST, 7 days a week</a>
                    </ul>

                </div>
                
                </div>

                <div className=''>

                  <a href="#" className='Support-btn text-black hover:bg-pink-700 '>
                  Get Support On Call 
                  <i class="fa-solid fa-headphones ml-3"></i>  
                  </a>

                  <a href="#" className='Support-btn text-black hover:bg-pink-700 '>
                  Get Direction 
                  <i class="fa-solid fa-location-dot ml-3"></i>  
                  </a>

                </div>

            </div>

        </div>
        <div className='col-lg-8 col-12'>

          <div className='Make '>
            <div className='make text-start'>
              <h4 className='text-2xl font-semibold'>
              Make Custom Request
              </h4>
              <p className='text-gray-400'>Must-have pieces selected every month want style Ideas and Treats?</p>
            </div>
            <form action="" className=''>
              <div className='grid grid-cols-2 gap-3 '>

                <div className=''>
                  <div className='border-2 border-slate-400 w-[100%] rounded-md'>
                  <input placeholder="Full name" required="" type="text" name="name" className='fullname '/>
                  </div>
                </div>

                <div className=''>
                  <div className='border-2 border-slate-400 rounded-md'>
                  <input placeholder="Email address" required="" type="text" name="name" className='fullname'/>
                  </div>
                </div>

                <div className=''>
                  <div className='border-2 border-slate-400 rounded-md'>
                  <input placeholder="Phone number" required="" type="text" name="name" className='fullname'/>
                  </div>
                </div>
                
                <div className=''>
                  <div className='border-2 border-slate-400 rounded-md'>
                  <input placeholder="Subject" required="" type="text" name="name" className='fullname  w-[40px]'/>
                  </div>
                </div>
{/* 
                <div className=''>
                  <div className=''>
                  <input placeholder="Phone number" required="" type="text" name="name" className='fullname'/>
                  </div>
                </div> */}
              </div>  
            </form>
          </div>

                <div>
                  <form class="max-w-sm ">
                    <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-white">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-[480px] text-sm text-gray-900 bg-gray-50 rounded-lg border  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter message"></textarea>
                  </form>
                </div>

                <div className='get-quote mt-5 text-start '>
                <button class="tp-btn tp-color-btn tp-wish-cart">
                  Get A Quote 
                <i class="fa-solid fa-arrow-right-long ml-2"></i>
                </button>
                </div>


        </div>
      </div>

                <div className=''>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767024.712746594!2d60.95727025269108!3d19.723676865635003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714450346467!5m2!1sen!2sin" width="1376" height="450"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
                </div>
    </div>
  )
}

export default Contact
