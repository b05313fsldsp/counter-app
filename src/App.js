import logo from './logo.svg';
import './App.css';
import React from 'react';

const word = 'React';
// JavaScript
// 定義 inline-style 行內樣式
const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};

const { useState } = React;

// 在 style 中帶入物件，即可撰寫出 inline-style
const Counter = () => {
   const [count, setCount] = useState(256);

  return (
    <div className="container">
      {console.log("render", count)}
      <div 
      className="chevron chevron-up" 
      onClick={() => {
        setCount(count + 1);
        console.log(`current count is ${count}`);
      }}
      />
      
      <div className="number">{count}</div>
      <div className="chevron chevron-down" 
      onClick={() => {
        setCount(count - 1);
      }}
      />
    </div>
  );
};

function App() {
  return (

    <div className="container"

      style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      }}
    >


     <Counter />
     <Counter />
     <Counter />
    </div>
  );
}

export default App;
