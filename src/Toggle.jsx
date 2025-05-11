import './Toggle.css'
import React, { useState,useEffect } from 'react';

function Toggle({isActive,data,sendtoggle, fintoggle, onItemClick,finaldata}) {
  const [items, setItems] = useState([]);
  
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const dateData = today.getFullYear()+"-"+(month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
  useEffect(() => {
  console.log("처음 렌더링 시 한 번 실행됨");
  setItems; // 이 함수가 한 번만 실행됨
}, []);
  useEffect(() => {
    if (sendtoggle) {
      addItems();

      // 작업 완료 후 부모에게 알림 (선택 사항)
      if (fintoggle) {
        fintoggle();
      }
    }
  }, [sendtoggle]);

  useEffect(() => {
if (finaldata) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === finaldata.id
          ? {
              ...item,
              title: finaldata.title,
              description: finaldata.description,
            }
          : item
      )
    );
  }
  }, [finaldata]);

  const addItems = () => {
    const newItem = {
      id: `${items.length+1}`,
      title: `${dateData} (${items.length + 1})`,
      description: `This is the description of item ${items.length + 1}`,  // 설명 추가
    };
    setItems([...items, newItem]);
  };
  const handdle = (items) => {
    if (onItemClick) {
      onItemClick(items); // 부모로 item 전달
    }
  };

  return (
    <div>
      {isActive && (
          <div className="tol">
        {items.map((item) => (
          <div key={item.id}>
            <button className="item"
            onClick={()=>handdle(item)}
            >{item.title}</button>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Toggle;
