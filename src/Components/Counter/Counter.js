import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const handleOnClick = () => {
    increment();
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Contador: {count}</p>
      <button onClick={handleOnClick}>Incrementar el Contador + 1</button>
    </div>
  );
}

export default Counter;
