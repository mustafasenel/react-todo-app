import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

import { TbNotes } from "react-icons/tb";

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/notes/");
    const data = await response.json();
    setNotes(data);
  };
  return (
    <div>
      <div className=" relative w-[550px] h-[600px] rounded-md bg-gray-100 dark:bg-gray-700 flex flex-col">
        <Header />
        <div className="flex justify-between p-4  text-2xl font-semibold text-purple-600 ">
          <div className="flex items-center gap-2">
            <TbNotes className="text-3xl" />
            <span>Notes</span>
          </div>
          <div>{notes.length}</div>
        </div>
        <div className="overflow-y-auto dark:bg-g">
          <AddNote />
          {notes.map((note, index) => (
            <ListItem note={note} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
