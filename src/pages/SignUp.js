import React from 'react'
import {Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';




export default function SignUp() {
  return (
    <div>
      <div className=' w-[550px] h-[600px] rounded-md bg-gray-100  dark:bg-gray-700 dark:text-gray-50 flex flex-col py-4'>
      <form className="p-10 drop-shadow-lg space-y-7" action="">
            <h1 className="text-center text-3xl">Sign Up</h1>
            <div className="flex flex-row items-end gap-2 space-y-2">
                <FaUserAlt className='text-2xl text-gray-600 dark:text-gray-300'/>
                <input className="w-full px-3 py-2 bg-transparent ring-0 border-0 border-b-2 border-purple-600  focus:border-gray-600" type="text" placeholder="Username"
                    name="username" id="username" required/>
            </div>
            <div className="flex flex-row items-end gap-2 space-y-2">
                <FaMailBulk className='text-2xl text-gray-600 dark:text-gray-300'/>
                <input className="w-full px-3 py-2 bg-transparent border-0 border-b-2 border-purple-600 focus:border-gray-600" type="email" placeholder="Email"
                    name="email" id="email" required/>
            </div>
            <div className="flex flex-row items-end gap-2 space-y-2">
                <FaLock className='text-2xl text-gray-600 dark:text-gray-300'/>
                <input className="w-full px-3 py-2 bg-transparent border-0 border-b-2 border-purple-600 focus:border-gray-600" type="password"
                    placeholder="Password" name="password" id="password" required/>
            </div>
            <div className="flex flex-row items-end gap-2 space-y-2">
                <FaLock className='text-2xl text-gray-600 dark:text-gray-300'/>
                <input className="w-full px-3 py-2 bg-transparent border-0 border-b-2 border-purple-600 focus:border-gray-600" type="password"
                    placeholder="Password Confirm" name="repassword" id="repassword" required/>
            </div>

            <button className="w-full px-10 py-2 bg-purple-600 text-white rounded-md
            hover:bg-purple-700 hover:drop-shadow-md duration-300 ease-in" type="submit">
                Sign Up
            </button>

            <Link to="/signin">
              <p className="text-center text-purple-600 dark:text-purple-400  text-sm font-light hover:underline mt-4"> 
                Already have an account?
              </p>
            </Link>
        </form>
      </div>
    </div>
  )
}
