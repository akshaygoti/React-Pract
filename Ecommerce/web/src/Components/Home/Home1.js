import React from 'react'

import '../Home/home1.css'

import cat1 from '../asset/cat01.svg'
import cat2 from '../asset/cat02.svg'
import cat3 from '../asset/cat03.svg'
import cat4 from '../asset/cat04.svg'
import cat5 from '../asset/cat05.svg'
import cat6 from '../asset/cat06.svg'

function Home1() {
    return (
        <div className='w-[90%] mx-auto py-5 '>

            <div className='container'>
                <div className='top text-start'>
                    <h2 className='font-bold text-2xl'>
                        Top
                        <span className='pl-2 font-medium text-2xl text-pink-700 '>
                            Categories..
                        </span>
                    </h2>

                    <div className='card main mt-10 flex flex-wrap justify-between'>

                        <div className='cat01 relative'>
                            <div className='catimg h-24 w-24  text-center rounded-full pl-8 pt-5'>
                                <img src={cat1} alt="" />
                                <span className=' cath block h-8 w-8 text-center leading-10 font-medium text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>20</span>
                            </div>
                            <div className='cat-text text-center pt-2'>
                                <h5 >
                                    <a href="">
                                        Driftwood <br />
                                        Table Decor
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <p className='vl'></p>

                        <div className='cat01 relative'>
                            <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                                <img src={cat2} alt="" />
                                <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>12</span>
                            </div>
                            <div className='cat-text text-center pt-2'>
                                <h5 >
                                    <a href="">
                                        Floor Driftwood<br />
                                        Sculpture
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <p className='vl'></p>

                        <div className='cat01 relative'>
                            <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                                <img src={cat3} alt="" />
                                <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>03</span>
                            </div>
                            <div className='cat-text text-center pt-2'>
                                <h5 >
                                    <a href="">
                                        Driftwood<br />
                                        Christmas Tree
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <p className='vl'></p>

                        <div className='cat01 relative'>
                            <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                                <img src={cat4} alt="" />
                                <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>09</span>
                            </div>
                            <div className='cat-text text-center pt-2'>
                                <h5 >
                                    <a href="">
                                        Wooden<br />
                                        Bluetooth Speaker
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <p className='vl'></p>

                        <div className='cat01 relative'>
                            <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                                <img src={cat5} alt="" />
                                <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>10</span>
                            </div>
                            <div className='cat-text text-center pt-2'>
                                <h5 >
                                    <a href="">
                                        Receivers <br />
                                        Amplifiers
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <p className='vl'></p>

                        <div className='cat01 relative'>
                            <div className='catimg h-24 w-24  text-center rounded-full bg-slate-300 pl-6 pt-5'>
                                <img src={cat6} alt="" />
                                <span className=' cath block h-8 w-8 text-center font-medium leading-10 text-md ::hover text-pink-700 bg-white absolute top-0 mr-0 rounded-full ml-10 rounded- shadow-md'>05</span>
                            </div>
                            <div className='cat-text text-center pt-2'>
                                <h5>
                                    <a href="">
                                        Appetizer <br />
                                        Plate Set
                                    </a>
                                </h5>
                            </div>
                        </div>

                    </div>

                    <p className='hr mt-10'></p>

                    {/* Products img */}

                </div>
            </div>


        </div>
    )
}

export default Home1
