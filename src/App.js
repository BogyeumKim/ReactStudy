import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor:'black',
    color: 'aqua',
    fontSize : 24,
    padding:'1rem'
  };
  return (  
      <>
        <Hello 
          // 이런식으로 작성하는 주석은 안나타남
        />

        {/* 태그밖에서의 주석은 이렇게 */}
        
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </>
     
  );
}

export default App;
