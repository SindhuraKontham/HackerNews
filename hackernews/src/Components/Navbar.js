import React, { useState } from 'react';


export default function Navbar({searchFor}) {
    const [searchName, setSearchName] = useState("")

    const handleChange = e => {
        setSearchName(e.target.value)
    }

  return (
    <div>
      <input type="text" value={searchName} onChange={handleChange} />
      <button onClick={searchFor(searchName)}>Search for...</button>
    </div>
  );
}
