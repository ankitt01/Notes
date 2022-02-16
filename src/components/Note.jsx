import React from 'react'

function Note({id, text, date}) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
          <small>{date}</small>
          <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  )
}

export default Note