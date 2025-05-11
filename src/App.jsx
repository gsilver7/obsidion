import { useState, useRef } from 'react'
import './App.css'
import Plus from './Plus.jsx'
import Search from './Search.jsx'
import Folder from './Folder.jsx'
import Graph from './Graph.jsx'
import Right from './Right/Right.jsx'
import Toggle from './Toggle.jsx'

function App() {

const [toggleActive, setToggleActive] = useState(false);  
const [TriggerToggle, setTriggerToggle] = useState(false);
const [savedData, setSavedData] = useState(null);
const [data2,setData2] = useState(null);
  const handlePlus = (e) => {
  e.preventDefault();
  setTriggerToggle(true);
    // Toggle 내부 함수 실행
}

const handleSave = (data) => {
    alert(`\n ${data.title}\n${data.description} \n${data.id}`);
    setData2(data);
  };

  const toggleVisibility = () => {
    setToggleActive(prev => !prev);
  };
  const handlefintoggle = () => {
    setTriggerToggle(false);
  };

  const handleItem = (items) => {
    alert(`${items.title}\n${items.description} \n${items.id}`);
    setSavedData(items)
  };

  return (

<div className='total'>
    <div className='left'>
    <div className='buttens'>
      <Plus setClick={handlePlus}></Plus>
      <Search></Search>
      <Folder onC={toggleVisibility}></Folder>
      <Graph> </Graph>

    </div>
    </div>
    

    <Right onSave={handleSave} commit={savedData}/>

    <Toggle isActive={toggleActive}
    data={savedData}
    sendtoggle={TriggerToggle} 
    fintoggle={handlefintoggle}
    onItemClick={handleItem}
    
    finaldata={data2}
    />
    </div>
  )
}

export default App
