import React from 'react'

import Home from '../../Home/Home'

import Home1 from '../../Home/Home1'


import Home2 from '../../Home/Home2'

import Home3 from '../../Home/Home3'

import Details from '../../Home/Details'
import PopularProducts from '../../PopularProducts/PopularProducts'


function Homepage() {
  return (
    <div>
      <Home/>
       <Home1/> 
      <PopularProducts/>
      <Home2/>
      <Home3/>
      {/* <Details/> */}
    </div>
  )
}

export default Homepage