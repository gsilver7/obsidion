import { useState } from 'react'

function Folder(props) {

  const handleFold =(e)=>{
    e.preventDefault();
    props.onC();
  }
  return (
    <button onClick={handleFold}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"></path>
  </svg>

    </button>

    
  )
}

export default Folder
