import {useState } from 'react'
import {nanoid} from "nanoid"
import './App.css';
import NotesList from './components/NotesList';

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
  return (
    <div className='container' >
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
