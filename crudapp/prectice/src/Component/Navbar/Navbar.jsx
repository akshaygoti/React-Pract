import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

  return (
    <div>
      <div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span class="font-bold text-2xl">Navbar</span>
    </div>
    <div class="hidden lg:block">
      <ul class="inline-flex space-x-8 ">
        <li>
          <Link
            to="/"
            class="text-lg font-simbold  text-black hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            class="text-lg font-simbold  text-black hover:text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/Register"
            class="text-lg font-simbold  text-black hover:text-white"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/edit"
            class="text-lg font-simbold  text-black hover:text-white"
          >
            Edit
          </Link>
        </li>
        <li>
          <Link
            to="/Credit"
            class="text-lg font-simbold  text-black hover:text-white"
          >
            Credit
          </Link>
        </li>
      </ul>
    </div>
    <div class="hidden lg:block">
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
       Open
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar