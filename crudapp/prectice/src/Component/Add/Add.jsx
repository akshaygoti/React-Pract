import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Add() {
  
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    age: "",
    city: "",
  });
  
  const onsubmitstudent = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/people", student);  
    navigate("/")
  };

  return (
    <section>
      <div className="">
        <div className="pt-10 ">
          <div className="xl:mx-auto xl:w-full  xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold flex justify-center leading-tight text-black sm:text-4xl">
              Add Student
            </h2>
            <form
              onSubmit={onsubmitstudent}
              action="#"
              method="POST"
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Firstname{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="First Name"
                      id="firstname"
                      name="firstname"
                     onChange={(e)=>setStudent({...student,firstname:e.target.value})}
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Lastname{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Last name"
                      id="name"
                      name="lastname"
                     onChange={(e)=>setStudent({...student,lastname:e.target.value})}

                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Age{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="age"
                      id="age"
                      name="age"
                     onChange={(e)=>setStudent({...student,age:e.target.value})}

                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    City{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="city"
                      id="city"
                      name="city"
                     onChange={(e)=>setStudent({...student,city:e.target.value})}

                    ></input>
                  </div>
                </div>
                <div>
                  <button
                  
                   type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Add;
