import React from 'react'
import { MdDarkMode } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';



export default function Header() {
  return (
    <div className='flex items-center justify-between p-4'>
      <button className='text-2xl text-gray-800'>
        <MdLogout/>
      </button>
      <h2 className='text-2xl font-semibold'>
        My Todo List
      </h2>
      <button className='text-2xl text-gray-800'>
        <MdDarkMode/>
      </button>
    </div>
  )
}
