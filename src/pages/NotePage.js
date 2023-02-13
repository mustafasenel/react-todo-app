import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { MdArrowBack, MdDelete } from 'react-icons/md';
import Header from '../components/Header';



export default function NotePage() {

    const { id } = useParams();
    const NoteId = id
    const [note, setNote] = useState(null)

    const navigate = useNavigate();
    const goBack = () => navigate('/notes');


    useEffect(() => {
      const getNote = async () => {

        let response = await fetch(`http://127.0.0.1:8000/api/note/${id}/`)
        let data = await response.json()
        setNote(data)
    }
        if (id !== undefined) {
          getNote();
        }
        
      
      }, [id])

    
    const createNote = async () => {
      fetch(`http://127.0.0.1:8000/api/notes/create/`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }

    const updateNote = async () => {
      fetch(`http://127.0.0.1:8000/api/note/${id}/update`,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }
    const deleteNote = async () => {
      fetch(`http://127.0.0.1:8000/api/note/${id}/delete`,{
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      goBack()
    }

    const handleSubmit = () => {
      if(NoteId !== undefined && !note.body){
        deleteNote()
      } else if(NoteId !== undefined) {
        updateNote()
      }else if(NoteId === undefined && note !== null)
      {
        createNote()
      }
      goBack()
      
    }

  return (

    <div className=' w-[550px] h-[600px] rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-50 flex flex-col'>
      <Header/>
        <div className='flex items-center justify-between p-4'>
          
      <button className='text-2xl text-purple-600'>
        <MdArrowBack onClick={handleSubmit}/>
      </button>
      {NoteId !== undefined 
      ? (<button className='text-2xl text-purple-600'>
          <MdDelete onClick={deleteNote}/>
        </button>)
      : (<button onClick={handleSubmit} className='text-2xl text-purple-600'>
          Done
        </button>) }
      
    </div>

        <textarea onChange={(e)=>{setNote(
          {...note, 'body':e.target.value}
        )}} 
        value={note?.body} 
        className="p-6 h-full w-full bg-transparent outline-none border-0 resize-none"></textarea>      

    </div>
  )
}

