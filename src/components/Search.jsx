import React from 'react'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" onChange={(e) => handleSearchNote(e.target.value)} placeholder='Type to search..' />
    </div>
  )
}

export default Search