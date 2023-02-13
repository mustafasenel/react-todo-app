import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom'


export default function AddNote() {
  return (
    <Link to="/notes/new">
      <button className='absolute bottom-10 right-10 rounded-full bg-purple-600 p-6 text-xl text-white cursor-pointer hover:bg-purple-800'>
        <BsPlusLg/>
      </button>
    </Link>
  )
}
