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
const [rightComponents, setRightComponents] = useState([]); // Right 컴포넌트 목록

  const handlePlus = (e) => {
  e.preventDefault();
  setTriggerToggle(true);
    // Toggle 내부 함수 실행
}

const handleSave = (data) => {
    setData2(data);
  };

  const toggleVisibility = () => {
    setToggleActive(prev => !prev);
  };
  const handlefintoggle = () => {
    setTriggerToggle(false);
  };

  const handleItem = (items) => {
    const newRight = {
      id: items.id,
      description: items.description,
      title: items.title
    };
    setRightComponents(prev => {
    const exists = prev.some(comp => comp.id === items.id);
    if (exists) return prev;  // 중복이면 추가 안 함
    return [...prev, newRight];  // 중복 아니면 추가
  });
    setSavedData(items)
  };


 const handleCloseRight = (idToRemove) => {
    setRightComponents(prev => prev.filter(comp => comp.id !== idToRemove));
 }


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
   
    <div className='right-map'>
        {rightComponents.map((savedData) => (
        <Right key={savedData.id} onSave={handleSave} commit={savedData} sendClose={handleCloseRight}/>
      ))}
    </div>
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
