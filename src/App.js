import {useEffect, useState } from 'react'
import {nanoid} from "nanoid"
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/02/22"
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "15/02/22"
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "15/02/22"
  },
  {
    id: nanoid(),
    text: "This is my fourth note",
    date: "15/02/22"
  }
]);
const [searchText, setSearchText] = useState('')
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNotes) {
    setNotes(savedNotes);
  }
},[]);
useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
},[notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes);
}
  return (
    <div className='container darkmode' >
        <h1>Notes</h1>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
