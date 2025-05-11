import './Toggle.css'
import React, { useState,useEffect } from 'react';

function Toggle({isActive,sendtoggle, fintoggle}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (sendtoggle) {
      addItems();

      // 작업 완료 후 부모에게 알림 (선택 사항)
      if (fintoggle) {
        fintoggle();
      }
    }
  }, [sendtoggle]);

  const addItems = () => {
    const newItem = {
      title: `Item ${items.length + 1}`,
      description: `This is the description of item ${items.length + 1}`,  // 설명 추가
    };
    setItems([...items, newItem]);
  };


  return (
    <div>
      {isActive && (
          <div className="tol">
        {items.map((item, index) => (
          <div key={index} className="item">
            <button className="item-label">{item.title}</button>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Toggle;
