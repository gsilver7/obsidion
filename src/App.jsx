import { useState, useRef } from 'react'
import './App.css'
import Plus from './Plus.jsx'
import Search from './Search.jsx'
import Folder from './Folder.jsx'
import Graph from './Graph.jsx'
import Right from './Right/Right.jsx'
import Toggle from './Toggle.jsx'

function App() {

const [toggleActive, setToggleActive] = useState(false);  // 상태 공유
const [TriggerToggle, setTriggerToggle] = useState(false);

  const handlePlus = (e) => {
  e.preventDefault();
  setTriggerToggle(true);
    // Toggle 내부 함수 실행
}


  const toggleVisibility = () => {
    setToggleActive(prev => !prev);
  };
  const handlefintoggle = () => {
    setTriggerToggle(false);
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
    

    <Right>
    </Right>
    <Toggle isActive={toggleActive}
    sendtoggle={TriggerToggle} 
    fintoggle={handlefintoggle} />
    </div>
  )
}

export default App
