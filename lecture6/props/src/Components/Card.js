import React  from 'react'


function Card(props){
    console.log();
    return (
        <div className='flex justify-around'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <img src= {props.imgscr}alt="Girl in a jacket" width="400" height="500"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-gray-700 text-base">
                    {props.hading}
                  </p>
                 </div>
                 <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span1}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span2}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span3}</span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img src= {props.imgscr}alt="Girl in a jacket" width="400" height="500"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-gray-700 text-base">
                    {props.hading}
                  </p>
                 </div>
                 <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span1}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span2}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span3}</span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img src= {props.imgscr}alt="Girl in a jacket" width="400" height="500"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-gray-700 text-base">
                    {props.hading}
                  </p>
                 </div>
                 <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span1}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span2}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.span3}</span>
                </div>
            </div>
        </div>
    );
}
export default Card
