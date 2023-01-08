import React from 'react'
import AddTodo from '../components/AddTodo'
import Header from '../components/Header'
import TodoItem from '../components/TodoItem'

export default function TodoList() {
  return (
    <div>
      <div className=' w-[450px] h-[550px] rounded-md bg-gray-100 flex flex-col py-4'>
        <Header/>
        <AddTodo/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    </div>
  )
}
