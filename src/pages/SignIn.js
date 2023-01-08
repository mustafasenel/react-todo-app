import React from 'react'
import {Link } from "react-router-dom";
import { FaMailBulk } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';



export default function SignIn() {
  return (
    <div>
    <div className=' w-[450px] h-[550px] rounded-md bg-gray-100 flex flex-col py-4'>
    <form className="p-10 drop-shadow-lg space-y-10" action="">
          <h1 className="text-center text-3xl">Sign In</h1>
     
          <div className="flex flex-row items-end gap-2 space-y-2">
              <FaMailBulk className='text-2xl text-gray-600'/>
              <input className="w-full px-3 py-2 bg-transparent border-0 border-b-2 border-purple-600 focus:border-gray-600" type="email" placeholder="Your Email"
                  name="email" id="email"/>
          </div>
          <div className="flex flex-row items-end gap-2 space-y-2">
              <FaLock className='text-2xl text-gray-600'/>
              <input className="w-full px-3 py-2 bg-transparent border-0 border-b-2 border-purple-600 focus:border-gray-600" type="password"
                  placeholder="Your Password" name="password" id="password"/>
          </div>
        

          <button className="w-full px-10 py-2 bg-purple-600 text-white rounded-md
          hover:bg-purple-700 hover:drop-shadow-md duration-300 ease-in" type="submit">
              Sign In
          </button>

          <Link to="/signup">
            <p className="text-center text-purple-600 text-sm font-light hover:underline mt-4"> 
              Do not have an account?
            </p>
          </Link>
      </form>
    </div>
  </div>
  )
}
