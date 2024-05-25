import  { useState } from 'react';
const MyButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  };

  return (
    <div id='mainDiv'>
        <h3 id='compo'>Component of Button </h3>
      <button id='me' onClick={increment}>Click to Add 2 </button>
      <p id='count'>Count: {count}</p>
    </div>
  );
};

export default MyButton;