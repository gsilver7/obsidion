import './Right.css'
import { useState,useEffect } from 'react'

function Right({onSave,commit}) {

  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState(commit?.id || null);

  const handleSave = () => {
    if (onSave) {
      const data = { title, description,id };
      onSave(data);  // 부모에 데이터 전달
    }
  }

   useEffect(() => {
    if (commit) {
      setTitle(commit.title);
      setDescription(commit.description);
      setId(commit.id);
    }
  }, [commit]);

  return (
    <div className='right'>
      <button className='creatB' onClick={handleSave}>save</button>
    <input type="text" className='title' 
    value={title} 
    onChange={(e)=>setTitle(e.target.value)}
      ></input>


    <textarea className='contents' 
    value={description}
    onChange={(e)=>setDescription(e.target.value)}></textarea>
    
    </div>
  )
}

export default Right
