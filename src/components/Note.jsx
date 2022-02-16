import React from 'react'

function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
          <small>{date}</small>
          <i class="fa-solid fa-trash-can delete-icon" onClick={() => handleDeleteNote(id)}></i>
      </div>
    </div>
  )
}

export default Note