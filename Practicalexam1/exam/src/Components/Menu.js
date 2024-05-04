import React from 'react'
import exam0 from './asset/exam0-img.jpeg'
import exam1 from './asset/exam1.jpeg'
import exam2 from './asset/exam2.jpeg'

function Menu(props) {
  return (
    <>

    <h1>This is menu page</h1>
    <div className=' flex mt-2 justify-between items-center py-5 pl-5 pr-5'>

      <div class="max-w-sm rounded overflow-hidden shadow-lg  w-64 h-[50%]">
        <img  src={exam0} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <i class="fa-solid fa-circle-down motion-safe:animate-spin  text-2xl bg-slate-500 rounded-full w-10 h-10 p-1"></i>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class=":hoinline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 ">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#winter</span>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg  w-64 h-[50%]">
        <img  src={exam1} alt="Sunset in the mountains" className='h-40 w-full'/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">All About Img</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <i class="fa-solid fa-circle-down hover:animate-spin  text-2xl bg-slate-500 rounded-full w-10 h-10 p-1"></i>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#winter</span>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg  w-64 h-[50%]">
        <img  src={exam2} alt="Sunset in the mountains" className='h-40 w-full'/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Your Choise</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <i class="fa-solid fa-circle-down animate-bounce text-2xl bg-slate-500 rounded-full w-10 h-10 p-1"></i>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200">#winter</span>
        </div>
      </div>
    </div>
    
    </>
      
  )
}

export default Menu
