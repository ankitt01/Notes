import React from 'react'

function Note() {
  return (
    <div className="note">
      <span>Hello! This is our first note! Yayy</span>
      <div className="note-footer">
          <small>14/02/22</small>
          <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  )
}

export default Note