import React from 'react'
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';


export default function TodoItem() {
  return (
    <div className='flex items-center justify-between p-2 m-2 gap-2 border-b-2'>
    <input type="checkbox" className="rounded-full w-6 h-6 bg-transparent border-purple-600 text-purple-600 focus:ring-0 checked:bg-purple-600" />
    <p className='grow'>todo detail and content</p>
    <div className='flex items-center justify-center gap-4'>
      <button className='text-xl text-gray-800'>
          <MdEdit/>
      </button>
      <button className='text-xl text-red-600'>
          <MdDelete/>
      </button>
    </div>
  </div>

  )
}
