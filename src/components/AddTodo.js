import React from 'react'
import { BsPlusLg } from 'react-icons/bs';


export default function AddTodo() {
  return (
    <form className='flex items-center p-4 gap-2'>
      <input className="w-full px-3 py-2 bg-transparent rounded border-2 border-purple-600 focus:border-purple-800" 
        type="text" 
        placeholder="Add new Todo"
        name="newtodo" id="newtodo"/>
      <button className=" flex justify-center items-center w-12 h-full bg-purple-600 text-white rounded-md
          hover:bg-purple-700 hover:drop-shadow-md duration-300 ease-in" type="submit">
              <BsPlusLg/>
        </button>
    </form>
  )
}
