import React, { useEffect } from 'react'
import { useState } from 'react';
// import Navbar from "../Navbar/Navbar"
import axios from "axios";
import {Link} from 'react-router-dom'

 function Home() {
  const [data,setpeople]=useState([]);

  const loadUser = async()=>{ 
    const res = await axios.get("http://localhost:3002/people")
    console.log(res.data,"res");
    setpeople(res.data)
    console.log(res,"===")
  } 
  useEffect(()=>{
    loadUser()
  },[])

  const Ondelete = (id) =>{
    axios.delete(`http://localhost:3002/people/${id}`)
    .then((res)=>{
      console.log(res,"res");
      loadUser();
    })
    .catch((error)=>{
      console.log(error,"error");
    })
  }

  // pagination
  const [page,setpage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(2);
  const dataPerPage = itemsPerPage;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / dataPerPage);

  // pagination handlers
  const handlePrevious = () =>{
    setpage(prevPage => Math.max(prevPage - 1,1));
  }

  const handleNext = () =>{ 
    setpage(prevPage => Math.min(prevPage+1,totalPages))
   }

   const handlePageClick = (pageNumber) => {
    setpage(pageNumber);
  };

   const handleItemsPerPageChange =(event) => {
    const value = parseInt(event.target.value);
    setItemsPerPage(value);
    setpage(1);
   }

   const indexOfLastItem = page * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentData = data.slice(indexOfFirstItem,indexOfLastItem)
  return (
    <>
    {/* <Navbar/> */}
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to='/add'>Add new Student</Link>
            </button>
          </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Full Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Age
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        City
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentData.map((value, index) => (
                      <tr key={value.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
                                alt=""
                              />
                              {indexOfFirstItem + index + 1}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{value.firstname}</div>
                              {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{value.lastname}</div>
                          {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {value.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {value.city}
                        </td>
                        <td className="whitespace-nowrap px-4 space-x-2 py-4 text-right text-sm font-medium">
                          <button>
                          <Link to={`/editpage/${value.id}`}className="text-gray-500 hover:text-indigo-600">
                            Edit
                          </Link>
                          </button>
                          <button >
                          <a onClick={()=>Ondelete(value.id)} href="#" className="text-gray-500 hover:text-indigo-600">
                            Delete 
                          </a>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>    
              </div>
            </div>
          </div>
                    {/* Pagination */}
                    <div className="flex my-4 mx-4">
            <button onClick={handlePrevious} disabled={page === 1} className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 mr-2">Previous</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => handlePageClick(index + 1)} className={`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 mr-2 ${page === index + 1 ? 'active-link' : ''}`}>{index + 1}</button>
            ))}
            <button onClick={handleNext} className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Next</button>
            {/* <select className='border border-gray-300 rounded-lg mx-2 text-center' onChange={handleItemsPerPageChange} value={itemsPerPage}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select> */}
          </div>
        </div>
      </section>
    </>
  )
}
export default Home