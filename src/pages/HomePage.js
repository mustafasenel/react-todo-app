import React from 'react'
import {Link } from "react-router-dom";



export default function HomePage() {
  return (
    <div className=' w-[450px] h-[550px] rounded-md bg-gray-100 flex items-center justify-center flex-col'>
      <img className='mb-20 w-28 h-28' src='https://img.icons8.com/arcade/512/todo-list.png' alt='main'/>
      <div className='flex flex-col justify-center items-center gap-8 mb-10'>
        <h2 className='font-semibold text-4xl'>Welcome</h2>
        <h2 className='font-bold text-4xl tracking-widest'>TODO App</h2>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Link to="signin">
          <button className='px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 font-semibold text-gray-200 '>
              Sign In
          </button>
        </Link>

        <Link to="signup">
        <button className='px-6 py-2 rounded-full bg-gradient-to-r from-zinc-100 to-indigo-200 hover:from-indigo-200 hover:to-zinc-100 border-2 border-purple-600 font-semibold'>
            Sign Up
        </button>
        </Link>
      </div>
    </div>
  )
}

