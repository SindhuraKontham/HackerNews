import React, { useState, useRef } from 'react';


export default function Navbar({searchFor}) {
    const [searchName, setSearchName] = useState("")

    const handleChange = e => {
        setSearchName(e.target.value)
    }

  return (
    <div className='navbar d-flex justify-content-between'>
      <h3 className='fw-semibold'>HACKERNEWS</h3>
      <div>
      <input type="text" value={searchName} onChange={handleChange} />
      <button onClick={searchFor(searchName)}>Search for...</button>
      </div>
    </div>
  );
}
