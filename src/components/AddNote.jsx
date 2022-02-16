import React, { useState } from 'react'

function AddNote({handleAddNote}) {
    const [ noteText, setNoteText] = useState('')

    const handleChange = (e) => {
        setNoteText(e.target.value)
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
  return (
    <div className='note new'>
        <textarea cols="10" rows="8" value={noteText} placeholder='Type to add a note..' onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>200 Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote