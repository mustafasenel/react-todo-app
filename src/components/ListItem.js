import React from 'react'
import { Link } from 'react-router-dom';


let getTitle = (note) => {

  let title = note.body.split('\n')[0]
  if (title.length > 45){
    return title.slice(0,450)
  }
  return title
}

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')

  if (content.length >45) {
    return content.slice(0,45) + '...'
  } else {
    return content
  }
}

export default function ListItem({note}) {
  return (
    <div className='flex flex-col p-4 gap-2 border-b-2 dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer'>
   
      <Link to={`/note/${note.id}`}>
        <h3 className='font-semibold'>{getTitle(note)}</h3>
      <div className='flex text-gray-500 dark:text-gray-400 gap-2'>
        <p>{getTime(note)}</p>
        <p>{getContent(note)}</p>
      </div>
      </Link>
  </div>

  )
}
