import React from 'react'
import '../Footer/Footer.css'
import logo from '../asset/logo.png'
import app from '../asset/app.jpg'
import google from '../asset/google.jpg'
import footer from '../asset/footer-end.jpg'

const Footer = () => {
  return (
    <div>
      <footer>
        
        <div className="footer-part">
          <div className="container mx-auto flex flex-wrap items-center ">
            <div className="grid grid-cols-5 gap-2   flex-wrap mt-5">
              <div className="flex">
                <div className="footer-logo">
                  <a href="#" className=''>
                    <img src={logo} alt="Girl in a jacket" className='mb-8'></img>
                  </a>
                  <div className='footer-contect '>
                    <p>
                        Elegant pink origami desaing three dimensional view and decoration co-exit. Great for adding a decrotatve touch to zany room's decor."
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-2 flex '>
                <div className='footer-text footer-col'>
                   <h4 className='footer-title mb-8 font-bold text-underline'>Information</h4>
                   <div className='footer-ul text-sm '>
                    <ul className='m-0 p-0 '>
                        <li><a href="#">Custom Service</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Ordering Tracking</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                   </div>
                </div>
              </div>
              
              <div className='col-lg-2 flex'>
                <div className='footer-text2 '>
                  <h4 className='mb-8 font-bold text-underline'>My Account</h4>
                  <div className='footer-ul '>
                    <ul className='m-0 p-0 hover'>
                      <li><a href="#">Delivery Information</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Discount</a></li>
                      <li><a href="#">Custom Service</a></li>
                      <li><a href="#">Terms Condition</a></li>   
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-lg-2'>
                <div className='footer-text3 '>
                  <h4 className='mb-8 font-bold text-underline'>Social Network</h4>
                  <div className='footer-ul '>
                    <ul className=''>
                      <li><a href="#"><i class="fa-brands fa-facebook-f"></i>facebook</a></li>
                      <li><a href="#"><i class="fa-brands fa-dribbble"></i>Dribbble</a></li>
                      <li><a href="#"><i class="fa-brands fa-twitter"></i>Twitter</a></li>
                      <li><a href="#"><i class="fa-brands fa-behance"></i>Behance</a></li>
                      <li><a href="#"><i class="fa-brands fa-youtube"></i>Youtube</a></li>   
                    </ul>
                  </div>
                </div>
              </div>

                <div className='Get'>
                  <div className='footer-text4'>

                    <h4 className='mb-8 font-bold text-underline '>Get Newsletter</h4>
                    <p>Get on the list and get 10% off your first order!</p>

                    <div className='form'>
                    <form action="#">

                      <input type="text" placeholder='Enter emaail address' className='h-9  border-0 pl-7 mb-2 rounded-md'/>

                      <button className='sub-now  inline-block font-semibold px-7 py-4 rounded-sm leading-tight relative'>
                        Subscribe Now 
                        <i class="fa-solid fa-arrow-right ml-2"></i>
                      </button>

                    </form>
                    </div>
                  </div>
                </div>

              {/* <div className='call-main flex items-center justify-between'>

                <div className='call flex items-center'>
                  <div className=''>
                    <a href=""><i class="fa-solid fa-phone-flip bg-white p-3 rounded-full"></i></a>
                  </div>
                  <div className='ml-3'>  
                    <h2 className=' font-bold'>980.029.666.99</h2>
                    <p className='flex-none text-sm text-slate-400'>Worning 8.00 - 22:00</p>
                  </div>
                </div>
                  <div className='download-part'>
                    <div className=''>
                      <h3>Download App on Mobaile</h3>
                      <p>15% discount on your first purchase</p>
                    </div>

                    <div>

                    </div>
                  </div>
              
              </div> */}

            </div>
          </div>

        <div className='container mx-auto flex items-center justify-between'>
          <div className='flex items-center'>
            <a href="#" className='px-3 py-2 bg-white rounded-full'>
              <i class="fa-solid fa-phone-flip"></i>
            </a>
            <div className='ml-2'>
              <h3 className='font-bold'>980.029.666.99</h3>
              <p className='text-sm text-slate-400'>Worning 8.00 - 22:00</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <h4 className='font-bold'>Download App on Mobaile</h4>
              <p className='text-sm text-slate-400'>15% discount on your first purchase</p>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className='flex pl-2'>
                <img src={app} alt="" className='w-24 h-8 mr-2'/>

                <img src={google} alt="" className='w-24 h-8'/>
            </div>
          </div>
        </div>

              <div className='container mx-auto  footer-end flex justify-between my-6'>
                  <p className='text-slate-400 text-sm'>Copyright 2024  ©Ninico. All rights reserved. Developed by AliThemes.</p>
                

                <div className=''>
                  <img src={footer} alt="" />
                </div>

              </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
