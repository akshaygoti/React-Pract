import React, { useEffect, useState } from 'react';
import Data from './Tabledata';

const Table = () => {
  const [data, setData] = useState([]);
 useEffect(()=>{
  setData(Data)
 },[])

 console.log(data,"Data");
    return (
      <div className='space-x-4 content-center text-center font-semibold flex max-h-screen  items-center'>
     
      <table className='border-solid border-2 border-sky-500  w-full'>

  <tr className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>
    <th className='bo rder-solid border-2 border-sky-500 p-4 '>#</th>
    <th className='border-solid border-2 border-sky-500'>Name</th>
    <th className='border-solid border-2 border-sky-500'>Email</th>
    <th className='border-solid border-2 border-sky-500'>City</th>
    <th className='border-solid border-2 border-sky-500'>Phone</th>
  </tr>

{data.map((value, inx , arr)=>{
     return(<>
  <tr key={value.id} className='border-solid border-2 border-sky-500'>
    <td className='border-solid border-2 border-sky-500 p-2'>{value.id}</td>
    <td className='border-solid border-2 border-sky-500'>{value.name}</td>
    <td className='border-solid border-2 border-sky-500'>{value.email}</td>
    <td className='border-solid border-2 border-sky-500'>{value.address.city}</td>
    <td className='border-solid border-2 border-sky-500'>{value.phone}</td>
  </tr>
     </>)
})}
 
  {/* <tr className='border-solid border-2 border-sky-500'>
    <td className='border-solid border-2 border-sky-500 p-2'>01</td>
    <td className='border-solid border-2 border-sky-500'>Alpesh Kathirya</td>
    <td className='border-solid border-2 border-sky-500'>alpesh#@87gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Goghra</td>
    <td className='border-solid border-2 border-sky-500'>6789123456</td>
  </tr>

  <tr className='border-solid border-2 border-sky-500'>
    <td className='border-solid border-2 border-sky-500 p-2'>02</td>
    <td className='border-solid border-2 border-sky-500'>Vijay Desai</td>
    <td className='border-solid border-2 border-sky-500'>alpesh#@87gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Maria Anders</td>
    <td className='border-solid border-2 border-sky-500'>9876054321</td>
  </tr>
  
  <tr>
    <td className='border-solid border-2 border-sky-500 p-2'>03</td>
    <td className='border-solid border-2 border-sky-500'>Smit Patidar</td>
    <td className='border-solid border-2 border-sky-500'>smitthumer@gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Mexico</td>
    <td className='border-solid border-2 border-sky-500'>6589743674</td>
  </tr>

  <tr>
    <td className='border-solid border-2 border-sky-500 p-2'>04</td>
    <td className='border-solid border-2 border-sky-500'>Nikhil Ahir</td>
    <td className='border-solid border-2 border-sky-500'>nikhilahir@gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Bhavngar</td>
    <td className='border-solid border-2 border-sky-500'>9076543202</td>
  </tr>

  <tr>
    <td className='border-solid border-2 border-sky-500 p-2'>05</td>
    <td className='border-solid border-2 border-sky-500'>Uday Vekriya</td>
    <td className='border-solid border-2 border-sky-500'>uday65@gmail.com</td>
    <td className='border-solid border-2 border-sky-500'>Mexico</td>
    <td className='border-solid border-2 border-sky-500'>9876543220</td>
  </tr> */}

</table>
   </div>
    )
  
}

export default  Table;