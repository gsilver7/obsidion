import './Right.css'
import { useState } from 'react'

function Right() {
  var today = new Date()
  var month = today.getMonth() + 1
  var day = today.getDate()
  const dateData = today.getFullYear()+"-"+(month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
  const [title, setTitle] = useState(dateData)

  return (
    <div className='right'>
    <input type="text" className='title' value={title} 
    onChange={(e)=>setTitle(e.target.value)}
      ></input>
    <textarea className='contents'></textarea>
    </div>
  )
}

export default Right
